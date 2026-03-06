import { Injectable, NotFoundException } from "@nestjs/common";
import { PostDomain } from "domain/services/posts.domain";
import { UserValidate } from "../../validate/services/user.Validate";
import { ICreatePost } from "data/interfaces/IPost.Interface";
import { PostValidate } from "validate/services/post.Validate";

@Injectable()
export class PostApplication {
  constructor(
    private postDomain: PostDomain,
    private userValidate: UserValidate,
    private postValidate: PostValidate,
  ) {}
  async listAllPosts() {
    return await this.postDomain.getAll();
  }

  async getPostById(id: number) {
    const post = await this.postDomain.getById(id);

    if (!post) {
      throw new NotFoundException(`Post com ID ${id} não encontrado`);
    }

    return post;
  }

  async createPost(dto: ICreatePost) {
    await this.userValidate.canUserPublish(dto.authorId);

    // await this.userValidate.isValidUser(dto.authorId);

    await this.postValidate.isValidCategory(dto.categorieId);

    return await this.postDomain.create(dto);
  }
}
