import { BadRequestException, Injectable } from "@nestjs/common";
import { UserDomain } from "../../domain/services/user.domain";
import { UserValidate } from "validate/services/user.Validate";
import { IGetUserById } from "data/interfaces/iUser.Interface";
import { CreateUserRequestDto } from "presentation/dto/request/createUserRequestDto";
import { UserEntity } from "data/entities/user.Entity";
import { UpdateUserRequestDto } from "presentation/dto/request/updateUserRequestDto";
import { IUpdateUserData } from "data/interfaces/iUser.Interface";
import { IDeleteUser } from "data/interfaces/iUser.Interface";
import * as bcrypt from "bcrypt";
import { ICreateUserData } from "data/interfaces/iUser.Interface";
import { MailProvider } from "data/providers/mailServices/emailTransporter";
import { EmailContent } from "data/providers/mailServices/emailContent.model";
import { addHours } from "date-fns";
import { RandomCodeGenerator } from "util/code";
import { VerifyUserRequestDto } from "presentation/dto/request/verifyUserRequestDto";
import { JwtService } from "@nestjs/jwt";
import { LoginRequestDto } from "presentation/dto/request/loginRequestDto";
import { UnauthorizedException } from "@nestjs/common";
import { LoginResponseDto } from "presentation/dto/response/loginResponse.dto";
import { ResetPasswordRequestDto } from "presentation/dto/request/resetPasswordRequestDto";
import { UserApplicationMapper } from "application/mapping/changePassword.mapping";

@Injectable()
export class UserApplication {
  constructor(
    private userDomain: UserDomain,
    private userValidate: UserValidate,
    private sendingMail: MailProvider,
    private jwtService: JwtService,
    private userApplicationMapper: UserApplicationMapper,
  ) {}

  // Orquestra a listagem de todos os utilizadores.
  async getAllUsers() {
    // Aqui poderíamos validar se quem pede tem permissão de 'admin'
    return await this.userDomain.getAllUsers();
  }

  // Orquestra a busca de um utilizador por ID com validação prévia.
  async getUserById(data: IGetUserById) {
    const { userId } = data;

    // Validação: A regra de negócio permite continuar?
    await this.userValidate.isValidUser(userId);

    // Execução: Chama o domínio para processar o verbo
    return await this.userDomain.getUserById(userId);
  }

  async createUser(dto: CreateUserRequestDto): Promise<UserEntity> {
    // Regra de Negócio: Validar se o e-mail já está em uso
    const userExists = await this.userDomain.getByEmail(dto.email);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

    const code = RandomCodeGenerator.generateAlphaNumeric(6);
    const codeHash = await bcrypt.hash(code, 10);
    const expiredAt = addHours(new Date(), 2);

    if (userExists) {
      throw new BadRequestException(
        "O e-mail informado já está sendo utilizado por outra conta.",
      );
    }

    // Se passar na regra, chama o domínio para executar o "verbo" criar
    const userData: ICreateUserData = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword, // Envia o hash, não a senha real!
      type: "leitor",
      verificationCodeHash: codeHash,
      verificationExpiredAt: expiredAt,
    };

    const newUser = await this.userDomain.create(userData);

    const htmlPersonalizado = await this.getEmailTemplate(
      "Bem-vindo(a)!",
      "Falta pouco para você concluir seu cadastro. Utilize o código de ativação abaixo para verificar sua conta:",
      code,
    );

    const contentEmail: EmailContent[] = [
      new EmailContent(htmlPersonalizado, "APG EMPRESA - Ative sua conta", [
        newUser.email,
      ]),
    ];

    this.sendingMail
      .sendEmailList(contentEmail)
      .catch((err) => console.error("Erro e-mail:", err));

