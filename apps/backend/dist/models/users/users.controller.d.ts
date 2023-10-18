import { UsersService } from './users.service';
import { UserInput } from 'types';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(payload: UserInput): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: number): Promise<import("./user.entity").User>;
    update(id: number, payload: UserInput): Promise<import("./user.entity").User>;
    remove(id: number): Promise<void>;
}
