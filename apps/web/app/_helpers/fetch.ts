import { Fetch } from '_types';

export async function handleResult(result: Response, ok: () => Fetch): Promise<Fetch> {
	const json = await result.json();
	if (result.ok) {
		return ok();
	} else {
		return { error: json.message };
	}
}
