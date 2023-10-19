import { Exclude } from 'class-transformer';
import { encryptPassword } from 'helpers/encryption';
import { BaseEntity } from 'helpers/entity/base.entity';
import { Entity, Column, BeforeInsert, OneToMany } from 'typeorm';
import { UserDef } from 'types';
import { Post } from 'models/post/post.entity';

@Entity()
export class User extends BaseEntity implements UserDef {
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;
  @OneToMany(() => Post, (entity) => entity.user, { nullable: true })
  posts?: Post[];

  @BeforeInsert()
  async beforeInsert() {
    this.password = await encryptPassword(this.password);
  }
}
