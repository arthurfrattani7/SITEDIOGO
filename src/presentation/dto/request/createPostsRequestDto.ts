import { ApiProperty } from '@nestjs/swagger';

export class CreatePostRequestDto {
  @ApiProperty({ example: 'Minha primeira notícia' })
  title: string;

  @ApiProperty({ example: 'Conteúdo da notícia...' })
  content: string;

  @ApiProperty({ example: 1 })
  authorId: number;

  @ApiProperty({ example: 2 })
  categorieId: number;
}