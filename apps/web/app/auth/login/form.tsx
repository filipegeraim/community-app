'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { AuthInput } from 'types';

export default function LoginForm({ onSubmit }: { onSubmit: (data: AuthInput) => void }) {
	return (
		<FormContainer<AuthInput> defaultValues={{ email: '', password: '' }} onSuccess={(data) => onSubmit(data)}>
			<Stack>
				<TextFieldElement name="email" label="Email" required />
				<TextFieldElement name="password" label="Password" required />
				<Button type="submit">Login</Button>
			</Stack>
		</FormContainer>
	);
}
