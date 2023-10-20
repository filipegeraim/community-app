import { CreatedBy } from './created-by';
import { Description } from './description';
import { Key } from './key';
import { PostDef } from './post';

export interface ReplyDef extends Description, CreatedBy, Key {
	post: PostDef;
}

export type ReplyInput = Omit<ReplyDef, keyof Key>;
