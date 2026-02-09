import { Injectable, BadRequestException } from '@nestjs/common';
import { CategoryDomain } from 'domain/services/categories.domain';
import { ICreateCategory } from 'data/interfaces/ICreateCategory.Interface';

@Injectable()
export class CategoryApplication {
  constructor(private categoryDomain: CategoryDomain) {}

  async createCategory(dto: ICreateCategory) {
    const exists = await this.categoryDomain.getByName(dto.name);
    
    if (exists) {
      throw new BadRequestException('Esta categoria já existe.');
    }

    return await this.categoryDomain.create(dto);
  }

  async listAllCategories() {
    return await this.categoryDomain.getAll();
  }
  
}