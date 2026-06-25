import { z } from "zod";
import { BaseModel } from "./base.Entity";

export const CourseSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string(),
    bgClass: z.string().nullable().optional(),
    imageUrl: z.string().nullable().optional(),
    description: z.string(),
    duration: z.string(),
    modules: z.number(),
    level: z.string(),
    benefits: z.array(z.string()),
    hotmartLink: z.string(),
  })
  .partial({
    id: true,
  });
export class CourseEntity extends BaseModel {
  public title: string;
  public bgClass: string | null;
  public imageUrl: string | null;
  public description: string;
  public duration: string;
  public modules: number;
  public level: string;
  public benefits: string[];
  public hotmartLink: string;

  constructor(props: Omit<CourseEntity, "id">, id?: string) {
    super(props, CourseSchema.shape, id);
  }
}
