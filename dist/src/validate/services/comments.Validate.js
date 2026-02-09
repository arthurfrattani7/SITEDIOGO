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
exports.CommentValidate = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../../data/providers/db/prisma.Service");
let CommentValidate = class CommentValidate {
    constructor(db) {
        this.db = db;
    }
    async isValidComment(id) {
        const comment = await this.db.comments.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comentário com ID ${id} não encontrado.`);
        }
        return comment;
    }
    async verifyOwnership(commentId, requesterId) {
        const comment = await this.db.comments.findUnique({
            where: { id: commentId },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comentário ${commentId} não encontrado.`);
        }
        if (comment.userId !== requesterId) {
            throw new common_1.BadRequestException('Você não tem permissão para modificar este comentário.');
        }
        return comment;
    }
};
exports.CommentValidate = CommentValidate;
exports.CommentValidate = CommentValidate = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService])
], CommentValidate);
//# sourceMappingURL=comments.Validate.js.map