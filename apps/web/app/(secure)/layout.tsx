import { Box, Container } from '@mui/material';
import { Copyright, Navbar } from '_components';
import { ChildrenProps } from '_types';

export default function SecureLayout({ children }: ChildrenProps): JSX.Element {
	return (
		<Box sx={{ display: 'flex' }}>
			<Box
				component="main"
				sx={{
					height: '100vh',
					overflow: 'auto',
					maxHeight: '100vh',
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Navbar />
				<Container maxWidth="md" sx={{ pt: 5 }}>
					{children}
				</Container>
				<Copyright />
			</Box>
		</Box>
	);
}
