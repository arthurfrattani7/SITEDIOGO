import { PostApplication } from 'application/applications/posts.Application';
import { CreatePostRequestDto } from 'presentation/dto/request/createPostsRequestDto';
import { PostResponseDto } from '../dto/response/postResponse.dto';
export declare class PostController {
    private readonly postApplication;
    constructor(postApplication: PostApplication);
    findAll(): Promise<PostResponseDto[]>;
    create(createPostDto: CreatePostRequestDto): Promise<PostResponseDto>;
}
