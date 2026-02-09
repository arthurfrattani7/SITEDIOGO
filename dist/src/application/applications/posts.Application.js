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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostApplication = void 0;
const common_1 = require("@nestjs/common");
const posts_domain_1 = require("../../domain/services/posts.domain");
const user_Validate_1 = require("../../validate/services/user.Validate");
const post_Validate_1 = require("../../validate/services/post.Validate");
let PostApplication = class PostApplication {
    constructor(postDomain, userValidate, postValidate) {
        this.postDomain = postDomain;
        this.userValidate = userValidate;
        this.postValidate = postValidate;
    }
    async listAllPosts() {
        return await this.postDomain.getAll();
    }
    async createPost(dto) {
        await this.userValidate.canUserPublish(dto.authorId);
        await this.postValidate.isValidCategory(dto.categorieId);
        return await this.postDomain.create(dto);
    }
};
exports.PostApplication = PostApplication;
exports.PostApplication = PostApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_domain_1.PostDomain,
        user_Validate_1.UserValidate,
        post_Validate_1.PostValidate])
], PostApplication);
//# sourceMappingURL=posts.Application.js.map