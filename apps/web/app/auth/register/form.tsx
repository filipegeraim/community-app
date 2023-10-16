'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { UserInput } from 'types';

export default function RegisterForm({ onSubmit }: { onSubmit: (data: UserInput) => void }) {
	const formContext = useForm<UserInput>({
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	});

	return (
		<FormContainer formContext={formContext} onSuccess={(data) => onSubmit(data)}>
			<Stack>
				<TextFieldElement name="name" label="Name" required />
				<TextFieldElement name="email" label="Email" required />
				<TextFieldElement name="password" label="Password" required />
				<Button type="submit">Register</Button>
			</Stack>
		</FormContainer>
	);
}
