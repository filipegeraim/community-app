import { CreatedBy } from './created-by';
import { Description } from './description';
import { Key } from './key';
import { ReplyDef } from './reply';
import { Version } from './version';

export interface PostDef extends Description, CreatedBy, Key {
	title: string;
	replies?: ReplyDef[];
}

export type PostInput = Omit<PostDef, keyof Key>;
export type PostOutput = Omit<PostDef, keyof Version | keyof CreatedBy | 'replies'>;
