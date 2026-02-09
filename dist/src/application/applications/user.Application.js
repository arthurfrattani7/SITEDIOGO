"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApplication = void 0;
const common_1 = require("@nestjs/common");
const user_domain_1 = require("../../domain/services/user.domain");
const user_Validate_1 = require("../../validate/services/user.Validate");
const bcrypt = __importStar(require("bcrypt"));
const emailTransporter_1 = require("../../data/providers/mailServices/emailTransporter");
const emailContent_model_1 = require("../../data/providers/mailServices/emailContent.model");
const date_fns_1 = require("date-fns");
const code_1 = require("../../util/code");
let UserApplication = class UserApplication {
    constructor(userDomain, userValidate, sendingMail) {
        this.userDomain = userDomain;
        this.userValidate = userValidate;
        this.sendingMail = sendingMail;
    }
    async getAllUsers() {
        return await this.userDomain.getAllUsers();
    }
    async getUserById(data) {
        const { userId } = data;
        await this.userValidate.isValidUser(userId);
        return await this.userDomain.getUserById(userId);
    }
    async createUser(dto) {
        const userExists = await this.userDomain.getByEmail(dto.email);
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(dto.password, saltRounds);
        const code = code_1.RandomCodeGenerator.generateAlphaNumeric(6);
        const codeHash = await bcrypt.hash(code, 10);
        const expiredAt = (0, date_fns_1.addHours)(new Date(), 2);
        if (userExists) {
            throw new common_1.BadRequestException('O e-mail informado já está sendo utilizado por outra conta.');
        }
        const userData = {
            name: dto.name,
            email: dto.email,
            password: hashedPassword,
            type: 'leitor',
            verificationCodeHash: codeHash,
            verificationExpiredAt: expiredAt,
        };
        const newUser = await this.userDomain.create(userData);
        const contentEmail = [
            new emailContent_model_1.EmailContent(`<h2>Bem-vindo ao Blog do Diogo! Seu código de ativação é: ${code}</h2>`, 'Blog Diogo- Ative sua conta', [newUser.email]),
        ];
        this.sendingMail.sendEmailList(contentEmail).catch(err => console.error("Erro e-mail:", err));
        return newUser;
    }
    async updateUser(id, dto) {
        await this.userValidate.isValidUser(id);
        const updateData = {
            name: dto.name,
            password: dto.password,
        };
        return await this.userDomain.updateUser(id, updateData);
    }
    async deleteUser(id) {
        await this.userValidate.isValidUser(id);
        const deleteContract = {
            userId: id
        };
        return await this.userDomain.deleteUser(deleteContract);
    }
    async requestVerificationCode(userId, email) {
        const code = code_1.RandomCodeGenerator.generateAlphaNumeric(6);
        const expiredAt = (0, date_fns_1.addHours)(new Date(), 2);
        const saltRounds = 10;
        const codeHash = await bcrypt.hash(code, saltRounds);
        await this.userDomain.updateVerificationData(userId, {
            verificationCodeHash: codeHash,
            verificationExpiredAt: expiredAt,
        });
        const contentEmail = [
            new emailContent_model_1.EmailContent(`<h2>Seu código BlogDiogo ${code}</h2>`, 'Blog Diogo - Código de Verificação', [email]),
        ];
        await this.sendingMail.sendEmailList(contentEmail);
    }
    async verifyAccount(dto) {
        const user = await this.userDomain.getByEmail(dto.email);
        if (!user) {
            throw new common_1.BadRequestException('Usuário não encontrado.');
        }
        if (user.isVerified) {
            throw new common_1.BadRequestException('Esta conta já foi verificada anteriormente.');
        }
        if (user.verificationExpiredAt && new Date() > user.verificationExpiredAt) {
            throw new common_1.BadRequestException('O código de verificação expirou. Solicite um novo código.');
        }
        const isMatch = await bcrypt.compare(dto.code, user.verificationCodeHash || '');
        if (!isMatch) {
            throw new common_1.BadRequestException('Código de verificação inválido.');
        }
        await this.userDomain.updateUser(user.id, {
            isVerified: true,
            verificationCodeHash: null,
            verificationExpiredAt: null,
        });
    }
};
exports.UserApplication = UserApplication;
exports.UserApplication = UserApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_domain_1.UserDomain,
        user_Validate_1.UserValidate,
        emailTransporter_1.MailProvider])
], UserApplication);
//# sourceMappingURL=user.Application.js.map