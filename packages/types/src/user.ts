import { KeyDef } from './key';
import { PostDef } from './post';

export interface UserDef extends KeyDef {
	name: string;
	email: string;
	password: string;
	posts?: PostDef[];
}

export type UserInput = Omit<UserDef, keyof KeyDef>;
