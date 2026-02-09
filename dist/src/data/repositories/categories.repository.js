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
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../providers/db/prisma.Service");
const entityMapper_1 = require("../mapper/entityMapper");
let CategoryRepository = class CategoryRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async findByName(name) {
        return await this.db.categories.findFirst({
            where: { name },
        });
    }
    async create(name) {
        return await this.db.categories.create({
            data: { name },
        });
    }
    async findAll() {
        const categoriesDb = await this.db.categories.findMany({
            orderBy: { id: 'desc' },
        });
        return categoriesDb.map(c => this.mapper.toCategoryEntity(c));
    }
};
exports.CategoryRepository = CategoryRepository;
exports.CategoryRepository = CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService,
        entityMapper_1.MapperRepository])
], CategoryRepository);
//# sourceMappingURL=categories.repository.js.map