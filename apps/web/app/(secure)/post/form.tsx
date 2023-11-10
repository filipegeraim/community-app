'use client';
import React from 'react';
import { Button, DialogContent, Stack, Dialog, DialogActions, DialogTitle, Box } from '@mui/material';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';
import { PostInput } from 'types';
import { createPost } from './action';
import { useRouter } from 'next/navigation';

export default function PostForm() {
	const router = useRouter();
	const formContext = useForm<PostInput>({
		defaultValues: { title: '', description: '' },
	});
	// const [state, formAction] = useFormState(login, initialState);
	const [open, setOpen] = React.useState(false);

	const handleOpen = async () => {
		setOpen(true);
	};
	const handleClose = async () => {
		setOpen(false);
	};

	const handleSubmit = async (payload: PostInput) => {
		await createPost(payload);
		router.refresh();
	};

	return (
		<>
			<Box textAlign={'end'}>
				<Button onClick={handleOpen}>New Post</Button>
			</Box>
			<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
				<DialogTitle variant="h5">New Post</DialogTitle>
				<DialogContent>
					<FormContainer FormProps={{ autoComplete: 'off' }} formContext={formContext}>
						<Stack>
							<TextFieldElement name="title" autoComplete="off" label="Title" required />
							<TextFieldElement name="description" autoComplete="off" label="Description" required multiline rows={5} />
						</Stack>
					</FormContainer>
				</DialogContent>
				<DialogActions>
					<Button variant="text" onClick={handleClose}>
						Cancel
					</Button>
					<Button onClick={formContext.handleSubmit(handleSubmit)}>Create</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
