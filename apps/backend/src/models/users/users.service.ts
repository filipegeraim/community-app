import { Injectable } from '@nestjs/common';
import { UserInput } from 'types';
import { User } from './entities/user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';

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

  findOne(id: number): Promise<User> {
    return;
  }

  update(id: number, payload: UserInput): Promise<User> {
    return;
  }

  remove(id: number): void {
    //void
  }
}
