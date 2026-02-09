import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.Service';
import { CategoryEntity } from 'data/entities/categories.Entity';
import { MapperRepository } from 'data/mapper/entityMapper';

@Injectable()
export class CategoryRepository {
  constructor(
    private db: PrismaService, 
    private mapper: MapperRepository
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
    orderBy: { id: 'desc' },
  });

  return categoriesDb.map(c => this.mapper.toCategoryEntity(c));
}
}