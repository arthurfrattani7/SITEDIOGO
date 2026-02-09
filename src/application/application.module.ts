import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { ValidateModule } from 'validate/services/validate.module';
import { UserApplication } from './applications/user.Application';
import { PostApplication } from './applications/posts.Application';
import { CategoryApplication } from './applications/categories.Application';
import { CommentApplication } from './applications/comment.Application';
import { DataModule } from '../data/data.module';

@Module({
  imports: [DomainModule, ValidateModule, DataModule], 
  providers: [UserApplication, PostApplication, CategoryApplication, CommentApplication],
  exports: [UserApplication, PostApplication, CategoryApplication, CommentApplication],
})
export class ApplicationModule {}