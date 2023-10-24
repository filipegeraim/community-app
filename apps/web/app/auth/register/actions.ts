'use server';
import { revalidatePath } from 'next/cache';
import { Fetch } from '_types';
import { UserInput } from 'types';
import { handleResult } from '_helpers/fetch';

export async function register(prevState: any, payload: UserInput): Promise<Fetch> {
	const result = await fetch(`${process.env.BASE_URL}/auth/register`, {
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});
	return handleResult(result, () => {
		revalidatePath('/auth/register');
		return { message: 'Registered Successfully' };
	});
}
