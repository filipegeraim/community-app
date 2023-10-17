import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { UserDef } from 'types';

@Entity()
export class User implements UserDef {
  @ObjectIdColumn({ type: 'string' })
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
