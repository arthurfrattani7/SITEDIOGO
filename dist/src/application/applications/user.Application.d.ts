import { UserDomain } from '../../domain/services/user.domain';
import { UserValidate } from 'validate/services/user.Validate';
import { IGetUserById } from 'data/interfaces/iUser.Interface';
import { CreateUserRequestDto } from 'presentation/dto/request/createUserRequestDto';
import { UserEntity } from 'data/entities/user.Entity';
import { UpdateUserRequestDto } from 'presentation/dto/request/updateUserRequestDto';
import { MailProvider } from 'data/providers/mailServices/emailTransporter';
import { VerifyUserRequestDto } from 'presentation/dto/request/verifyUserRequestDto';
export declare class UserApplication {
    private userDomain;
    private userValidate;
    private sendingMail;
    constructor(userDomain: UserDomain, userValidate: UserValidate, sendingMail: MailProvider);
    getAllUsers(): Promise<UserEntity[]>;
    getUserById(data: IGetUserById): Promise<UserEntity>;
    createUser(dto: CreateUserRequestDto): Promise<UserEntity>;
    updateUser(id: number, dto: UpdateUserRequestDto): Promise<UserEntity>;
    deleteUser(id: number): Promise<void>;
    requestVerificationCode(userId: number, email: string): Promise<void>;
    verifyAccount(dto: VerifyUserRequestDto): Promise<void>;
}
