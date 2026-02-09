import { UserApplication } from '../../application/applications/user.Application';
import { UserResponseDto } from 'presentation/dto/response/userResponse.dto';
import { CreateUserRequestDto } from 'presentation/dto/request/createUserRequestDto';
import { UpdateUserRequestDto } from 'presentation/dto/request/updateUserRequestDto';
import { VerifyUserRequestDto } from 'presentation/dto/request/verifyUserRequestDto';
export declare class UserController {
    private readonly userApplication;
    constructor(userApplication: UserApplication);
    findAll(): Promise<import("../../data/entities/user.Entity").UserEntity[]>;
    findOne(id: number): Promise<import("../../data/entities/user.Entity").UserEntity>;
    create(dto: CreateUserRequestDto): Promise<UserResponseDto>;
    update(id: number, dto: UpdateUserRequestDto): Promise<import("../../data/entities/user.Entity").UserEntity>;
    remove(id: number): Promise<{
        message: string;
    }>;
    verify(dto: VerifyUserRequestDto): Promise<{
        message: string;
    }>;
}
