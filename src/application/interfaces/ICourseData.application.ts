import { CourseEntity } from '../../data/entities/course.Entity';

export type ICreateCourseData = Omit<CourseEntity, 'id'>;

export type IUpdateCourseData = Partial<Omit<CourseEntity, 'id'>>;