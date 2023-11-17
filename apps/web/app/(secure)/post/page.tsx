import { Box, Stack } from '@mui/material';
import { getPost } from './action';
import { Message } from '_components/ui';
import PostForm from './form';

export default async function PostPage() {
	const posts = await getPost();

	return (
		<>
			<PostForm />
			<Box sx={{ pt: 2 }}>
				<Stack>
					{posts.map((post) => (
						<Message
							title={post.title}
							description={post.description}
							href={`/post/${post.id}`}
							createdBy={post.createdBy.name}
							createdAt={post.createdAt.toString()}
						/>
					))}
				</Stack>
			</Box>
		</>
	);
}
