import { Box, Typography } from '@mui/material';

export default function Copyright() {
	return (
		<Box sx={{ py: 3, textAlign: 'center' }}>
			<Typography variant="caption" color={'text.secondary'}>
				Copyright © Filipe Geraim {new Date().getFullYear()}{' '}
			</Typography>
		</Box>
	);
}
