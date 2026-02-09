import { PostValidate } from 'validate/services/post.Validate';
import { CommentDomain } from 'domain/services/comments.domain';
import { CreateCommentRequestDto } from 'presentation/dto/request/createCommentRequestDto';
import { CommentValidate } from 'validate/services/comments.Validate';
import { UpdateCommentRequestDto } from 'presentation/dto/request/updateCommentsRequestDto';
export declare class CommentApplication {
    private readonly commentDomain;
    private readonly postValidate;
    private readonly commentValidate;
    constructor(commentDomain: CommentDomain, postValidate: PostValidate, commentValidate: CommentValidate);
    createComment(dto: CreateCommentRequestDto): Promise<import("../../data/entities/comments.Entity").CommentEntity>;
    listCommentsByPost(postId: number): Promise<({
        users: {
            name: string;
        };
    } & {
        userId: number;
        id: number;
        text: string;
        commentDate: Date | null;
        postId: number;
    })[]>;
    deleteComment(id: number): Promise<void>;
    updateComment(commentId: number, requesterId: number, dto: UpdateCommentRequestDto): Promise<import("../../data/entities/comments.Entity").CommentEntity>;
}
