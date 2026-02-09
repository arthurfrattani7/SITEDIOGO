import { ApiProperty } from '@nestjs/swagger';

export class ResendVerificationRequestDto {
  @ApiProperty({ example: 'diogo@email.com' })
  email: string;
}