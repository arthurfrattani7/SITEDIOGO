import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const FRONTEND_URL = process.env.FRONTEND_URL;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("Blog API")
    .setDescription("Documentação das rotas do blog")
    .setVersion("1.0")
    .addTag("Users")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Servidor rodando na porta: ${port}`);
}
bootstrap();
