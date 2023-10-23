import { Card, CardContent, CardHeader, Container, Stack, Button } from '@mui/material';
import { ArrowBack as BackIcon } from '@mui/icons-material';
import RegisterForm from './form';

export default function RegisterPage(): JSX.Element {
	return (
		<Container maxWidth="sm">
			<Card>
				<CardHeader title="Register" subheader="Inform your data to register in community" />
				<CardContent>
					<Stack textAlign={'center'}>
						<RegisterForm />
						<Button href="/auth/login" variant="text" startIcon={<BackIcon />}>
							Back
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</Container>
	);
}
