import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
  @ApiProperty({ example: 1, description: 'ID gerado automaticamente pelo banco' })
  id: number;

  @ApiProperty({ example: 'Tecnologia', description: 'Nome da categoria cadastrada' })
  name: string;
}