import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
	async function middleware(request) {
		const token = await getToken({ req: request, secret: process.env.JWT_SECRET });
		const isIndexpage = request.nextUrl.pathname === '/';
		const isAuthRoute = authRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
		const isGuestRoute = guestRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

		if (!token && (isAuthRoute || isIndexpage)) {
			return NextResponse.redirect(new URL('/auth/login', request.url));
		}

		if (token) {
			if (isIndexpage || isGuestRoute) {
				return NextResponse.redirect(new URL('/post', request.url));
			}
		}
	},
	{
		secret: process.env.JWT_SECRET,
		callbacks: {
			async authorized() {
				return true;
			},
		},
	}
);

const authRoutes = ['/post'];
const guestRoutes = ['/auth/login', '/auth/register'];
