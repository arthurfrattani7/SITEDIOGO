import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDomain } from '../../domain/services/user.domain';
import { PrismaService } from 'data/providers/db/prisma.Service';

@Injectable()
export class UserValidate {
  constructor(
    private userDomain: UserDomain,
    private readonly db: PrismaService
  ) {}

  /* Regra de Negócio: O utilizador precisa de existir no blog_db. */
  async isValidUser(userId: number) {
    const user = await this.userDomain.getUserById(userId);

    if (!user) {
      throw new BadRequestException('Utilizador não encontrado no sistema');
    }

    return user;
  }

  async canUserPublish(userId: number) {
    const user = await this.db.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException ('Usuário não encontrado.');
    }

    // Bloqueia se o tipo for 'leitor'
    if (user.type === 'leitor') {
      throw new BadRequestException('Acesso negado: Leitores não podem publicar notícias.');
    }
    
    return true;
  }

}