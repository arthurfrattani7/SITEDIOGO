import { Injectable } from "@nestjs/common";
import {
  ICreateCourseData,
  IUpdateCourseData,
} from "application/interfaces/ICourseData.application";
import { CourseEntity } from "data/entities/course.Entity";
import { CoursesDomain } from "domain/services/courses.domain";
import { CourseResponseDto } from "presentation/dto/response/courseResponse.dto";
import { title } from "process";

@Injectable()
export class CoursesApplication {
  constructor(private readonly courses: CoursesDomain) {}

  async getAllCourses(): Promise<CourseResponseDto[]> {
    return await this.courses.getAllCourses();
  }

  async getCourseById(id: string): Promise<CourseResponseDto> {
    return await this.courses.getCourseById(id);
  }

  async createCourse(data: ICreateCourseData): Promise<CourseResponseDto> {
    const courseEntity = new CourseEntity({
      title: data.title,
      bgClass: data.bgClass,
      description: data.description,
      duration: data.duration,
      modules: data.modules,
      level: data.level,
      benefits: data.benefits,
      hotmartLink: data.hotmartLink,
    });
    return await this.courses.createCourse(courseEntity);
  }

  async updateCourse(
    id: string,
    data: Partial<IUpdateCourseData>,
  ): Promise<CourseResponseDto> {
    return await this.courses.updateCourse(id, data);
  }

  async deleteCourse(id: string): Promise<void> {
    await this.courses.deleteCourse(id);
  }
}
