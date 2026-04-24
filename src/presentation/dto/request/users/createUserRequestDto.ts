import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserRequestDto {
  @ApiProperty({
    example: "Diogo Gonçalves",
    description: "Nome completo do utilizador",
  })
  name: string;

  @ApiProperty({
    example: "email@email.com",
    description: "Email único para acesso",
  })
  @IsEmail({}, { message: "O formato do e-mail é inválido" })
  @IsNotEmpty({ message: "O e-mail é obrigatório" })
  email: string;

  @ApiProperty({
    example: "senha123",
    description: "Senha da conta do utilizador",
  })
  @IsString()
  @IsNotEmpty({ message: "A senha é obrigatória" })
  @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
  password: string;
}
