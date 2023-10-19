import { DescriptionDef } from './description';
import { KeyDef } from './key';
import { PostDef } from './post';
import { UserDef } from './user';

export interface ReplyDef extends DescriptionDef {
	description: string;
	user: UserDef;
	post: PostDef;
}

export type ReplyInput = Omit<ReplyDef, keyof KeyDef>;
