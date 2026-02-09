import { PrismaService } from '../../data/providers/db/prisma.Service';
export declare class CommentValidate {
    private readonly db;
    constructor(db: PrismaService);
    isValidComment(id: number): Promise<{
        userId: number;
        id: number;
        text: string;
        commentDate: Date | null;
        postId: number;
    }>;
    verifyOwnership(commentId: number, requesterId: number): Promise<{
        userId: number;
        id: number;
        text: string;
        commentDate: Date | null;
        postId: number;
    }>;
}
