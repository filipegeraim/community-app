import { Injectable } from '@nestjs/common';
import { UserInput } from 'types';
import { User } from './user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource);
  }

  create(payload: UserInput): Promise<User> {
    return super.create(payload);
  }

  findAll(): Promise<User[]> {
    return super.findAll();
  }

  async findByPk(pk: number): Promise<User> {
    return super.findByPk(pk);
  }

  update(pk: number, payload: UserInput): Promise<User> {
    return super.update(pk, payload);
  }

  remove(pk: number): Promise<void> {
    return super.remove(pk);
  }
}
