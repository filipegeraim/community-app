import { BadRequestException, Injectable } from '@nestjs/common';
import { UserInput } from 'types';
import { User } from './user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource);
  }

  async create(payload: UserInput): Promise<User> {
    const exist = await this.repository.exist({ where: { email: payload.email.toLowerCase().trim() } });
    if (exist) {
      throw new BadRequestException('User already exists.');
    } else {
      return super.create(payload);
    }
  }

  findAll(): Promise<User[]> {
    return super.findAll();
  }

  findByPk(id: number): Promise<User> {
    return super.findByPk(id);
  }

  update(id: number, payload: UserInput): Promise<User> {
    return super.update(id, payload);
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email: email.toLowerCase().trim() } });
  }

  remove(id: number) {
    super.remove(id);
  }
}
