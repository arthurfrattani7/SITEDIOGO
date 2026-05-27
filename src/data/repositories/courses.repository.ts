import { Injectable } from "@nestjs/common";
import { MapperRepository } from "data/mapper/entityMapper";
import { PrismaService } from "../providers/db/prisma.Service";
import { CourseEntity } from "data/entities/course.Entity";

@Injectable()
export class CoursesRepository {
  constructor(
    private readonly mapper: MapperRepository,
    private readonly db: PrismaService,
  ) {}

  async findAll(): Promise<CourseEntity[]> {
    const coursesDb = await this.db.course.findMany({
      include: { benefits: true },
      orderBy: { title: "asc" },
    });
    return coursesDb.map((c) => this.mapper.course(c));
  }

  async findById(id: string): Promise<CourseEntity> {
    const courseDb = await this.db.course.findUnique({
      where: { id },
      include: { benefits: true },
    });
    return this.mapper.course(courseDb);
  }

  async create(data: Omit<CourseEntity, "id">): Promise<CourseEntity> {
    const courseDb = await this.db.course.create({
      data: {
        title: data.title,
        bgClass: data.bgClass,
        description: data.description,
        duration: data.duration,
        modules: data.modules,
        level: data.level,
        hotmartLink: data.hotmartLink,
        benefits: {
          create: data.benefits.map((text) => ({ text })), // Cria os registros automáticos na tabela 'CourseBenefit'
        },
      },
      include: { benefits: true },
    });
    return this.mapper.course(courseDb);
  }
}
