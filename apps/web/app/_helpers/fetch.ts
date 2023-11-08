import { getSession } from 'next-auth/react';

async function handleResult<TResult = any>(result: Response): Promise<TResult> {
	const json = await result.json();
	if (result.ok) {
		return json as TResult;
	} else {
		throw { error: json.message };
	}
}

export async function fetchClient<TBody = any>(method: 'POST' | 'GET', url: string, body?: TBody) {
	const getTokenHeader = (token) => {
		return token ? { 'Authorization': `Bearer ${token}` } : undefined;
	};
	const session = await getSession();
	const response = await fetch(`${process.env.BASE_URL}/${url}`, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			...getTokenHeader(session?.accessToken),
		},
		body: body ? JSON.stringify(body) : undefined,
	});
	return handleResult(response);
}
