import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.Service';
import { ICreateCommentData, IUpdateCommentData, IDeleteComment } from 'data/interfaces/IComments.Interface';
import { CommentEntity } from 'data/entities/comments.Entity';

@Injectable()
export class CommentRepository {
  constructor(private db: PrismaService) {}

  async create(data: ICreateCommentData): Promise<CommentEntity> {
    return await this.db.comments.create({
      data: {
        text: data.text,
        postId: data.postId,
        userId: data.userId,
      },
    });
  }

  async findByPost(postId: number) {
    return await this.db.comments.findMany({
      where: { postId },
      include: { 
        users: { select: { name: true } }
      },
      orderBy: { commentDate: 'desc' },
    });
  }

  async delete(id: number): Promise<void> {
    await this.db.comments.delete({ where: { id } });
  }

  async update(id: number, data: IUpdateCommentData): Promise<CommentEntity> {
  return await this.db.comments.update({
    where: { id },
    data: {
      text: data.text,
    },
  });
}
}