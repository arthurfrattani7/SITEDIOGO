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
exports.PostValidate = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../../data/providers/db/prisma.Service");
let PostValidate = class PostValidate {
    constructor(db) {
        this.db = db;
    }
    async isValidCategory(categorieId) {
        const category = await this.db.categories.findUnique({
            where: { id: categorieId },
        });
        if (!category) {
            throw new common_1.BadRequestException('A categoria informada não existe.');
        }
    }
    async isValidPost(id) {
        const post = await this.db.posts.findUnique({
            where: { id },
        });
        if (!post) {
            throw new common_1.BadRequestException(`Post com ID ${id} não encontrado.`);
        }
        return post;
    }
};
exports.PostValidate = PostValidate;
exports.PostValidate = PostValidate = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService])
], PostValidate);
//# sourceMappingURL=post.Validate.js.map