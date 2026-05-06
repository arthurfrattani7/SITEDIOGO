import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDto {
  @ApiProperty({ example: 1, description: 'ID único do post' })
  id: number;

  @ApiProperty({ example: 'Minha primeira notícia', description: 'Título do post' })
  title: string;

  @ApiProperty({ example: 'Conteúdo completo aqui...', description: 'Corpo da notícia' })
  content: string;

  @ApiProperty({ example: '2026-01-24T00:00:00Z', description: 'Data de publicação' })
  publicationDate: Date;

  @ApiProperty({ example: 1, description: 'ID do autor (User)' })
  authorId: number;

  @ApiProperty({ example: 2, description: 'ID da categoria' })
  categorieId: number;
}