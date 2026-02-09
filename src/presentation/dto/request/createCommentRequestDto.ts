import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateCommentRequestDto {
  @ApiProperty({ example: 'Muito bom este post!' })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  postId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;
}