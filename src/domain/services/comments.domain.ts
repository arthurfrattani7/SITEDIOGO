import { Injectable } from '@nestjs/common';
import { CommentRepository } from 'data/repositories/comments.repository';
import { ICreateCommentData, IDeleteComment, IUpdateCommentData } from 'data/interfaces/IComments.Interface';

@Injectable()
export class CommentDomain {
  constructor(private readonly commentRepository: CommentRepository) {}

  
  public async create(data: ICreateCommentData) {
    // O domínio garante que os dados seguem o contrato ICreateCommentData
    return await this.commentRepository.create(data);
  }

  public async getByPost(postId: number) {
    return await this.commentRepository.findByPost(postId);
  }

  public async deleteComment(data: IDeleteComment) {
    // Usamos o campo 'commentId' definido na nossa interface
    return await this.commentRepository.delete(data.commentId);
  }

  public async updateComment(id: number, data: IUpdateCommentData) {
  return await this.commentRepository.update(id, data);
  }
}