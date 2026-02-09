"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("../../domain/domain.module");
const user_Validate_1 = require("./user.Validate");
const post_Validate_1 = require("./post.Validate");
const data_module_1 = require("../../data/data.module");
const comments_Validate_1 = require("./comments.Validate");
let ValidateModule = class ValidateModule {
};
exports.ValidateModule = ValidateModule;
exports.ValidateModule = ValidateModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_module_1.DomainModule, data_module_1.DataModule],
        providers: [user_Validate_1.UserValidate, post_Validate_1.PostValidate, comments_Validate_1.CommentValidate],
        exports: [user_Validate_1.UserValidate, post_Validate_1.PostValidate, comments_Validate_1.CommentValidate],
    })
], ValidateModule);
//# sourceMappingURL=validate.module.js.map