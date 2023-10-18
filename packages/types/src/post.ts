import { KeyDef } from './key';
import { UserDef } from './user';

export interface PostDef extends KeyDef {
	title: string;
	description: string;
	user: UserDef;
}

export type PostInput = Omit<PostDef, keyof KeyDef>;
