import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyUserRequestDto {
  @ApiProperty({ example: 'arthurtesteapi@hotmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'A1B2C3', description: 'Código de 6 caracteres enviado por e-mail' })
  @IsString()
  @Length(6, 6, { message: 'O código deve ter exatamente 6 caracteres' })
  @IsNotEmpty()
  code: string;
}