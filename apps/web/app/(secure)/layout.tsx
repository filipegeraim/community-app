import { ChildrenProps } from '_types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function SecureLayout({ children }: ChildrenProps): JSX.Element {
	console.log(cookies().get('authorization'));
	if (!cookies().get('authorization')) {
		redirect('/unauthorized');
	}
	return <div>{children}</div>;
}
