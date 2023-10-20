import type { PostDef } from 'types';
import { Type } from 'class-transformer';
import { User } from 'models/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { DescriptionEntity } from 'helpers/entity/description.entity';
import { Reply } from 'models/reply/reply.entity';

@Entity()
export class Post extends DescriptionEntity implements PostDef {
  @Column({ length: 50 })
  title: string;
  @OneToMany(() => Reply, (entity) => entity.post, { nullable: true })
  replies?: Reply[];
  @ManyToOne(() => User, (entity) => entity.posts)
  @Type(() => User)
  createdBy: User;
}
