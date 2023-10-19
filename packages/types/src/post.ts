import { DescriptionDef } from './description';
import { KeyDef } from './key';
import { ReplyDef } from './reply';
import { UserDef } from './user';

export interface PostDef extends DescriptionDef {
	title: string;
	user: UserDef;
	replies?: ReplyDef[];
}

export type PostInput = Omit<PostDef, keyof KeyDef>;
