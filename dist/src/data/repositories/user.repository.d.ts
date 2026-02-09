import { PrismaService } from '../providers/db/prisma.Service';
import { MapperRepository } from 'data/mapper/entityMapper';
import { UserEntity } from '../entities/user.Entity';
import { ICreateUserData } from 'data/interfaces/iUser.Interface';
import { IUpdateVerificationData } from 'data/interfaces/iUser.Interface';
export declare class UserRepository {
    private readonly db;
    private readonly mapper;
    constructor(db: PrismaService, mapper: MapperRepository);
    getByEmail(email: string): Promise<UserEntity | null>;
    findAll(): Promise<UserEntity[]>;
    getById(id: number): Promise<UserEntity | null>;
    create(data: ICreateUserData): Promise<UserEntity>;
    update(id: number, data: Partial<UserEntity>): Promise<UserEntity>;
    delete(id: number): Promise<void>;
    updateVerification(userId: number, data: IUpdateVerificationData): Promise<void>;
}
