import { UserInput } from 'types';
import { User } from './user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';
export declare class UsersService extends BaseService<User> {
    constructor(dataSource: DataSource);
    create(payload: UserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findByPk(pk: number): Promise<User>;
    update(pk: number, payload: UserInput): Promise<User>;
    remove(pk: number): Promise<void>;
}
