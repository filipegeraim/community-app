import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { ReplyModule } from 'models/reply/reply.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), forwardRef(() => ReplyModule)],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
