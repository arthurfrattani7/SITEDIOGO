import { PrismaService } from '../../data/providers/db/prisma.Service';
export declare class PostValidate {
    private readonly db;
    constructor(db: PrismaService);
    isValidCategory(categorieId: number): Promise<void>;
    isValidPost(id: number): Promise<{
        id: number;
        content: string;
        title: string;
        publication_date: Date | null;
        authorId: number;
        categorieId: number;
    }>;
}
