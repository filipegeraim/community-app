'use client';
import { Paper, Box, Typography, IconButton } from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { format, parseISO } from 'date-fns';

export interface MessageProps {
	title: string;
	description: string;
	href?: string;
	createdBy: string;
	createdAt: string;
}

export default function Message(props: MessageProps) {
	const { title, description, href, createdAt, createdBy } = props;
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Box>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="caption" color={(theme) => theme.palette.grey[500]}>
					{`Posted by: ${createdBy} at ${format(parseISO(createdAt), 'yyyy-MM-dd hh:ss')}`}
				</Typography>
				<Typography variant="body1" sx={{ pt: 2 }}>
					{description}
				</Typography>
			</Box>
			{href && (
				<Box>
					<IconButton href={href}>
						<ChevronRightIcon />
					</IconButton>
				</Box>
			)}
		</Paper>
	);
}
