import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../data/providers/db/prisma.Service';

@Injectable()
export class CommentValidate {
  constructor(private readonly db: PrismaService) {}

  async isValidComment(id: number) {
    const comment = await this.db.comments.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comentário com ID ${id} não encontrado.`);
    }

    return comment;
  }

  async verifyOwnership(commentId: number, requesterId: number) {
    const comment = await this.db.comments.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException(`Comentário ${commentId} não encontrado.`);
    }

    // Se o ID de quem pede não for o ID de quem escreveu, bloqueia!
    if (comment.userId !== requesterId) {
      throw new BadRequestException('Você não tem permissão para modificar este comentário.');
    }

    return comment;
  }
}