'use server';

import { fetchClient } from '_helpers/fetch';
import { PostInput, PostOutput } from 'types';

export async function getPost() {
	return await fetchClient<PostOutput[]>('GET', 'post');
}

export async function createPost(payload: PostInput) {
	return await fetchClient<PostOutput>('POST', 'post', payload);
}
