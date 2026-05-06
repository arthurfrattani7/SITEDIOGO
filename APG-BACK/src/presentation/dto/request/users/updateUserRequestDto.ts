import { PartialType } from '@nestjs/swagger';
import { CreateUserRequestDto } from './createUserRequestDto';

export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) {}