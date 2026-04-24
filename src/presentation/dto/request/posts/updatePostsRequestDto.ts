import { PartialType } from '@nestjs/swagger';
import { CreatePostRequestDto } from './createPostsRequestDto';

export class UpdatePostRequestDto extends PartialType(CreatePostRequestDto) {}