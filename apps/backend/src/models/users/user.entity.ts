import { Exclude } from 'class-transformer';
import { encryptPassword } from 'helpers/encryption';
import { BaseEntity } from 'helpers/entity/base.entity';
import { Entity, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { UserDef } from 'types';
import { ObjectId } from 'mongodb';

@Entity()
export class User extends BaseEntity implements UserDef {
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await encryptPassword(this.password);
  }
}
