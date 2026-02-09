"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperRepository = void 0;
const common_1 = require("@nestjs/common");
const user_Entity_1 = require("../entities/user.Entity");
const categories_Entity_1 = require("../entities/categories.Entity");
let MapperRepository = class MapperRepository {
    toUserEntity(dto) {
        if (!dto)
            return null;
        const user = new user_Entity_1.UserEntity();
        user.id = dto.id;
        user.name = dto.name;
        user.email = dto.email;
        user.type = dto.type;
        user.data_criacao = dto.data_criacao;
        user.isVerified = dto.isVerified;
        user.verificationCodeHash = dto.verificationCodeHash;
        user.verificationExpiredAt = dto.verificationExpiredAt;
        return user;
    }
    post(postDb) {
        if (!postDb)
            return null;
        return {
            id: postDb.id,
            title: postDb.title,
            content: postDb.content,
            publicationDate: postDb.publication_date,
            authorId: postDb.authorId,
            categorieId: postDb.categorieId,
        };
    }
    toCategoryEntity(dto) {
        if (!dto)
            return null;
        const category = new categories_Entity_1.CategoryEntity();
        category.id = dto.id;
        category.name = dto.name;
        return category;
    }
};
exports.MapperRepository = MapperRepository;
exports.MapperRepository = MapperRepository = __decorate([
    (0, common_1.Injectable)()
], MapperRepository);
//# sourceMappingURL=entityMapper.js.map