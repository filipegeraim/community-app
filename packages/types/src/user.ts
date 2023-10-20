import { Key } from './key';
import { PostDef } from './post';
import { ReplyDef } from './reply';

export interface UserDef extends Key {
	name: string;
	email: string;
	password: string;
	posts?: PostDef[];
	replies?: ReplyDef[];
}

export type UserInput = Omit<UserDef, keyof Key>;
