'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { UserInput } from 'types';
import { register } from './actions';

export default function RegisterForm() {
	const formContext = useForm<UserInput>({
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	});

	const onSuccess = async (data: UserInput) => {
		const result = await register(data);
	};

	return (
		<FormContainer formContext={formContext} onSuccess={onSuccess}>
			<Stack>
				<TextFieldElement name="name" label="Name" required />
				<TextFieldElement name="email" label="Email" required />
				<TextFieldElement name="password" label="Password" required />
				<Button type="submit">Register</Button>
			</Stack>
		</FormContainer>
	);
}
