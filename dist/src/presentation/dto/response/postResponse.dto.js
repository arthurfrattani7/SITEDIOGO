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
exports.PostResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PostResponseDto {
}
exports.PostResponseDto = PostResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID único do post' }),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Minha primeira notícia', description: 'Título do post' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conteúdo completo aqui...', description: 'Corpo da notícia' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-01-24T00:00:00Z', description: 'Data de publicação' }),
    __metadata("design:type", Date)
], PostResponseDto.prototype, "publicationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID do autor (User)' }),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'ID da categoria' }),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "categorieId", void 0);
//# sourceMappingURL=postResponse.dto.js.map