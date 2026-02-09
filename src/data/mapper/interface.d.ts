export interface IToUserEntity {
  id: number;
  name: string;
  email: string;
  type: users_type | null;
  data_criacao: Date | null; 
  isVerified: boolean;
  verificationCodeHash?: string | null;
  verificationExpiredAt?: Date | null;
}