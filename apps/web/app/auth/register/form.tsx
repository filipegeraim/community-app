'use client';
import React from 'react';
import { Alert, Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { UserInput } from 'types';
import {
	//@ts-ignore
	experimental_useFormState as useFormState,
} from 'react-dom';
import { Fetch } from '_types';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { fetchClient } from '_helpers/fetch';

const initialState: Fetch = {
	message: '',
	error: '',
};

export default function RegisterForm() {
	
	const router = useRouter();
	const formContext = useForm<UserInput>({
		defaultValues: { email: '', password: '', name: '' },
	});
	//const [state, formAction] = useFormState(register, initialState);

	// React.useEffect(() => {
	// 	if (state?.message) {
	// 		enqueueSnackbar({ message: state.message, variant: 'success' });
	// 		router.replace('/auth/login');
	// 	}
	// }, [state]);
	return (
		<FormContainer FormProps={{ autoComplete: 'off' }} formContext={formContext}>
			<Stack>
				<TextFieldElement name="name" label="Name" required />
				<TextFieldElement type="email" autoComplete="off" name="email" label="Email" required />
				<TextFieldElement type="password" autoComplete="off" name="password" label="Password" required />
				{/* {state?.error && <Alert severity="error">{state.error}</Alert>} */}
				<Button type="submit">Register</Button>
			</Stack>
		</FormContainer>
	);
}
