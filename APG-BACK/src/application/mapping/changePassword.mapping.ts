import { Injectable } from "@nestjs/common";
import { IUpdateUserData } from "data/interfaces/iUser.Interface";

@Injectable()
export class UserApplicationMapper {
  toResetPasswordUpdate(hashedPassword: string): IUpdateUserData {
    return {
      password: hashedPassword,
      verificationCodeHash: null,
      verificationExpiredAt: null,
    } as IUpdateUserData;
  }
}
