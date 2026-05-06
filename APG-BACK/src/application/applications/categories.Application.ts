import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { CategoryDomain } from "domain/services/categories.domain";
import { ICreateCategory } from "data/interfaces/ICreateCategory.Interface";

@Injectable()
export class CategoryApplication {
  constructor(private categoryDomain: CategoryDomain) {}

  async createCategory(dto: ICreateCategory) {
    const exists = await this.categoryDomain.getByName(dto.name);

    if (exists) {
      throw new BadRequestException("Esta categoria já existe.");
    }

    return await this.categoryDomain.create(dto);
  }

  async listAllCategories() {
    return await this.categoryDomain.getAll();
  }

  async getById(id: number) {
    const category = await this.categoryDomain.getById(id);
    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
    return category;
  }

  async updateCategory(id: number, name: string) {
    await this.getById(id);

    return await this.categoryDomain.update(id, name);
  }

  async deleteCategory(id: number) {
    await this.getById(id);
    return await this.categoryDomain.delete(id);
  }
}
