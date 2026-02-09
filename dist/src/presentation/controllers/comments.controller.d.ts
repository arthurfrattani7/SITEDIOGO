import { CommentApplication } from '../../application/applications/comment.Application';
import { CreateCommentRequestDto } from '../dto/request/createCommentRequestDto';
import { CommentResponseDto } from '../dto/response/commentResponse.dto';
import { UpdateCommentRequestDto } from 'presentation/dto/request/updateCommentsRequestDto';
export declare class CommentController {
    private readonly commentApplication;
    constructor(commentApplication: CommentApplication);
    create(dto: CreateCommentRequestDto): Promise<CommentResponseDto>;
    findByPost(postId: number): Promise<CommentResponseDto[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
    update(id: number, userId: number, dto: UpdateCommentRequestDto): Promise<import("../../data/entities/comments.Entity").CommentEntity>;
}
