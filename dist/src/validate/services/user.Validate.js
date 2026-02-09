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
exports.UserValidate = void 0;
const common_1 = require("@nestjs/common");
const user_domain_1 = require("../../domain/services/user.domain");
const prisma_Service_1 = require("../../data/providers/db/prisma.Service");
let UserValidate = class UserValidate {
    constructor(userDomain, db) {
        this.userDomain = userDomain;
        this.db = db;
    }
    async isValidUser(userId) {
        const user = await this.userDomain.getUserById(userId);
        if (!user) {
            throw new common_1.BadRequestException('Utilizador não encontrado no sistema');
        }
        return user;
    }
    async canUserPublish(userId) {
        const user = await this.db.users.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuário não encontrado.');
        }
        if (user.type === 'leitor') {
            throw new common_1.BadRequestException('Acesso negado: Leitores não podem publicar notícias.');
        }
        return true;
    }
};
exports.UserValidate = UserValidate;
exports.UserValidate = UserValidate = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_domain_1.UserDomain,
        prisma_Service_1.PrismaService])
], UserValidate);
//# sourceMappingURL=user.Validate.js.map