'use client';
import { Card, CardContent, CardHeader, Container, Typography } from '@mui/material';

export default function HomePage(): JSX.Element {
	return (
		<Container maxWidth="sm">
			<Card>
				<CardHeader title="Login" subheader="Access your community" />
				<CardContent>
					<Typography>HOME</Typography>
				</CardContent>
			</Card>
		</Container>
	);
}
