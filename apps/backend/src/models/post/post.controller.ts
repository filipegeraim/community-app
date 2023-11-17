import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { PostInput, ReplyInput } from 'types';
import { Post as PostEntity } from './post.entity';
import { CreatedByInterceptor } from 'helpers/interceptors/';
import { ReplyService } from 'models/reply/reply.service';
import { Reply as ReplyEntity } from 'models/reply/reply.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService, private readonly replyService: ReplyService) {}

  @UseInterceptors(CreatedByInterceptor<PostEntity>)
  @Post()
  create(@Body() payload: PostInput) {
    return this.postService.create(payload);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findByPk(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findByPk(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: PostInput) {
    return this.postService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }

  @UseInterceptors(CreatedByInterceptor<ReplyEntity>)
  @Post(':id/reply')
  async createReply(@Param('id', ParseIntPipe) id: number, @Body() payload: ReplyInput) {
    const post = await this.postService.findByPk(id);
    return this.replyService.create({ ...payload, post });
  }
}
