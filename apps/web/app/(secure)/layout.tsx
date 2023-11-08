import { ChildrenProps } from '_types';

export default function SecureLayout({ children }: ChildrenProps): JSX.Element {
	return <div>{children}</div>;
}
