'use server';

import { fetchClient } from '_helpers/fetch';
import { PostOutput } from 'types';

export async function getPostById(id: number) {
	return await fetchClient<PostOutput>('GET', `post/${id}`);
}
