import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../data/providers/db/prisma.Service';

@Injectable()
export class PostValidate {
  constructor(private readonly db: PrismaService) {}

  /* Regra de Negócio: O post deve pertencer a uma categoria real.*/
  async isValidCategory(categorieId: number) {
    const category = await this.db.categories.findUnique({
      where: { id: categorieId },
    });

    if (!category) {
      throw new BadRequestException('A categoria informada não existe.');
    }
  }

  async isValidPost(id: number) {
    const post = await this.db.posts.findUnique({
      where: { id },
    });

    if (!post) {
      throw new BadRequestException(`Post com ID ${id} não encontrado.`);
    }

    return post;
  }

}