import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/db/prisma.Service';
import { MapperRepository } from 'data/mapper/entityMapper';
import { UserEntity } from '../entities/user.Entity'; 
import { ICreateUserData } from 'data/interfaces/iUser.Interface';
import { IUpdateVerificationData } from 'data/interfaces/iUser.Interface';

@Injectable()
export class UserRepository {
  constructor(
    private readonly db: PrismaService,
    private readonly mapper: MapperRepository,
  ) {}

  async getByEmail(email: string): Promise<UserEntity | null> {
    const result = await this.db.users.findUnique({ where: { email } });
    return this.mapper.toUserEntity(result);
  }

  async findAll(): Promise<UserEntity[]> {
    const results = await this.db.users.findMany({
      orderBy: { data_criacao: 'desc' },
    });

    return results.map(user => this.mapper.toUserEntity(user))
   .filter((u): u is UserEntity => u !== null);
  }

  async getById(id: number): Promise<UserEntity | null> {
    const result = await this.db.users.findUnique({
      where: { id },
    });

    return this.mapper.toUserEntity(result);
  }

  // CRUD DE USUÁRIOS 

   async create(data: ICreateUserData): Promise<UserEntity> {
    const result = await this.db.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        type: data.type || 'leitor',
        verificationCodeHash: data.verificationCodeHash,
        verificationExpiredAt: data.verificationExpiredAt
      },
    });

    return this.mapper.toUserEntity(result)!;
  }

 async update(id: number, data: Partial<UserEntity>): Promise<UserEntity> {
  const updatedUser = await this.db.users.update({
    where: { id },
    data, 
  });
  
  return this.mapper.toUserEntity(updatedUser);
  }

async delete(id: number): Promise<void> {
  await this.db.users.delete({
    where: { id },
  });
  }


  async updateVerification(userId: number, data: IUpdateVerificationData): Promise<void> {
  await this.db.users.update({
    where: { id: userId },
    data: {
      verificationCodeHash: data.verificationCodeHash,
      verificationExpiredAt: data.verificationExpiredAt,
    },
  });
  }
  
}