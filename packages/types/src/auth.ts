export type AuthInput = {
	email: string;
	password: string;
};

export type AuthJwt = {
	sub: number;
	name: string;
};

export type AuthOutput = {
	accessToken: string;
	prefix: string;
};
