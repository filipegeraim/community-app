import type { ReplyInput } from 'types';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'helpers/service/base.service';
import { Reply } from './reply.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ReplyService extends BaseService<Reply> {
  constructor(readonly dataSource: DataSource) {
    super(Reply, dataSource);
  }

  create(payload: ReplyInput): Promise<Reply> {
    return super.create(payload);
  }

  findAll(): Promise<Reply[]> {
    return super.findAll();
  }

  findByPk(id: number): Promise<Reply> {
    return super.findByPk(id);
  }

  update(id: number, payload: ReplyInput): Promise<Reply> {
    return super.update(id, payload);
  }

  remove(id: number) {
    super.remove(id);
  }
}
