import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';
import { UserDef } from 'types';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
