import { PostDomain } from 'domain/services/posts.domain';
import { UserValidate } from '../../validate/services/user.Validate';
import { ICreatePost } from 'data/interfaces/IPost.Interface';
import { PostValidate } from 'validate/services/post.Validate';
export declare class PostApplication {
    private postDomain;
    private userValidate;
    private postValidate;
    constructor(postDomain: PostDomain, userValidate: UserValidate, postValidate: PostValidate);
    listAllPosts(): Promise<import("../../data/entities/post.Entity").PostEntity[]>;
    createPost(dto: ICreatePost): Promise<import("../../data/entities/post.Entity").PostEntity>;
}
