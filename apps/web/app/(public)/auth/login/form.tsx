'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { AuthInput } from 'types';
import { login } from './actions';
import { Fetch } from '_types';
import {
	//@ts-ignore
	experimental_useFormState as useFormState,
} from 'react-dom';

const initialState: Fetch = {
	message: '',
	error: '',
};

export default function LoginForm() {
	const formContext = useForm<AuthInput>({
		defaultValues: { email: '', password: '' },
	});
	const [state, formAction] = useFormState(login, initialState);

	return (
		<FormContainer FormProps={{ autoComplete: 'off' }} formContext={formContext} onSuccess={formAction}>
			<Stack>
				<TextFieldElement type="email" name="email" autoComplete="off" label="Email" required />
				<TextFieldElement type="password" name="password" autoComplete="off" label="Password" required />
				<Button type="submit">Login</Button>
			</Stack>
		</FormContainer>
	);
}
