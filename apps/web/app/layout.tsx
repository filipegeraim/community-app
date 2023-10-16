import 'globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeRegistry } from '_theme';
import { ChildrenProps } from '_types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Turborepo',
	description: 'Generated by create turbo',
};

export default function RootLayout({ children }: ChildrenProps): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
