import { Box, Button } from '@mui/material';
import PostList from './list';
import PostForm from './form';

export default function PostPage() {
	return (
		<>
			<PostForm />
			<Box sx={{ pt: 2 }}>
				<PostList />
			</Box>
		</>
	);
}
