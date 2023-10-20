import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { ReplyService } from './reply.service';
import type { ReplyInput } from 'types';
import { Reply } from './reply.entity';
import { CreatedByInterceptor } from 'helpers/interceptors';

@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @UseInterceptors(CreatedByInterceptor<Reply>)
  @Post()
  create(@Body() payload: ReplyInput) {
    return this.replyService.create(payload);
  }

  @Get()
  findAll() {
    return this.replyService.findAll();
  }

  @Get(':id')
  findByPk(@Param('id', ParseIntPipe) id: number) {
    return this.replyService.findByPk(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: ReplyInput) {
    return this.replyService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.replyService.remove(id);
  }
}
