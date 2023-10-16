import React from 'react';
import { Box } from '@mui/material';
import { ChildrenProps } from '_types';

export default function AuthLayout({ children }: ChildrenProps) {
	return (
		<Box sx={{ display: 'flex' }}>
			<Box
				component="main"
				sx={{
					height: '100vh',
					overflow: 'hidden',
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}>
				{children}
			</Box>
		</Box>
	);
}
