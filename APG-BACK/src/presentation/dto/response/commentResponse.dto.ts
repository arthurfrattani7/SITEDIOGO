import { ApiProperty } from '@nestjs/swagger';

export class CommentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  commentDate: Date; 

  @ApiProperty({ description: 'Nome do autor do comentário' })
  userName?: string; 
}