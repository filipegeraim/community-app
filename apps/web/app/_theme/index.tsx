'use client';
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createTypography } from './create-typografy';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { BorderRadius } from './constants';

const createThemeMui = () => {
	const palette = createPalette();
	const typography = createTypography();
	const components = createComponents();
	return createTheme({
		palette,
		shape: {
			borderRadius: BorderRadius,
		},
		components,
		typography,
	});
};

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={createThemeMui()}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
