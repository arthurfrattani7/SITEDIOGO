import { Injectable } from '@nestjs/common';
import { PostRepository } from 'data/repositories/posts.repository';
import { ICreatePost, IUpdatePost } from 'data/interfaces/IPost.Interface';

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

  public async update(id: number, data: Partial<IUpdatePost>) {
    return await this.postRepository.update(id, data);
  }

  public async delete(id: number) {
    await this.postRepository.delete(id);
  }
}