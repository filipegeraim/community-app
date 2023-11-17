import { CreatedBy } from './created-by';
import { Description } from './description';
import { Key } from './key';
import { ReplyDef } from './reply';

export interface PostDef extends Description, CreatedBy, Key {
	title: string;
	replies?: ReplyDef[];
}

export type PostInput = Omit<PostDef, keyof Key | keyof CreatedBy>;
export type PostOutput = Omit<PostDef, 'replies'>;
