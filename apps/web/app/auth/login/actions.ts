'use server';
import { redirect } from 'next/navigation';
import { AuthInput, AuthOutput } from 'types';
import { cookies } from 'next/headers';

export async function login(prevState: any, payload: AuthInput) {
	// const result = FetchClient.post('auth')
	// const result = await fetch(`${process.env.BASE_URL}/auth/login`, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify(payload),
	// });
	// return handleResult<AuthOutput>(result, (json) => {
	// 	cookies().set('authorization', json.accessToken);
	// 	redirect('/home');
	// });
}
