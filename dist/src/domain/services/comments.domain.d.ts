import { CommentRepository } from 'data/repositories/comments.repository';
import { ICreateCommentData, IDeleteComment, IUpdateCommentData } from 'data/interfaces/IComments.Interface';
export declare class CommentDomain {
    private readonly commentRepository;
    constructor(commentRepository: CommentRepository);
    create(data: ICreateCommentData): Promise<import("../../data/entities/comments.Entity").CommentEntity>;
    getByPost(postId: number): Promise<({
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
    deleteComment(data: IDeleteComment): Promise<void>;
    updateComment(id: number, data: IUpdateCommentData): Promise<import("../../data/entities/comments.Entity").CommentEntity>;
}
