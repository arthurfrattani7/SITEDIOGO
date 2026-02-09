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
exports.CommentApplication = void 0;
const common_1 = require("@nestjs/common");
const post_Validate_1 = require("../../validate/services/post.Validate");
const comments_domain_1 = require("../../domain/services/comments.domain");
const comments_Validate_1 = require("../../validate/services/comments.Validate");
let CommentApplication = class CommentApplication {
    constructor(commentDomain, postValidate, commentValidate) {
        this.commentDomain = commentDomain;
        this.postValidate = postValidate;
        this.commentValidate = commentValidate;
    }
    async createComment(dto) {
        await this.postValidate.isValidPost(dto.postId);
        const contract = {
            text: dto.text,
            postId: dto.postId,
            userId: dto.userId,
        };
        return await this.commentDomain.create(contract);
    }
    async listCommentsByPost(postId) {
        await this.postValidate.isValidPost(postId);
        return await this.commentDomain.getByPost(postId);
    }
    async deleteComment(id) {
        await this.commentValidate.isValidComment(id);
        const contract = {
            commentId: id
        };
        return await this.commentDomain.deleteComment(contract);
    }
    async updateComment(commentId, requesterId, dto) {
        await this.commentValidate.verifyOwnership(commentId, requesterId);
        const updateData = {
            text: dto.text,
        };
        return await this.commentDomain.updateComment(commentId, updateData);
    }
};
exports.CommentApplication = CommentApplication;
exports.CommentApplication = CommentApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_domain_1.CommentDomain,
        post_Validate_1.PostValidate,
        comments_Validate_1.CommentValidate])
], CommentApplication);
//# sourceMappingURL=comment.Application.js.map