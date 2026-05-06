import { ApiProperty } from '@nestjs/swagger';

class LoginUserResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  type: string;
}

export class LoginResponseDto {
  @ApiProperty()
  user: LoginUserResponseDto;

  @ApiProperty()
  access_token: string;
}