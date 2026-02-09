import { UserRepository } from '../../data/repositories/user.repository';
import { UserEntity } from '../../data/entities/user.Entity';
import { ICreateUserData, IUpdateUserData, IDeleteUser, IUpdateVerificationData } from '../../data/interfaces/iUser.Interface';
export declare class UserDomain {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(data: ICreateUserData): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getUserById(userId: number): Promise<UserEntity | null>;
    getByEmail(email: string): Promise<UserEntity | null>;
    updateUser(id: number, data: IUpdateUserData): Promise<UserEntity>;
    deleteUser(data: IDeleteUser): Promise<void>;
    updateVerificationData(userId: number, data: IUpdateVerificationData): Promise<void>;
}
