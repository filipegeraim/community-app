import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOutput } from 'types';
import { FetchClient } from '_helpers/fetch';

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: '/auth/login',
	},
	session: {
		strategy: 'jwt',
		maxAge: 1209600,
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				try {
					console.log('entrou', credentials);
					const response: AuthOutput = await FetchClient.post('auth/login', credentials);
					return {
						id: response.user.id.toString(),
						email: response.user.email,
						name: response.user.name,
						accessToken: response.accessToken,
					};
				} catch (ex) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, trigger, session }) {
			return token;
		},
		async session({ session, token }) {
			if (token.error) {
				throw new Error('Refresh token has expired');
			}

			return session;
		},
	},
	events: {
		async signIn(payload) {
			console.log(payload);
		},
	},
};
