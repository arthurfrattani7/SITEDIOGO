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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_Application_1 = require("../../application/applications/comment.Application");
const createCommentRequestDto_1 = require("../dto/request/createCommentRequestDto");
const commentResponse_dto_1 = require("../dto/response/commentResponse.dto");
const updateCommentsRequestDto_1 = require("../dto/request/updateCommentsRequestDto");
const jwtAuth_Guard_1 = require("../../application/guards/jwtAuth.Guard");
const common_2 = require("@nestjs/common");
let CommentController = class CommentController {
    constructor(commentApplication) {
        this.commentApplication = commentApplication;
    }
    async create(dto) {
        return await this.commentApplication.createComment(dto);
    }
    async findByPost(postId) {
        return await this.commentApplication.listCommentsByPost(postId);
    }
    async remove(id) {
        await this.commentApplication.deleteComment(id);
        return { message: 'Comentário deletado com sucesso!' };
    }
    async update(id, userId, dto) {
        return await this.commentApplication.updateComment(id, userId, dto);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo comentário em um post' }),
    (0, common_2.UseGuards)(jwtAuth_Guard_1.JwtAuthGuard),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Comentário criado com sucesso.',
        type: commentResponse_dto_1.CommentResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCommentRequestDto_1.CreateCommentRequestDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('post/:postId'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todos os comentários de um post específico' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de comentários retornada com sucesso.',
        type: [commentResponse_dto_1.CommentResponseDto]
    }),
    __param(0, (0, common_1.Param)('postId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findByPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove um comentário pelo ID' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Comentário removido com sucesso.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Edita um comentário (Apenas o autor pode fazer isso)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, updateCommentsRequestDto_1.UpdateCommentRequestDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
exports.CommentController = CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comment_Application_1.CommentApplication])
], CommentController);
//# sourceMappingURL=comments.controller.js.map