    return newUser;
  }

  async updateUser(id: number, dto: UpdateUserRequestDto) {
    await this.userValidate.isValidUser(id);

    // Mapear APENAS o que é permitido editar via API
    const updateData: IUpdateUserData = {
      name: dto.name,
      password: dto.password,
    };

    return await this.userDomain.updateUser(id, updateData);
  }

  async deleteUser(id: number) {
    await this.userValidate.isValidUser(id);

    // Criar o objeto que satisfaz a interface IDeleteUser
    const deleteContract: IDeleteUser = {
      userId: id,
    };

    // O contrato e não apenas o número
    return await this.userDomain.deleteUser(deleteContract);
  }

  async requestVerificationCode(userId: number, email: string): Promise<void> {
    // Gerar código alfanumérico de 6 dígitos (Ex: A1B2C3)
    const code = RandomCodeGenerator.generateAlphaNumeric(6);

    // Definir expiração (Ex: Agora + 2 horas)
    const expiredAt = addHours(new Date(), 2);

    // Criar o Hash do código para segurança no banco
    const saltRounds = 10;
    const codeHash = await bcrypt.hash(code, saltRounds);

    // Salvar no banco via Domínio
    await this.userDomain.updateVerificationData(userId, {
      verificationCodeHash: codeHash,
      verificationExpiredAt: expiredAt,
    });

    const htmlPersonalizado = await this.getEmailTemplate(
      "Recuperação de Senha",
      "Recebemos um pedido para redefinir a senha da sua conta. Utilize o código de verificação abaixo:",
      code,
    );

    const contentEmail: EmailContent[] = [
      new EmailContent(
        htmlPersonalizado,
        "APG EMPRESA - Código de Verificação",
        [email],
      ),
    ];

    await this.sendingMail.sendEmailList(contentEmail);
  }

  async verifyAccount(dto: VerifyUserRequestDto): Promise<void> {
    const user = await this.userDomain.getByEmail(dto.email);
    if (!user) {
      throw new BadRequestException("Usuário não encontrado.");
    }

    if (user.isVerified) {
      throw new BadRequestException(
        "Esta conta já foi verificada anteriormente.",
      );
    }

    if (user.verificationExpiredAt && new Date() > user.verificationExpiredAt) {
      throw new BadRequestException(
        "O código de verificação expirou. Solicite um novo código.",
      );
    }

    const isMatch = await bcrypt.compare(
      dto.code,
      user.verificationCodeHash || "",
    );
    if (!isMatch) {
      throw new BadRequestException("Código de verificação inválido.");
    }

    await this.userDomain.updateUser(user.id, {
      isVerified: true,
      verificationCodeHash: null,
      verificationExpiredAt: null,
    } as IUpdateUserData);
  }

  async login(dto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.userDomain.getByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException("E-mail ou senha incorretos.");
    }

    if (!user.isVerified) {
      throw new UnauthorizedException(
        "Esta conta ainda não foi verificada. Verifique o seu e-mail.",
      );
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException("E-mail ou senha incorretos.");
    }

    const payload = { sub: user.id, email: user.email, type: user.type };

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
      },
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async updateUserType(id: number, newType: "leitor" | "autor" | "admin") {
    await this.userValidate.isValidUser(id);

    const updateData: IUpdateUserData = {
      type: newType,
    };

    return await this.userDomain.updateUser(id, updateData);
  }

  async resendCodeByEmail(email: string): Promise<void> {
    const user = await this.userDomain.getByEmail(email);
    if (!user) throw new BadRequestException("Usuário não encontrado.");

    await this.requestVerificationCode(user.id, user.email);
  }

  async resetPassword(dto: ResetPasswordRequestDto): Promise<void> {
    const user = await this.userDomain.getByEmail(dto.email);
    if (!user) throw new BadRequestException("Utilizador não encontrado.");

    // Validação do código (bcrypt compare)
    const isMatch = await bcrypt.compare(
      dto.code,
      user.verificationCodeHash || "",
    );
    if (!isMatch)
      throw new BadRequestException("Código de verificação inválido.");

    if (user.verificationExpiredAt && new Date() > user.verificationExpiredAt) {
      throw new BadRequestException("O código de verificação expirou.");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const updateData =
      this.userApplicationMapper.toResetPasswordUpdate(hashedPassword);

    await this.userDomain.updateUser(user.id, updateData);
  }

  async getEmailTemplate(title: string, message: string, code: string) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #1a4d7a; padding: 25px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">APG EMPRESA</h1>
      </div>
      <div style="padding: 30px; background-color: #ffffff; color: #333333;">
        <h2 style="color: #1a4d7a; font-size: 20px; margin-top: 0;">${title}</h2>
        <p style="font-size: 16px; line-height: 1.5; color: #475569;">${message}</p>
        
        <div style="background-color: #f8fafc; border: 2px dashed #c9a961; padding: 20px; text-align: center; margin: 30px 0; border-radius: 8px;">
          <span style="font-size: 14px; color: #64748b; text-transform: uppercase; font-weight: bold;">Seu Código</span>
          <h2 style="margin: 10px 0 0 0; font-size: 36px; letter-spacing: 8px; color: #1a4d7a;">${code}</h2>
        </div>
        
        <p style="font-size: 14px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          Este código é válido por 2 horas. Se você não solicitou esta ação, por favor, ignore este e-mail.
        </p>
      </div>
    </div>
  `;
  }
}
