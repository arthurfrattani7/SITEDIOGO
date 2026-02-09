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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "mysql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n}\n\nmodel authorprofile {\n  id            Int     @id @default(autoincrement())\n  biography     String? @db.Text\n  userId        Int     @unique(map: \"userId\")\n  socialProfile String? @db.VarChar(500)\n  users         users   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"authorprofile_ibfk_1\")\n}\n\nmodel categories {\n  id    Int     @id @default(autoincrement())\n  nome  String  @db.VarChar(100)\n  posts posts[]\n}\n\nmodel comments {\n  id          Int       @id @default(autoincrement())\n  text        String    @db.Text\n  commentDate DateTime? @default(now()) @db.DateTime(0)\n  postId      Int\n  userId      Int\n  posts       posts     @relation(fields: [postId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"comments_ibfk_1\")\n  users       users     @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"comments_ibfk_2\")\n\n  @@index([postId], map: \"postId\")\n  @@index([userId], map: \"userId\")\n}\n\nmodel posts {\n  id               Int        @id @default(autoincrement())\n  title            String     @db.VarChar(755)\n  content          String     @db.Text\n  publication_date DateTime?  @default(now()) @db.DateTime(0)\n  authorId         Int\n  categorieId      Int\n  comments         comments[]\n  users            users      @relation(fields: [authorId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"posts_ibfk_1\")\n  categories       categories @relation(fields: [categorieId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"posts_ibfk_2\")\n\n  @@index([authorId], map: \"authorId\")\n  @@index([categorieId], map: \"categorieId\")\n}\n\nmodel users {\n  id            Int            @id @default(autoincrement())\n  name          String         @db.VarChar(100)\n  email         String         @unique(map: \"email\") @db.VarChar(100)\n  password      String         @db.VarChar(255)\n  type          users_type?    @default(leitor)\n  data_criacao  DateTime?      @default(now()) @db.DateTime(0)\n  authorprofile authorprofile?\n  comments      comments[]\n  posts         posts[]\n}\n\nenum users_type {\n  leitor\n  autor\n  admin\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"authorprofile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"biography\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"socialProfile\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"users\",\"relationName\":\"authorprofileTousers\"}],\"dbName\":null},\"categories\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"posts\",\"relationName\":\"categoriesToposts\"}],\"dbName\":null},\"comments\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"commentDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"postId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"posts\",\"relationName\":\"commentsToposts\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"users\",\"relationName\":\"commentsTousers\"}],\"dbName\":null},\"posts\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"publication_date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"categorieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"comments\",\"relationName\":\"commentsToposts\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"users\",\"relationName\":\"postsTousers\"},{\"name\":\"categories\",\"kind\":\"object\",\"type\":\"categories\",\"relationName\":\"categoriesToposts\"}],\"dbName\":null},\"users\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"users_type\"},{\"name\":\"data_criacao\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"authorprofile\",\"kind\":\"object\",\"type\":\"authorprofile\",\"relationName\":\"authorprofileTousers\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"comments\",\"relationName\":\"commentsTousers\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"posts\",\"relationName\":\"postsTousers\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.mysql.mjs"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.mysql.wasm-base64.mjs")));
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map