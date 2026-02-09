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
exports.CommentRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../providers/db/prisma.Service");
let CommentRepository = class CommentRepository {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        return await this.db.comments.create({
            data: {
                text: data.text,
                postId: data.postId,
                userId: data.userId,
            },
        });
    }
    async findByPost(postId) {
        return await this.db.comments.findMany({
            where: { postId },
            include: {
                users: { select: { name: true } }
            },
            orderBy: { commentDate: 'desc' },
        });
    }
    async delete(id) {
        await this.db.comments.delete({ where: { id } });
    }
    async update(id, data) {
        return await this.db.comments.update({
            where: { id },
            data: {
                text: data.text,
            },
        });
    }
};
exports.CommentRepository = CommentRepository;
exports.CommentRepository = CommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService])
], CommentRepository);
//# sourceMappingURL=comments.repository.js.map