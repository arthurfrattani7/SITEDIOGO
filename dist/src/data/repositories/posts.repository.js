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
exports.PostRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("../providers/db/prisma.Service");
const entityMapper_1 = require("../mapper/entityMapper");
let PostRepository = class PostRepository {
    constructor(db, mapper) {
        this.db = db;
        this.mapper = mapper;
    }
    async findAll() {
        const postsDb = await this.db.posts.findMany({
            orderBy: { publication_date: 'desc' },
        });
        return postsDb.map(p => this.mapper.post(p));
    }
    async findById(id) {
        const postDb = await this.db.posts.findUnique({ where: { id } });
        return this.mapper.post(postDb);
    }
    async create(data) {
        const postDb = await this.db.posts.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: data.authorId,
                categorieId: data.categorieId,
            },
        });
        return this.mapper.post(postDb);
    }
};
exports.PostRepository = PostRepository;
exports.PostRepository = PostRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_Service_1.PrismaService,
        entityMapper_1.MapperRepository])
], PostRepository);
//# sourceMappingURL=posts.repository.js.map