import { Version } from './version';

export type Key = Version & {
	readonly id: number;
};
