import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { existsSync, mkdirSync, writeFileSync, unlink, unlinkSync } from "fs";
import { join, extname } from "path";
import { PostValidate } from "validate/services/post.Validate";
import { PostDomain } from "domain/services/posts.domain";
import { CoursesDomain } from "domain/services/courses.domain";

@Injectable()
export class UploadApplication {
  constructor(
    private postValidate: PostValidate,
    private postDomain: PostDomain,
    private coursesDomain: CoursesDomain,
  ) {}

  async uploadPostImage(
    postId: number,
    file: Express.Multer.File,
  ): Promise<{ url: string }> {
    if (!file) {
      throw new BadRequestException("Nenhum arquivo enviado.");
    }

    await this.postValidate.isValidPost(postId);

    const postData = await this.postDomain.getById(postId);

    if (postData && postData.imageUrl) {
      const oldFilePath = join(process.cwd(), postData.imageUrl);
      if (existsSync(oldFilePath)) {
        try {
          unlinkSync(oldFilePath);
        } catch (error) {
          console.error("Erro ao deletar imagem antiga:", error);
        }
      }
    }

    const uploadDir = join(process.cwd(), "uploads", "posts");
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `post-${postId}-${Date.now()}${extname(file.originalname)}`;

    const filePath = join(uploadDir, fileName);

    try {
      writeFileSync(filePath, file.buffer);
      const imageUrl = `/uploads/posts/${fileName}`;

      await this.postDomain.update(postId, { imageUrl });

      return { url: imageUrl };
    } catch (error) {
      console.error("Erro no update da imagem:", error);
      throw new BadRequestException(
        "Erro ao salvar a nova imagem fisicamente no servidor.",
      );
    }
  }

  async uploadCourseImage(
    courseId: string,
    file: Express.Multer.File,
  ): Promise<{ url: string }> {
    if (!file) {
      throw new BadRequestException("Nenhum arquivo enviado.");
    }

    const courseData = await this.coursesDomain.getCourseById(courseId);
    if (!courseData) {
      throw new NotFoundException("Curso não encontrado.");
    }

    if (courseData.imageUrl) {
      const cleanPath = courseData.imageUrl.startsWith("/")
        ? courseData.imageUrl.substring(1)
        : courseData.imageUrl;
      const oldFilePath = join(process.cwd(), cleanPath);
      if (existsSync(oldFilePath)) {
        try {
          unlinkSync(oldFilePath);
        } catch (error) {
          console.error("Erro ao deletar imagem antiga do curso:", error);
        }
      }
    }

    const uploadDir = join(process.cwd(), "uploads", "courses");
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `course-${courseId}-${Date.now()}${extname(file.originalname)}`;
    const filePath = join(uploadDir, fileName);

    try {
      writeFileSync(filePath, file.buffer);
      const imageUrl = `/uploads/courses/${fileName}`;

      await this.coursesDomain.updateCourse(courseId, { imageUrl });

      return { url: imageUrl };
    } catch (error) {
      throw new BadRequestException(
        "Erro ao salvar a nova imagem fisicamente no servidor.",
      );
    }
  }
}
