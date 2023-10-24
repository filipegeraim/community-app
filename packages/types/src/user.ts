import { Key } from './key';
import { PostDef } from './post';
import { ReplyDef } from './reply';
import { Version } from './version';

export interface UserDef extends Key {
	name: string;
	email: string;
	password: string;
	posts?: PostDef[];
	replies?: ReplyDef[];
}

export type UserInput = Omit<UserDef, keyof Key | 'posts' | 'replies'>;
export type UserOutput = Omit<UserDef, keyof Version | 'password' | 'posts' | 'replies'>;
