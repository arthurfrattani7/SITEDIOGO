import { PrismaService } from '../providers/db/prisma.Service';
import { CategoryEntity } from 'data/entities/categories.Entity';
import { MapperRepository } from 'data/mapper/entityMapper';
export declare class CategoryRepository {
    private db;
    private mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    findByName(name: string): Promise<CategoryEntity | null>;
    create(name: string): Promise<CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
}
