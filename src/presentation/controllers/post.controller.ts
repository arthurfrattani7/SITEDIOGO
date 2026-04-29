import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { PostApplication } from "application/applications/posts.Application";
import {
  CreatePostRequestDto,
  UpdatePostRequestDto,
} from "presentation/dto/request/posts/createPostsRequestDto";
import { PostResponseDto } from "../dto/response/postResponse.dto";
import { JwtAuthGuard } from "application/guards/jwtAuth.Guard";
import { RolesGuard } from "application/guards/roles.Guard";
import { Roles } from "application/decorators/rolesDecorator";
import { RequestWithUser } from "data/interfaces/IRequestWithUser.Interface";

@ApiBearerAuth()
@ApiTags("Posts")
@Controller("posts")
export class PostController {
  constructor(private readonly postApplication: PostApplication) {}

  @Get()
  @ApiOperation({ summary: "Lista todas as notícias do blog" })
  @ApiOkResponse({ type: [PostResponseDto] })
  async findAll(): Promise<PostResponseDto[]> {
    return await this.postApplication.listAllPosts();
  }

  @Get(":id")
  @ApiOperation({ summary: "Busca um post específico pelo ID" })
  @ApiOkResponse({ type: PostResponseDto })
  async findOne(@Param("id") id: string): Promise<PostResponseDto> {
    return await this.postApplication.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("autor", "admin")
  @ApiBearerAuth()
  async create(
    @Body() createPostDto: CreatePostRequestDto,
    @Request() req: RequestWithUser,
  ): Promise<PostResponseDto> {
    const authorId = req.user.sub;

    return await this.postApplication.createPost({
      ...createPostDto,
      authorId: authorId,
    });
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("autor", "admin")
  @ApiOperation({ summary: "Atualiza um post existente" })
  async update(
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostRequestDto,
  ): Promise<PostResponseDto> {
    return await this.postApplication.updatePost(Number(id), updatePostDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin", "autor")
  @ApiOperation({ summary: "Exclui um post" })
  async remove(@Param("id") id: string): Promise<void> {
    return await this.postApplication.deletePost(Number(id));
  }
}
