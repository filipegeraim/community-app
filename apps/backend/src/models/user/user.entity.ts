import type { UserDef } from 'types';
import { Exclude } from 'class-transformer';
import { encryptPassword } from 'helpers/encryption';
import { BaseEntity } from 'helpers/entity/base.entity';
import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import { Post } from 'models/post/post.entity';
import { Reply } from 'models/reply/reply.entity';

@Entity()
export class User extends BaseEntity implements UserDef {
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;
  @OneToMany(() => Post, (entity) => entity.createdBy, { nullable: true })
  posts?: Post[];
  @OneToMany(() => Post, (entity) => entity.createdBy, { nullable: true })
  replies?: Reply[];

  @BeforeInsert()
  async beforeInsert() {
    this.password = await encryptPassword(this.password);
  }
}
