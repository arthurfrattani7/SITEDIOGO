import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Construtor vazio - o Prisma vai buscar o DATABASE_URL ao .env automaticamente
  constructor() {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Banco de Dados Conectado!');
    } catch (error) {
      console.error('Erro de conexão:', error.message);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}