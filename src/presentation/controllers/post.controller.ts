import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { PostApplication } from 'application/applications/posts.Application';
import { CreatePostRequestDto } from 'presentation/dto/request/createPostsRequestDto';
import { PostResponseDto } from '../dto/response/postResponse.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostController {
  constructor(private readonly postApplication: PostApplication) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as notícias do blog' })
  @ApiOkResponse({ type: [PostResponseDto] })
  async findAll(): Promise<PostResponseDto[]> {
    return await this.postApplication.listAllPosts();
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova notícia (público para leitura, restrito na lógica)' })
  @ApiCreatedResponse({ 
    description: 'Notícia criada com sucesso.',
    type: PostResponseDto 
  })
  async create(@Body() createPostDto: CreatePostRequestDto): Promise<PostResponseDto> {
    // O Controller passa o DTO para a Application, que o valida como ICreatePost
    return await this.postApplication.createPost(createPostDto);
  }
}