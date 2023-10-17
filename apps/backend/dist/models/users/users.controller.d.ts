import { UsersService } from './users.service';
import { UserInput } from 'types';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(payload: UserInput): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, payload: UserInput): Promise<import("./entities/user.entity").User>;
    remove(id: string): void;
}
