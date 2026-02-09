import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../data/repositories/categories.repository';
import { ICreateCategory } from 'data/interfaces/ICreateCategory.Interface';

@Injectable()
export class CategoryDomain {
  constructor(
    private readonly categoryRepository: CategoryRepository
    ) {}

  public async getAll() {
    return await this.categoryRepository.findAll();
  }

  public async getByName(name: string) {
    return await this.categoryRepository.findByName(name);
  }

  public async create(data: ICreateCategory) {
    return await this.categoryRepository.create(data.name);
  }
}