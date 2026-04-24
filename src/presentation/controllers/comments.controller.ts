import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CommentApplication } from '../../application/applications/comment.Application';
import { CreateCommentRequestDto } from '../dto/request/comment/createCommentRequestDto';
import { CommentResponseDto } from '../dto/response/commentResponse.dto';
import { UpdateCommentRequestDto } from 'presentation/dto/request/comment/updateCommentsRequestDto';
import { JwtAuthGuard } from 'application/guards/jwtAuth.Guard';
import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'application/guards/roles.Guard';
import { Roles } from 'application/decorators/rolesDecorator';

@ApiBearerAuth()
@ApiTags('Comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentApplication: CommentApplication) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo comentário em um post' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('autor', 'admin', 'leitor')
  @ApiCreatedResponse({ 
    description: 'Comentário criado com sucesso.',
    type: CommentResponseDto 
  })
  async create(@Body() dto: CreateCommentRequestDto): Promise<CommentResponseDto> {
    return await this.commentApplication.createComment(dto);
  }

  @Get('post/:postId')
  @ApiOperation({ summary: 'Lista todos os comentários de um post específico' })
  @ApiOkResponse({ 
    description: 'Lista de comentários retornada com sucesso.',
    type: [CommentResponseDto] 
  })
  async findByPost(@Param('postId', ParseIntPipe) postId: number): Promise<CommentResponseDto[]> {
    return await this.commentApplication.listCommentsByPost(postId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um comentário pelo ID' })
  @ApiOkResponse({ description: 'Comentário removido com sucesso.' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.commentApplication.deleteComment(id);
    return { message: 'Comentário deletado com sucesso!' };
  }

 @Put(':id/:userId') // userId na rota apenas para teste manual, depois tem que adicionar o JWT para a segurança (OBS: PESQUISAR COMO FAZER ISSO E PERGUNTAR A DIOGO SE VAI SER NECESSÁRIO, MAS ACREDITO QUE SIM!)
  @ApiOperation({ summary: 'Edita um comentário (Apenas o autor pode fazer isso)' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: UpdateCommentRequestDto,
  ) {
    return await this.commentApplication.updateComment(id, userId, dto);
  }
}