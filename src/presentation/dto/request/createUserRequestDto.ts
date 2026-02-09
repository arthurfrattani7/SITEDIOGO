import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequestDto {
  @ApiProperty({ example: 'Diogo Gonçalves', description: 'Nome completo do utilizador' })
  name: string;

  @ApiProperty({ example: 'email@email.com', description: 'Email único para acesso' })
  email: string;

  @ApiProperty({ example: 'senha123', description: 'Senha de acesso' })
  password: string;
}