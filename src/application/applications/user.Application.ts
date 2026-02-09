import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDomain } from '../../domain/services/user.domain';
import { UserValidate } from 'validate/services/user.Validate';
import { IGetUserById } from 'data/interfaces/iUser.Interface';
import { CreateUserRequestDto } from 'presentation/dto/request/createUserRequestDto';
import { UserEntity } from 'data/entities/user.Entity';
import { UpdateUserRequestDto } from 'presentation/dto/request/updateUserRequestDto';
import { IUpdateUserData } from 'data/interfaces/iUser.Interface';
import { IDeleteUser } from 'data/interfaces/iUser.Interface';
import * as bcrypt from 'bcrypt';
import { ICreateUserData } from 'data/interfaces/iUser.Interface';
import { MailProvider } from 'data/providers/mailServices/emailTransporter';
import { EmailContent } from 'data/providers/mailServices/emailContent.model';
import { addHours } from 'date-fns';
import { RandomCodeGenerator } from 'util/code';
import { VerifyUserRequestDto } from 'presentation/dto/request/verifyUserRequestDto';

@Injectable()
export class UserApplication {
  constructor(
    private userDomain: UserDomain,
    private userValidate: UserValidate,
    private sendingMail: MailProvider
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
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds)

    const code = RandomCodeGenerator.generateAlphaNumeric(6); 
    const codeHash = await bcrypt.hash(code, 10);
    const expiredAt = addHours(new Date(), 2);

    if (userExists) {
      throw new BadRequestException ('O e-mail informado já está sendo utilizado por outra conta.');
    }

    // Se passar na regra, chama o domínio para executar o "verbo" criar
   const userData: ICreateUserData = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword, // Envia o hash, não a senha real!
      type: 'leitor',
      verificationCodeHash: codeHash,
      verificationExpiredAt: expiredAt,
    };

    const newUser = await this.userDomain.create(userData);

    const contentEmail: EmailContent[] = [
      new EmailContent(
        `<h2>Bem-vindo ao Blog do Diogo! Seu código de ativação é: ${code}</h2>`, 
        'Blog Diogo- Ative sua conta', 
        [newUser.email]
      ),
    ];

    this.sendingMail.sendEmailList(contentEmail).catch(err => console.error("Erro e-mail:", err));

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
    userId: id 
  };

  // O contrato e não apenas o número
  return await this.userDomain.deleteUser(deleteContract);
  }

  async requestVerificationCode(userId: number, email: string): Promise<void> {
  // Gerar código alfanumérico de 6 dígitos (Ex: A1B2C3)
  const code = RandomCodeGenerator.generateAlphaNumeric(6)

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

  // Enviar o e-mail. 
  const contentEmail: EmailContent[] = [
    new EmailContent(
      `<h2>Seu código BlogDiogo ${code}</h2>`, 
      'Blog Diogo - Código de Verificação', 
      [email]
    ),
  ];

  await this.sendingMail.sendEmailList(contentEmail);
  }

  async verifyAccount(dto: VerifyUserRequestDto): Promise<void> {
  const user = await this.userDomain.getByEmail(dto.email);
  if (!user) {
    throw new BadRequestException('Usuário não encontrado.');
  }

  // 2. Valida se já está verificado
  if (user.isVerified) {
    throw new BadRequestException('Esta conta já foi verificada anteriormente.');
  }

  // 3. Valida se o código expirou
  if (user.verificationExpiredAt && new Date() > user.verificationExpiredAt) {
    throw new BadRequestException('O código de verificação expirou. Solicite um novo código.');
  }

  // 4. Compara o código enviado com o Hash guardado no MySQL
  const isMatch = await bcrypt.compare(dto.code, user.verificationCodeHash || '');
  if (!isMatch) {
    throw new BadRequestException('Código de verificação inválido.');
  }

  // 5. Ativa o usuário e limpa os campos de segurança
  await this.userDomain.updateUser(user.id, {
    isVerified: true,
    verificationCodeHash: null,
    verificationExpiredAt: null,
  } as IUpdateUserData);
  }
}