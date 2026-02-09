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
exports.UserDomain = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../data/repositories/user.repository");
let UserDomain = class UserDomain {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(data) {
        return await this.userRepository.create(data);
    }
    async getAllUsers() {
        return await this.userRepository.findAll();
    }
    async getUserById(userId) {
        return await this.userRepository.getById(userId);
    }
    async getByEmail(email) {
        return await this.userRepository.getByEmail(email);
    }
    async updateUser(id, data) {
        return await this.userRepository.update(id, data);
    }
    async deleteUser(data) {
        return await this.userRepository.delete(data.userId);
    }
    async updateVerificationData(userId, data) {
        return await this.userRepository.updateVerification(userId, data);
    }
};
exports.UserDomain = UserDomain;
exports.UserDomain = UserDomain = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserDomain);
//# sourceMappingURL=user.domain.js.map