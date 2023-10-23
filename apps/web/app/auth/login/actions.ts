'use server';
import { redirect } from 'next/navigation';

export async function login(data: any) {
	const body = { email: 'filipe.geraim@gmail.com', password: '1234' };
	const res = await fetch('http://localhost:5000/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	return res.json();
	//redirect(`/auth/login`);
}
