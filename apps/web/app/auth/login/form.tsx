'use client';
import { Button, Stack } from '@mui/material';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

export default function Form({ onSubmit }: { onSubmit: (data: any) => void }) {
	return (
		<FormContainer defaultValues={{ email: '', password: '' }} onSuccess={(data) => onSubmit(data)}>
			<Stack>
				<TextFieldElement name="email" label="Email" required />
				<TextFieldElement name="password" label="Password" required />
				<Button type="submit">Login</Button>
			</Stack>
		</FormContainer>
	);
}
