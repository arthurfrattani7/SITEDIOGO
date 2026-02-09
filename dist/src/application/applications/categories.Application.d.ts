import { CategoryDomain } from 'domain/services/categories.domain';
import { ICreateCategory } from 'data/interfaces/ICreateCategory.Interface';
export declare class CategoryApplication {
    private categoryDomain;
    constructor(categoryDomain: CategoryDomain);
    createCategory(dto: ICreateCategory): Promise<import("../../data/entities/categories.Entity").CategoryEntity>;
    listAllCategories(): Promise<import("../../data/entities/categories.Entity").CategoryEntity[]>;
}
