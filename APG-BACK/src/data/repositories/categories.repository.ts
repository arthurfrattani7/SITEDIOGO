import { Injectable } from "@nestjs/common";
import { PrismaService } from "../providers/db/prisma.Service";
import { CategoryEntity } from "data/entities/categories.Entity";
import { MapperRepository } from "data/mapper/entityMapper";

@Injectable()
export class CategoryRepository {
  constructor(
    private db: PrismaService,
    private mapper: MapperRepository,
  ) {}

  async findByName(name: string): Promise<CategoryEntity | null> {
    return await this.db.categories.findFirst({
      where: { name },
    });
  }

  async create(name: string): Promise<CategoryEntity> {
    return await this.db.categories.create({
      data: { name },
    });
  }

  async findAll(): Promise<CategoryEntity[]> {
    const categoriesDb = await this.db.categories.findMany({
      orderBy: { id: "desc" },
    });

    return categoriesDb.map((c) => this.mapper.toCategoryEntity(c));
  }

  async findById(id: number): Promise<CategoryEntity | null> {
    const categoryDb = await this.db.categories.findUnique({ where: { id } });
    return this.mapper.toCategoryEntity(categoryDb);
  }

  async update(
    id: number,
    data: Partial<CategoryEntity>,
  ): Promise<CategoryEntity> {
    const updated = await this.db.categories.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
    return this.mapper.toCategoryEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.db.categories.delete({
      where: { id },
    });
  }
}
