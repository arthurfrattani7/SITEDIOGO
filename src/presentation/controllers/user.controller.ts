import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { UserApplication } from "../../application/applications/user.Application";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { UserResponseDto } from "presentation/dto/response/userResponse.dto";
import { CreateUserRequestDto } from "presentation/dto/request/createUserRequestDto";
import { UpdateUserRequestDto } from "presentation/dto/request/updateUserRequestDto";
import { VerifyUserRequestDto } from "presentation/dto/request/verifyUserRequestDto";
import { LoginRequestDto } from "presentation/dto/request/loginRequestDto";
import { JwtAuthGuard } from "application/guards/jwtAuth.Guard";
import { UpdateTypeRequestDto } from "presentation/dto/request/updateTypeRequestDto";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ResendCodeRequestDto } from "presentation/dto/request/resendCodeRequestDto";
import { ResetPasswordRequestDto } from "presentation/dto/request/resetPasswordRequestDto";

@Controller("users")
@ApiBearerAuth()
@ApiTags("Users")
export class UserController {
  constructor(private readonly userApplication: UserApplication) {}

  // Busca todos os utilizadores (leitores e autores)
  @Get()
  async findAll() {
    return await this.userApplication.getAllUsers();
  }

  // Busca um utilizador específico validando a existência
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.userApplication.getUserById({ userId: id });
  }

  @Post()
  @ApiOperation({
    summary: "Cria conta e envia código de verificação por e-mail",
  })
  @ApiCreatedResponse({
    description: "Utilizador criado com sucesso.",
    type: UserResponseDto,
  })
  async create(@Body() dto: CreateUserRequestDto): Promise<UserResponseDto> {
    const user = await this.userApplication.createUser(dto);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      data_criacao: user.data_criacao,
    };
  }

  @Put(":id")
  @ApiOperation({ summary: "Atualiza nome ou senha de um usuário" })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateUserRequestDto,
  ) {
    return await this.userApplication.updateUser(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove um usuário permanentemente" })
  async remove(@Param("id", ParseIntPipe) id: number) {
    await this.userApplication.deleteUser(id);
    return { message: "Usuário removido com sucesso!" };
  }

  @Post("verify")
  @ApiOperation({
    summary: "Verifica o código de 6 dígitos enviado por e-mail",
  })
  async verify(@Body() dto: VerifyUserRequestDto) {
    await this.userApplication.verifyAccount(dto);
    return { message: "Sua conta FolhaMax foi verificada com sucesso!" };
  }

  @Post("login")
  @ApiOperation({ summary: "Realiza o login e retorna o token JWT" })
  async login(@Body() dto: LoginRequestDto) {
    return await this.userApplication.login(dto);
  }

  @Patch(":id/changeType")
  @ApiOperation({
    summary: "Altera o cargo do utilizador (Leitor, Autor ou Admin)",
  })
  @UseGuards(JwtAuthGuard)
  async changeType(@Param("id") id: string, @Body() dto: UpdateTypeRequestDto) {
    await this.userApplication.updateUserType(+id, dto.type);

    return {
      message: `O utilizador ${id} agora é um ${dto.type}.`,
    };
  }

  @Post("resendCode")
  @ApiOperation({ summary: "Reenvia o código de verificação" })
  async resendCode(@Body() dto: ResendCodeRequestDto) {
    await this.userApplication.resendCodeByEmail(dto.email);
    return { message: "Um novo código foi enviado para o seu e-mail." };
  }

  @Post("resetPassword")
  @ApiOperation({
    summary:
      "Redefine a senha do utilizador usando o código enviado por e-mail",
  })
  async resetPassword(@Body() dto: ResetPasswordRequestDto) {
    await this.userApplication.resetPassword(dto);
    return { message: "Sua senha foi alterada com sucesso!" };
  }
}
