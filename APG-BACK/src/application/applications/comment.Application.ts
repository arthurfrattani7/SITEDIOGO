import { Injectable, BadRequestException } from "@nestjs/common";
import { PostValidate } from "validate/services/post.Validate";
import { CommentDomain } from "domain/services/comments.domain";
import {
  ICreateCommentData,
  IDeleteComment,
  IUpdateCommentData,
} from "data/interfaces/IComments.Interface";
import { CreateCommentRequestDto } from "presentation/dto/request/comment/createCommentRequestDto";
import { CommentValidate } from "validate/services/comments.Validate";
import { UpdateCommentRequestDto } from "presentation/dto/request/comment/updateCommentsRequestDto";

@Injectable()
export class CommentApplication {
  constructor(
    private readonly commentDomain: CommentDomain,
    private readonly postValidate: PostValidate,
    private readonly commentValidate: CommentValidate,
  ) {}

  async createComment(dto: CreateCommentRequestDto) {
    await this.postValidate.isValidPost(dto.postId);

    const contract: ICreateCommentData = {
      text: dto.text,
      postId: dto.postId,
      userId: dto.userId,
    };

    return await this.commentDomain.create(contract);
  }

  async listCommentsByPost(postId: number) {
    // Opcional: validar se o post existe antes de listar os comentários
    await this.postValidate.isValidPost(postId);
    return await this.commentDomain.getByPost(postId);
  }

  async deleteComment(id: number, requesterId: number, requesterType: string) {
    await this.commentValidate.verifyOwnership(id, requesterId);

    const contract: IDeleteComment = {
      commentId: id,
    };

    return await this.commentDomain.deleteComment(contract);
  }

  async updateComment(
    commentId: number,
    requesterId: number,
    dto: UpdateCommentRequestDto,
  ) {
    // A trava de segurança: Só passa se for o dono
    await this.commentValidate.verifyOwnership(commentId, requesterId);

    // Mapeamento para o Domínio
    const updateData: IUpdateCommentData = {
      text: dto.text,
    };

    return await this.commentDomain.updateComment(commentId, updateData);
  }

  async listAllComments() {
    return await this.commentDomain.getAllComments();
  }
}
