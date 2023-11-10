import React from 'react';
import { Message } from '_components/ui';
import { getPost } from './action';

export default async function PostList() {
	const posts = await getPost();

	return posts.map((post) => (
		<Message
			title={post.title}
			description={post.description}
			href={`/post/${post.id}`}
			createdBy={post.createdBy.name}
			createdAt={post.createdAt.toString()}
		/>
	));
}
