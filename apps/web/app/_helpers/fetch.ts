import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

async function handleResult<TResult = any>(result: Response): Promise<TResult> {
	const json = await result.json();
	if (result.ok) {
		return json as TResult;
	} else {
		throw { error: json.message };
	}
}

export async function fetchClient<TResult = any>(method: 'POST' | 'GET', url: string, body?: any): Promise<TResult> {
	try {
		const getTokenHeader = (token) => {
			return token ? { 'Authorization': `Bearer ${token}` } : undefined;
		};
		const session = await getServerSession(authOptions);
		const response = await fetch(`${process.env.BASE_URL}/${url}`, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				...getTokenHeader(session?.accessToken),
			},
			body: body ? JSON.stringify(body) : undefined,
		});
		return await handleResult<TResult>(response);
	} catch (ex) {
		throw new Error(ex.error ? ex.error : 'We have some problems, please try again.');
	}
}
