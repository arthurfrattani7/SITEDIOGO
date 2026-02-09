"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const createUserRequestDto_1 = require("./createUserRequestDto");
class UpdateUserRequestDto extends (0, swagger_1.PartialType)(createUserRequestDto_1.CreateUserRequestDto) {
}
exports.UpdateUserRequestDto = UpdateUserRequestDto;
//# sourceMappingURL=updateUserRequestDto.js.map