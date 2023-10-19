import { Type } from 'class-transformer';
import { BaseEntity } from 'helpers/entity/base.entity';
import { User } from 'models/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PostDef } from 'types';

@Entity()
export class Post extends BaseEntity implements PostDef {
  @Column({ length: 50 })
  title: string;
  @Column({ length: 200 })
  description: string;
  @ManyToOne(() => User, (entity) => entity.posts, { nullable: true })
  user: User;
}
