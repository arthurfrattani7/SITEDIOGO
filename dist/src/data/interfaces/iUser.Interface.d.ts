export interface IGetUserById {
    userId: number;
}
export interface IGetAllUsers {
    page?: number;
    limit?: number;
}
export interface ICreateUserData {
    name: string;
    email: string;
    password: string;
    type?: 'leitor' | 'autor' | 'admin';
    verificationCodeHash?: string;
    verificationExpiredAt?: Date;
}
export interface IUpdateUserData {
    name?: string;
    password?: string;
    email?: string;
}
export interface IDeleteUser {
    userId: number;
}
export interface IUpdateVerificationData {
    verificationCodeHash: string;
    verificationExpiredAt: Date;
}
