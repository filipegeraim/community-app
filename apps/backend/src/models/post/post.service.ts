import { Injectable } from '@nestjs/common';
import { BaseService } from 'helpers/service/base.service';
import { PostInput } from 'types';
import { Post } from './post.entity';

@Injectable()
export class PostService extends BaseService<Post> {
  create(payload: PostInput): Promise<Post> {
    return super.create(payload);
  }

  findAll(): Promise<Post[]> {
    return super.findAll();
  }

  findByPk(pk: number): Promise<Post> {
    return super.findByPk(pk);
  }

  update(pk: number, payload: PostInput): Promise<Post> {
    return super.update(pk, payload);
  }

  remove(pk: number): Promise<void> {
    return super.remove(pk);
  }
}
