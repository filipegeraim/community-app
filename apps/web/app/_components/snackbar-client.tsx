'use client';
import { SnackbarProvider } from 'notistack';

export default function SnackbarProviderClient() {
	'use client';
	return <SnackbarProvider autoHideDuration={3000} preventDuplicate={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} />;
}
