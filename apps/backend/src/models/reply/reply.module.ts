import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { Reply } from './reply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reply])],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
