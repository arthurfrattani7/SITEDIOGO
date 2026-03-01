import { Module } from "@nestjs/common";
import { DomainModule } from "../domain/domain.module";
import { ValidateModule } from "validate/services/validate.module";
import { UserApplication } from "./applications/user.Application";
import { PostApplication } from "./applications/posts.Application";
import { CategoryApplication } from "./applications/categories.Application";
import { CommentApplication } from "./applications/comment.Application";
import { DataModule } from "../data/data.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    DomainModule,
    ValidateModule,
    DataModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("JWTSECRET"),
        signOptions: {
          expiresIn: configService.get<number>("JWT_EXPIRES_IN") || 86400,
        },
      }),
    }),
  ],
  providers: [
    UserApplication,
    PostApplication,
    CategoryApplication,
    CommentApplication,
  ],
  exports: [
    UserApplication,
    PostApplication,
    CategoryApplication,
    CommentApplication,
    JwtModule,
  ],
})
export class ApplicationModule {}
