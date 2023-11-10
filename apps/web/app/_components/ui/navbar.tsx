import React from 'react';
import { AppBar, Avatar, Toolbar } from '@mui/material';
import { People as UserIcon } from '@mui/icons-material';

export default function Navbar() {
	return (
		<AppBar variant="outlined" elevation={0} position="sticky" sx={{ border: 0 }}>
			<Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 3, justifyContent: 'end' }}>
				<Avatar
					sx={{
						cursor: 'pointer',
						height: 40,
						width: 40,
						ml: 1,
						backgroundColor: '#fff',
					}}>
					<UserIcon fontSize="medium" />
				</Avatar>
			</Toolbar>
		</AppBar>
	);
}
