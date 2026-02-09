import { PrismaService } from '../providers/db/prisma.Service';
import { MapperRepository } from '../mapper/entityMapper';
import { PostEntity } from '../entities/post.Entity';
export declare class PostRepository {
    private db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    findAll(): Promise<PostEntity[]>;
    findById(id: number): Promise<PostEntity | null>;
    create(data: Omit<PostEntity, 'id' | 'publicationDate'>): Promise<PostEntity>;
}
