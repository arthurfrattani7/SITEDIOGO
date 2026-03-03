import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PostApplication } from 'application/applications/posts.Application';
import { CreatePostRequestDto } from 'presentation/dto/request/createPostsRequestDto';
import { PostResponseDto } from '../dto/response/postResponse.dto';
import { JwtAuthGuard } from 'application/guards/jwtAuth.Guard';
import { RolesGuard } from 'application/guards/roles.Guard';
import { Roles } from 'application/decorators/rolesDecorator';
import { RequestWithUser } from 'data/interfaces/IRequestWithUser.Interface';

@ApiBearerAuth() // <--- ADICIONE ISTO para liberar o cadeado no Swagger
@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postApplication: PostApplication) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as notícias do blog' })
  @ApiOkResponse({ type: [PostResponseDto] })
  async findAll(): Promise<PostResponseDto[]> {
    return await this.postApplication.listAllPosts();
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('autor', 'admin')
  @ApiBearerAuth()
  async create(
    @Body() createPostDto: CreatePostRequestDto, 
    @Request() req: RequestWithUser 
  ): Promise<PostResponseDto> {
    
    const authorId = req.user.sub;

    return await this.postApplication.createPost({
      ...createPostDto,
      authorId: authorId 
      });
    }
  }