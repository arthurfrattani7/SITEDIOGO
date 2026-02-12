export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    type: 'leitor' | 'autor' | 'admin';
    data_criacao: Date;
    isVerified: boolean;
    verificationCodeHash?: string;
    verificationExpiredAt?: Date;
    password: string;
}
