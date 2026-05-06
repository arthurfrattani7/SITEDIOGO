import { Injectable } from '@nestjs/common';
import { UserEntity } from 'data/entities/user.Entity';
import { IToUserEntity } from './interface';
import { PostEntity } from 'data/entities/post.Entity';
import { posts,  categories } from '@prisma/client';
import { CategoryEntity } from 'data/entities/categories.Entity';

@Injectable()
export class MapperRepository {
  /**
   * Converte o modelo do Prisma (BD) para a Entidade de Domínio.
   */
  toUserEntity(dto: IToUserEntity | null): UserEntity | null {
    if (!dto) return null;

    const user = new UserEntity();
    user.id = dto.id;
    user.name = dto.name;
    user.email = dto.email;
    user.password = dto.password;
    user.type = dto.type as 'leitor' | 'autor' | 'admin';
    user.data_criacao = dto.data_criacao;
    user.isVerified = dto.isVerified;
    user.verificationCodeHash = dto.verificationCodeHash;
    user.verificationExpiredAt = dto.verificationExpiredAt;
    

    /* Nota: Campos como taxId ou verifiedAt só podem ser adicionados aqui após atualizar o schema.prisma. */

    return user;
  }

  post(postDb: posts): PostEntity {
  if (!postDb) return null;
  return {
    id: postDb.id,
    title: postDb.title,
    content: postDb.content,
    publicationDate: postDb.publication_date,
    authorId: postDb.authorId,
    categorieId: postDb.categorieId,
    };
  }

  toCategoryEntity(dto: categories | null): CategoryEntity | null {
    if (!dto) return null;

    const category = new CategoryEntity();
    category.id = dto.id;
    category.name = dto.name;

    return category;
  }
}