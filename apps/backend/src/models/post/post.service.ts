import { Injectable } from '@nestjs/common';
import { BaseService } from 'helpers/service/base.service';
import { PostInput } from 'types';
import { Post } from './post.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class PostService extends BaseService<Post> {
  constructor(readonly dataSource: DataSource) {
    super(Post, dataSource);
  }

  create(payload: PostInput): Promise<Post> {
    return super.create(payload);
  }

  findAll(): Promise<Post[]> {
    return super.findAll();
  }

  findByPk(id: number): Promise<Post> {
    return super.findByPk(id);
  }

  update(id: number, payload: PostInput): Promise<Post> {
    return super.update(id, payload);
  }

  remove(id: number) {
    super.remove(id);
  }
}
