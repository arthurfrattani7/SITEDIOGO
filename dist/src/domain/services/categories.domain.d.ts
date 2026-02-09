import { CategoryRepository } from '../../data/repositories/categories.repository';
import { ICreateCategory } from 'data/interfaces/ICreateCategory.Interface';
export declare class CategoryDomain {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getAll(): Promise<import("../../data/entities/categories.Entity").CategoryEntity[]>;
    getByName(name: string): Promise<import("../../data/entities/categories.Entity").CategoryEntity>;
    create(data: ICreateCategory): Promise<import("../../data/entities/categories.Entity").CategoryEntity>;
}
