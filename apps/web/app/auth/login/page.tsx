'use client';
import { Card, CardContent, CardHeader, Container, Stack, Link } from '@mui/material';
import LoginForm from './form';

export default function LoginPage(): JSX.Element {
	return (
		<Container maxWidth="sm">
			<Card>
				<CardHeader title="Login" subheader="Access your community" />
				<CardContent>
					<Stack textAlign={'center'}>
						<LoginForm />
						<Link href="/auth/register">Create an account</Link>
						<Link href="/auth/register">I forgot my password</Link>
					</Stack>
				</CardContent>
			</Card>
		</Container>
	);
}
