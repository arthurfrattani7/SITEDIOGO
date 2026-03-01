import { Module } from "@nestjs/common";
import { PresentationModule } from "presentation/presentation.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PresentationModule,
  ],
})
export class AppModule {}
