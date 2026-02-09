import { Injectable } from '@nestjs/common';
import { PostRepository } from 'data/repositories/posts.repository';
import { ICreatePost } from 'data/interfaces/IPost.Interface';

@Injectable()
export class PostDomain {
  constructor(private readonly postRepository: PostRepository) {}

  public async getAll() {
    return await this.postRepository.findAll();
  }

  public async getById(id: number) {
    return await this.postRepository.findById(id);
  }

  public async create(data: ICreatePost) {
    return await this.postRepository.create(data);
  }
}