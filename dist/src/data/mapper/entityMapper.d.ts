import { UserEntity } from 'data/entities/user.Entity';
import { IToUserEntity } from './interface';
import { PostEntity } from 'data/entities/post.Entity';
import { posts, categories } from '@prisma/client';
import { CategoryEntity } from 'data/entities/categories.Entity';
export declare class MapperRepository {
    toUserEntity(dto: IToUserEntity | null): UserEntity | null;
    post(postDb: posts): PostEntity;
    toCategoryEntity(dto: categories | null): CategoryEntity | null;
}
