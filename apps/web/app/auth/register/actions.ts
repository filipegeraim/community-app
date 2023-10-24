'use server';
import { revalidatePath } from 'next/cache';
import { Fetch } from '_types';
import { UserInput } from 'types';

export async function register(prevState: any, payload: UserInput): Promise<Fetch> {
	const result = await fetch(`${process.env.BASE_URL}/auth/register`, {
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});
	const json = await result.json();
	if (result.ok) {
		revalidatePath('/auth/register');
		return { message: 'Register is completed' };
	} else {
		return { error: json.message };
	}
}
