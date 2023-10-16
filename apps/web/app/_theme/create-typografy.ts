import { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => ({
	fontFamily: ['Inter', 'sans-serif'].join(','),
	body1: {
		fontSize: '1rem',
		fontWeight: 400,
		lineHeight: 1.4,
	},
	body2: {
		fontSize: '0.85rem',
		fontWeight: 400,
		lineHeight: 1.47,
	},
	button: {
		fontWeight: 600,
		fontSize: '0.85rem',
	},
	caption: {
		fontSize: '0.75rem',
		fontWeight: 500,
		lineHeight: 1.56,
	},
	subtitle1: {
		fontSize: '1.0rem',
		fontWeight: 500,
		lineHeight: 1.47,
	},
	subtitle2: {
		fontSize: '0.95rem',
		fontWeight: 500,
		lineHeight: 1.47,
	},
	overline: {
		fontSize: '0.75rem',
		fontWeight: 600,
		letterSpacing: '0.5px',
		lineHeight: 2.4,
		textTransform: 'uppercase',
	},
	h1: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '3rem',
		lineHeight: 1.1,
	},
	h2: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '2.5rem',
		lineHeight: 1.1,
	},
	h3: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '1.95rem',
		lineHeight: 1.1,
	},
	h4: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '1.7rem',
		lineHeight: 1.1,
	},
	h5: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '1.2rem',
		lineHeight: 1.1,
	},
	h6: {
		fontFamily: "'Plus Jakarta Sans', sans-serif",
		fontWeight: 700,
		fontSize: '0.700rem',
		lineHeight: 1.2,
	},
});
