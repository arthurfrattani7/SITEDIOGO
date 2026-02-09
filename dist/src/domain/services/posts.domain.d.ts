import { PostRepository } from 'data/repositories/posts.repository';
import { ICreatePost } from 'data/interfaces/IPost.Interface';
export declare class PostDomain {
    private readonly postRepository;
    constructor(postRepository: PostRepository);
    getAll(): Promise<import("../../data/entities/post.Entity").PostEntity[]>;
    getById(id: number): Promise<import("../../data/entities/post.Entity").PostEntity>;
    create(data: ICreatePost): Promise<import("../../data/entities/post.Entity").PostEntity>;
}
