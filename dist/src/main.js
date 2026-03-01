"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const swagger_1 = require("@nestjs/swagger");
const FRONTEND_URL = process.env.FRONTEND_URL;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: FRONTEND_URL,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    });
    app.setGlobalPrefix("api");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Blog API")
        .setDescription("Documentação das rotas do blog")
        .setVersion("1.0")
        .addTag("Users")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
    console.log(`Servidor rodando em: http://localhost:3000/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map