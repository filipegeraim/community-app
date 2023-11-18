'use client';
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { signOut } from 'next-auth/react';

export default function Navbar() {
	return (
		<AppBar variant="outlined" elevation={0} position="sticky" sx={{ border: 0 }}>
			<Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 3, justifyContent: 'end' }}>
				<Button variant="text" onClick={() => signOut({ callbackUrl: '/auth/login' })}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
}
