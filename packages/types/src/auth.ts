export type AuthInput = {
	email: string;
	password: string;
};

export type AuthOutput = {
	accessToken: string;
	prefix: string;
};
