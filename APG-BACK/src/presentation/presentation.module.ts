import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { UserController } from './controllers/user.controller';
import { PostController } from './controllers/post.controller';
import { CategoryController } from './controllers/category.controller';
import { CommentController } from './controllers/comments.controller';
@Module({
  imports: [ApplicationModule],
  controllers: [UserController, PostController, CategoryController, CommentController],
})
export class PresentationModule {}