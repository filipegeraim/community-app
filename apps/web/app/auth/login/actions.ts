'use server';
import { handleResult } from '_helpers/fetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthInput } from 'types';

export async function login(prevState: any, payload: AuthInput) {
	const result = await fetch(`${process.env.BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	return handleResult(result, () => {
		revalidatePath('/auth/login');
		redirect('/home');
	});
}
