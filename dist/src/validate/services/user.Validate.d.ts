import { UserDomain } from '../../domain/services/user.domain';
import { PrismaService } from 'data/providers/db/prisma.Service';
export declare class UserValidate {
    private userDomain;
    private readonly db;
    constructor(userDomain: UserDomain, db: PrismaService);
    isValidUser(userId: number): Promise<import("../../data/entities/user.Entity").UserEntity>;
    canUserPublish(userId: number): Promise<boolean>;
}
