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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../providers/db/prisma.Service");
const entityMapper_1 = require("../mapper/entityMapper");
let UserRepository = class UserRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async getByEmail(email) {
        const result = await this.db.users.findUnique({ where: { email } });
        return this.mapper.toUserEntity(result);
    }
    async findAll() {
        const results = await this.db.users.findMany({
            orderBy: { data_criacao: 'desc' },
        });
        return results.map(user => this.mapper.toUserEntity(user))
            .filter((u) => u !== null);
    }
    async getById(id) {
        const result = await this.db.users.findUnique({
            where: { id },
        });
        return this.mapper.toUserEntity(result);
    }
    async create(data) {
        const result = await this.db.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                type: data.type || 'leitor',
                verificationCodeHash: data.verificationCodeHash,
                verificationExpiredAt: data.verificationExpiredAt
            },
        });
        return this.mapper.toUserEntity(result);
    }
    async update(id, data) {
        const updatedUser = await this.db.users.update({
            where: { id },
            data,
        });
        return this.mapper.toUserEntity(updatedUser);
    }
    async delete(id) {
        await this.db.users.delete({
            where: { id },
        });
    }
    async updateVerification(userId, data) {
        await this.db.users.update({
            where: { id: userId },
            data: {
                verificationCodeHash: data.verificationCodeHash,
                verificationExpiredAt: data.verificationExpiredAt,
            },
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService,
        entityMapper_1.MapperRepository])
], UserRepository);
//# sourceMappingURL=user.repository.js.map