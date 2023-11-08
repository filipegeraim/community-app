import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { fetchClient } from '_helpers/fetch';
import { PostOutput } from 'types';

async function getPost() {
	return await fetchClient<PostOutput[]>('GET', 'post');
}

export default async function HomePage() {
	const posts = await getPost();
	return posts.map((post) => (
		<Card>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Box>
					<Typography variant="h5">{post.title}</Typography>
					<Typography variant="body1">{post.description}</Typography>
				</Box>
				<Box>
					<IconButton href={`/post/${post.id}`}>
						<ChevronRightIcon />
					</IconButton>
				</Box>
			</CardContent>
		</Card>
	));
}
