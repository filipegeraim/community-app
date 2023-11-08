import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchClient } from '_helpers/fetch';
import { AuthOutput } from 'types';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: '/auth/login',
	},
	session: {
		strategy: 'jwt',
		maxAge: 1209600,
	},
	secret: process.env.JWT_SECRET,
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					type: 'email',
				},
				password: {
					type: 'password',
				},
			},
			async authorize(credentials) {
				try {
					const res: AuthOutput = await fetchClient('POST', 'auth/login', credentials);
					return {
						id: res.user.id,
						email: res.user.email,
						name: res.user.name,
						accessToken: res.accessToken,
					} as User;
				} catch (ex) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user } as JWT;
		},
		async session({ session, token }) {
			if (token.error) {
				throw new Error('Refresh token has expired');
			}
			session.accessToken = token.accessToken;
			session.user.id = token.id;
			session.user.email = token.email || '';
			session.user.name = token.name || '';
			return session;
		},
	},
	events: {},
};
