"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_Service_1 = require("./providers/db/prisma.Service");
const user_repository_1 = require("./repositories/user.repository");
const entityMapper_1 = require("./mapper/entityMapper");
const posts_repository_1 = require("./repositories/posts.repository");
const categories_repository_1 = require("./repositories/categories.repository");
const comments_repository_1 = require("./repositories/comments.repository");
const emailTransporter_1 = require("./providers/mailServices/emailTransporter");
let DataModule = class DataModule {
};
exports.DataModule = DataModule;
exports.DataModule = DataModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_Service_1.PrismaService, user_repository_1.UserRepository, posts_repository_1.PostRepository, entityMapper_1.MapperRepository, categories_repository_1.CategoryRepository, comments_repository_1.CommentRepository, emailTransporter_1.MailProvider],
        exports: [user_repository_1.UserRepository, posts_repository_1.PostRepository, prisma_Service_1.PrismaService, entityMapper_1.MapperRepository, categories_repository_1.CategoryRepository, comments_repository_1.CommentRepository, emailTransporter_1.MailProvider],
    })
], DataModule);
//# sourceMappingURL=data.module.js.map