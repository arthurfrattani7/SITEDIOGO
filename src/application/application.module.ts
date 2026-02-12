import { Module } from "@nestjs/common";
import { DomainModule } from "../domain/domain.module";
import { ValidateModule } from "validate/services/validate.module";
import { UserApplication } from "./applications/user.Application";
import { PostApplication } from "./applications/posts.Application";
import { CategoryApplication } from "./applications/categories.Application";
import { CommentApplication } from "./applications/comment.Application";
import { DataModule } from "../data/data.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    DomainModule,
    ValidateModule,
    DataModule,
    JwtModule.register({
      global: true, // Torna o JwtService disponível em toda a aplicação
      secret: process.env.JWT_SECRET, // simplesmente pegar da env 
      signOptions: { expiresIn: "1d" }, // Expira em um dia! 
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
