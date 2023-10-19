import { Injectable } from '@nestjs/common';
import { UserInput } from 'types';
import { User } from './user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource);
  }

  create(payload: UserInput): Promise<User> {
    return super.create(payload);
  }

  findAll(): Promise<User[]> {
    return super.findAll();
  }

  findByPk(pk: number): Promise<User> {
    return super.findByPk(pk);
  }

  update(pk: number, payload: UserInput): Promise<User> {
    return super.update(pk, payload);
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email: email.toLowerCase().trim() } });
  }

  remove(pk: number) {
    super.remove(pk);
  }
}
