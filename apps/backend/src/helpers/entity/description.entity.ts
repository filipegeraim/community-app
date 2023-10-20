import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Description } from 'types';

export abstract class DescriptionEntity extends BaseEntity implements Description {
  @Column({ length: 200 })
  description: string;
}
