import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class DescriptionEntity extends BaseEntity {
  @Column({ length: 200 })
  description: string;
}
