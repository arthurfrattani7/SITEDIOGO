import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentRequestDto {
  @ApiProperty({ example: 'Este comentário foi editado pelo autor.' })
  @IsString()
  @IsNotEmpty()
  text: string;
}