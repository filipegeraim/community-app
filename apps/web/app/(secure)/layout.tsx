import { Box, Container } from '@mui/material';
import { Copyright, Navbar } from '_components/ui';
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
				<Container maxWidth="md" sx={{ pt: 3 }}>
					{children}
				</Container>
				<Copyright />
			</Box>
		</Box>
	);
}
