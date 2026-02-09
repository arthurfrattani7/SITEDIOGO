import { PrismaService } from '../providers/db/prisma.Service';
import { ICreateCommentData, IUpdateCommentData } from 'data/interfaces/IComments.Interface';
import { CommentEntity } from 'data/entities/comments.Entity';
export declare class CommentRepository {
    private db;
    constructor(db: PrismaService);
    create(data: ICreateCommentData): Promise<CommentEntity>;
    findByPost(postId: number): Promise<({
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
    delete(id: number): Promise<void>;
    update(id: number, data: IUpdateCommentData): Promise<CommentEntity>;
}
