import 'next-auth';
import type { User } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: User;
		accessToken: string;
	}
	interface User {
		id: number;
		name: string;
		email: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends User {
		accessToken: string;
	}
}
