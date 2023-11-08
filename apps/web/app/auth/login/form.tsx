'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { AuthInput } from 'types';
import { login } from './actions';
import { Fetch } from '_types';
import { useFormState } from 'react-dom';
import { signIn } from 'next-auth/react';

const initialState: Fetch = {
	message: '',
	error: '',
};

export default function LoginForm() {
	const formContext = useForm<AuthInput>({
		defaultValues: { email: 'filipe.geraim@gmail.com', password: '1234' },
	});
	const [state, formAction] = useFormState(login, initialState);

	const handleSubmit = (payload: AuthInput) => {
		signIn('credentials', { ...payload, callbackUrl: '/home' });
	};

	return (
		<FormContainer FormProps={{ autoComplete: 'off' }} formContext={formContext} onSuccess={handleSubmit}>
			<Stack>
				<TextFieldElement type="email" name="email" autoComplete="off" label="Email" required />
				<TextFieldElement type="password" name="password" autoComplete="off" label="Password" required />
				<Button type="submit">Login</Button>
			</Stack>
		</FormContainer>
	);
}
