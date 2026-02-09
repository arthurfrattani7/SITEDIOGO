import { Module } from '@nestjs/common';
import { DomainModule } from 'domain/domain.module';
import { UserValidate } from 'validate/services/user.Validate';
import { PostValidate } from './post.Validate';
import { DataModule } from 'data/data.module';
import { CommentValidate } from './comments.Validate';

@Module({
  // O Validate precisa do Domain para procurar usuários no banco
  imports: [DomainModule, DataModule], 
  // Registamos o serviço aqui
  providers: [UserValidate, PostValidate, CommentValidate],
  // Exporta para que outros módulos (como o ApplicationModule) possam usá-lo
  exports: [UserValidate, PostValidate, CommentValidate],
})
export class ValidateModule {}