import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { PostInput } from 'types';
import { Post as PostEntity } from './post.entity';
import { CreatedByInterceptor } from 'helpers/interceptors/';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

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
}
