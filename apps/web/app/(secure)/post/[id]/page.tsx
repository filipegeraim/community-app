import { Message } from '_components/ui';
import { getPostById } from './action';
import { Box, Typography, Stack } from '@mui/material';

interface PostByIdPageParams {
	id: string;
}
interface PostByIdPageProps {
	params: PostByIdPageParams;
}

export default async function PostByIdPage(props: PostByIdPageProps) {
	const { params } = props;
	const post = await getPostById(Number(params.id));
	return (
		<>
			<Box>
				<Typography variant="h4">{post.title}</Typography>
				<Typography variant="body1">{post.description}</Typography>
			</Box>
			<Stack>
				{post.replies.map((reply) => (
					<Message title={''} description={''} createdBy={''} createdAt={''} />
				))}
			</Stack>
		</>
	);
}
