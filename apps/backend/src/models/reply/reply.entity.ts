import { Type } from 'class-transformer';
import { DescriptionEntity } from 'helpers/entity/description.entity';
import { Post } from 'models/post/post.entity';
import { User } from 'models/user/user.entity';
import { ManyToOne } from 'typeorm';
import type { ReplyDef } from 'types';

export class Reply extends DescriptionEntity implements ReplyDef {
  @ManyToOne(() => User, (entity) => entity.replies)
  @Type(() => User)
  user: User;
  @ManyToOne(() => Post, (entity) => entity.replies)
  @Type(() => Post)
  post: Post;
}
