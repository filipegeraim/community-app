import { Paper, Box, Typography, IconButton, Divider } from '@mui/material';
import { Message } from '_components';
import { fetchClient } from '_helpers/fetch';
import { PostOutput } from 'types';

async function getPost() {
	return await fetchClient<PostOutput[]>('GET', 'post');
}

export default async function PostPage() {
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
