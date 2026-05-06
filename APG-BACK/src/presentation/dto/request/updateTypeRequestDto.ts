import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTypeRequestDto {
  @ApiProperty({ example: 'autor', enum: ['autor', 'admin'] })
  @IsNotEmpty({ message: 'O cargo não pode estar vazio.' })
  @IsEnum(['leitor', 'autor', 'admin'], { message: 'O cargo deve ser leitor, autor ou admin.' })
  type: 'leitor' | 'autor' | 'admin';
}