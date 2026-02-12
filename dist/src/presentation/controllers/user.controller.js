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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_Application_1 = require("../../application/applications/user.Application");
const swagger_1 = require("@nestjs/swagger");
const userResponse_dto_1 = require("../dto/response/userResponse.dto");
const createUserRequestDto_1 = require("../dto/request/createUserRequestDto");
const updateUserRequestDto_1 = require("../dto/request/updateUserRequestDto");
const verifyUserRequestDto_1 = require("../dto/request/verifyUserRequestDto");
const loginRequestDto_1 = require("../dto/request/loginRequestDto");
let UserController = class UserController {
    constructor(userApplication) {
        this.userApplication = userApplication;
    }
    async findAll() {
        return await this.userApplication.getAllUsers();
    }
    async findOne(id) {
        return await this.userApplication.getUserById({ userId: id });
    }
    async create(dto) {
        const user = await this.userApplication.createUser(dto);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
            data_criacao: user.data_criacao
        };
    }
    async update(id, dto) {
        return await this.userApplication.updateUser(id, dto);
    }
    async remove(id) {
        await this.userApplication.deleteUser(id);
        return { message: 'Usuário removido com sucesso!' };
    }
    async verify(dto) {
        await this.userApplication.verifyAccount(dto);
        return { message: 'Sua conta FolhaMax foi verificada com sucesso!' };
    }
    async login(dto) {
        return await this.userApplication.login(dto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria conta e envia código de verificação por e-mail' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Utilizador criado com sucesso.',
        type: userResponse_dto_1.UserResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserRequestDto_1.CreateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza nome ou senha de um usuário' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateUserRequestDto_1.UpdateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove um usuário permanentemente' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verifica o código de 6 dígitos enviado por e-mail' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verifyUserRequestDto_1.VerifyUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Realiza o login e retorna o token JWT' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginRequestDto_1.LoginRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [user_Application_1.UserApplication])
], UserController);
//# sourceMappingURL=user.controller.js.map