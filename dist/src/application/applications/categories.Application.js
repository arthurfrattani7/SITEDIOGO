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
exports.CategoryApplication = void 0;
const common_1 = require("@nestjs/common");
const categories_domain_1 = require("../../domain/services/categories.domain");
let CategoryApplication = class CategoryApplication {
    constructor(categoryDomain) {
        this.categoryDomain = categoryDomain;
    }
    async createCategory(dto) {
        const exists = await this.categoryDomain.getByName(dto.name);
        if (exists) {
            throw new common_1.BadRequestException('Esta categoria já existe.');
        }
        return await this.categoryDomain.create(dto);
    }
    async listAllCategories() {
        return await this.categoryDomain.getAll();
    }
};
exports.CategoryApplication = CategoryApplication;
exports.CategoryApplication = CategoryApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categories_domain_1.CategoryDomain])
], CategoryApplication);
//# sourceMappingURL=categories.Application.js.map