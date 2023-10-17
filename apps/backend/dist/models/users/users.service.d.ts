import { UserInput } from 'types';
import { User } from './entities/user.entity';
import { BaseService } from 'helpers/service/base.service';
import { DataSource } from 'typeorm';
export declare class UsersService extends BaseService<User> {
    constructor(dataSource: DataSource);
    create(payload: UserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, payload: UserInput): Promise<User>;
    remove(id: number): void;
}
