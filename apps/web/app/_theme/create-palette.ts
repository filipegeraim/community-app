import { PaletteOptions } from '@mui/material';

export type PaletteType = {
	primary: string;
	secondary: string;
	text: string;
	background: {
		paper: string;
		body: string;
		light: string;
	};
};

export const palette: PaletteType = {
	primary: 'rgb(91, 228, 155)',
	secondary: '#2883FA',
	text: '#FFF',
	background: {
		paper: 'rgb(33, 43, 54)',
		body: 'rgb(22, 28, 36)',
		light: 'rgb(145 158 171 / 16%)',
	},
};

export const createPalette = (): PaletteOptions => ({
	mode: 'dark',
	primary: {
		main: palette.primary,
	},
	text: {
		primary: palette.text,
	},
	background: {
		paper: palette.background.paper,
		default: palette.background.body,
	},
});
