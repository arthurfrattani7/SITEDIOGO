"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("../domain/domain.module");
const validate_module_1 = require("../validate/services/validate.module");
const user_Application_1 = require("./applications/user.Application");
const posts_Application_1 = require("./applications/posts.Application");
const categories_Application_1 = require("./applications/categories.Application");
const comment_Application_1 = require("./applications/comment.Application");
const data_module_1 = require("../data/data.module");
let ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule;
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_module_1.DomainModule, validate_module_1.ValidateModule, data_module_1.DataModule],
        providers: [user_Application_1.UserApplication, posts_Application_1.PostApplication, categories_Application_1.CategoryApplication, comment_Application_1.CommentApplication],
        exports: [user_Application_1.UserApplication, posts_Application_1.PostApplication, categories_Application_1.CategoryApplication, comment_Application_1.CommentApplication],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map