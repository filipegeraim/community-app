async function handleResult<TResult = any>(result: Response): Promise<TResult> {
	const json = await result.json();
	if (result.ok) {
		return json as TResult;
	} else {
		throw { error: json.message };
	}
}

export class FetchClient {
	static async post<TBody = any, TResult = any>(url: string, body?: TBody): Promise<TResult> {
		const response = await fetch(`${process.env.BASE_URL}/${url}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: body ? JSON.stringify(body) : undefined,
		});
		return handleResult(response);
	}
}
