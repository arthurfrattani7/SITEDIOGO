import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.Service';
import { MapperRepository } from '../mapper/entityMapper';
import { PostEntity } from '../entities/post.Entity';

@Injectable()
export class PostRepository {
  constructor(
    private db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    const postsDb = await this.db.posts.findMany({
      orderBy: { publication_date: 'desc' },
    });
    return postsDb.map(p => this.mapper.post(p));
  }

  async findById(id: number): Promise<PostEntity | null> {
    const postDb = await this.db.posts.findUnique({ where: { id } });
    return this.mapper.post(postDb);
  }

  async create(data: Omit<PostEntity, 'id' | 'publicationDate'>): Promise<PostEntity> {
    const postDb = await this.db.posts.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: data.authorId,
        categorieId: data.categorieId,
      },
    });
    return this.mapper.post(postDb);
  }
}