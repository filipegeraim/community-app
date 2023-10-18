import { Type, instanceToPlain } from 'class-transformer';
import { PrimaryGeneratedColumn } from 'typeorm';
import { KeyDef } from 'types';

export class BaseEntity implements KeyDef {
  @PrimaryGeneratedColumn()
  id: number;

  toJSON() {
    return instanceToPlain(this);
  }
}
