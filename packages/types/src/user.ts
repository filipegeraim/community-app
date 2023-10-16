import { KeyDef } from './key';
import { Optional } from './optional';

export interface UserDef extends KeyDef {
	name: string;
	email: string;
	password: string;
}

export type UserInput = Optional<UserDef, 'id'>;
