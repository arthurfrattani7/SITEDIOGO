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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const categories_Application_1 = require("../../application/applications/categories.Application");
const createCategoryRequestDto_1 = require("../dto/request/createCategoryRequestDto");
const createResponse_dto_1 = require("../dto/response/createResponse.dto");
let CategoryController = class CategoryController {
    constructor(categoryApplication) {
        this.categoryApplication = categoryApplication;
    }
    async findAll() {
        return await this.categoryApplication.listAllCategories();
    }
    async create(dto) {
        return await this.categoryApplication.createCategory(dto);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todas as categorias do blog' }),
    (0, swagger_1.ApiOkResponse)({ type: [createResponse_dto_1.CategoryResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria uma nova categoria' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Categoria criada com sucesso.',
        type: createResponse_dto_1.CategoryResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCategoryRequestDto_1.CreateCategoryRequestDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_Application_1.CategoryApplication])
], CategoryController);
//# sourceMappingURL=category.controller.js.map