import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { Reply } from './reply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reply])],
  providers: [ReplyService],
  exports: [ReplyService],
})
export class ReplyModule {}
