"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCodeGenerator = void 0;
class RandomCodeGenerator {
    static generateAlphaNumeric(length = 6) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
}
exports.RandomCodeGenerator = RandomCodeGenerator;
//# sourceMappingURL=code.js.map