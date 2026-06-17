export interface ICreateCourseData {
  title: string;
  bgClass: string;
  description: string;
  duration: string;
  modules: number;
  level: string;
  benefits: string[];
  hotmartLink: string;
}

export interface IUpdateCourseData extends ICreateCourseData {}
