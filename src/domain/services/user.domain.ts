import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../data/repositories/user.repository';
import { UserEntity } from '../../data/entities/user.Entity';
import { ICreateUserData, IUpdateUserData, IDeleteUser, IUpdateVerificationData } from '../../data/interfaces/iUser.Interface';

@Injectable()
export class UserDomain {
  constructor(private readonly userRepository: UserRepository) {}

  /* Verbo: Criar Apenas executa a ação de persistência no repositório.*/
  public async create(data: ICreateUserData): Promise<UserEntity> {
    return await this.userRepository.create(data);
  }

  /*Verbo: Listar Todos*/
  public async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  /* Verbo: Buscar por ID*/
  public async getUserById(userId: number): Promise<UserEntity | null> {
    return await this.userRepository.getById(userId);
  }

  /* Verbo: Buscar por Email é útil para que a Application possa validar regras de unicidade.*/
  public async getByEmail(email: string): Promise<UserEntity | null> {
    return await this.userRepository.getByEmail(email);
  }

  public async updateUser(id: number, data: IUpdateUserData): Promise<UserEntity> {
    return await this.userRepository.update(id, data);
  }

  public async deleteUser(data: IDeleteUser): Promise<void> {
    return await this.userRepository.delete(data.userId);
  }

  public async updateVerificationData(userId: number, data: IUpdateVerificationData): Promise<void> {
  return await this.userRepository.updateVerification(userId, data);
  }
}