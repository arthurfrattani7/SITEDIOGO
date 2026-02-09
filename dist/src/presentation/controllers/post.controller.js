"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const posts_Application_1 = require("../../application/applications/posts.Application");
const createPostsRequestDto_1 = require("../dto/request/createPostsRequestDto");
const postResponse_dto_1 = require("../dto/response/postResponse.dto");
let PostController = class PostController {
    constructor(postApplication) {
        this.postApplication = postApplication;
    }
    async findAll() {
        return await this.postApplication.listAllPosts();
    }
    async create(createPostDto) {
        return await this.postApplication.createPost(createPostDto);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todas as notícias do blog' }),
    (0, swagger_1.ApiOkResponse)({ type: [postResponse_dto_1.PostResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria uma nova notícia (público para leitura, restrito na lógica)' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Notícia criada com sucesso.',
        type: postResponse_dto_1.PostResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPostsRequestDto_1.CreatePostRequestDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, swagger_1.ApiTags)('Posts'),
    __metadata("design:paramtypes", [posts_Application_1.PostApplication])
], PostController);
//# sourceMappingURL=post.controller.js.map