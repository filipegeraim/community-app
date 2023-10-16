import { Components, Theme } from '@mui/material';
import { palette } from './create-palette';

export const createComponents = (): Components<Omit<Theme, 'components'>> => ({
	MuiCssBaseline: {
		styleOverrides: {
			'scrollbarColor': '#6b6b6b #2b2b2b',
			'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
				backgroundColor: palette.background.light,
				width: 10,
				height: 10,
			},
			'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
				backgroundColor: '#6b6b6b',
			},
			'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
				backgroundColor: '#959595',
			},
			'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
				backgroundColor: '#959595',
			},
			'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
				backgroundColor: '#959595',
			},
			'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
				backgroundColor: '#2b2b2b',
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundImage: 'unset',
			},
		},
	},
	MuiButton: {
		defaultProps: {
			variant: 'contained',
		},
		styleOverrides: {
			root: {
				textTransform: 'none',
			},
			sizeSmall: {
				padding: '6px 16px',
			},
			sizeMedium: {
				padding: '8px 20px',
			},
			sizeLarge: {
				padding: '11px 24px',
			},
			textSizeSmall: {
				padding: '7px 12px',
			},
			textSizeMedium: {
				padding: '9px 16px',
			},
			textSizeLarge: {
				padding: '12px 16px',
			},
		},
	},
	MuiGrid2: {
		defaultProps: {
			rowSpacing: 3,
			spacing: 2,
		},
	},
	MuiChip: {
		defaultProps: {
			size: 'small',
		},
		styleOverrides: {
			label: {
				fontWeight: 500,
			},
		},
	},
	MuiTextField: {
		defaultProps: {
			size: 'medium',
			fullWidth: true,
		},
	},
	MuiDialogContent: {
		styleOverrides: {
			root: {
				margin: '15px 0',
				paddingTop: '10px !important',
			},
		},
	},
	MuiDialogActions: {
		defaultProps: {
			sx: {
				px: 3,
				pb: 3,
			},
		},
	},
	MuiStack: {
		defaultProps: {
			spacing: 2,
			direction: 'column',
		},
	},
	MuiAlert: {
		defaultProps: {
			variant: 'filled',
		},
	},
	MuiTableRow: {
		styleOverrides: {
			head: {
				backgroundColor: `${palette.background.light} !important`,
			},
		},
	},
	MuiInputLabel: {
		styleOverrides: {
			root: {
				fontSize: 15,
			},
			asterisk: {
				color: 'red',
			},
		},
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: {
				variant: 'h5',
			},
			subheaderTypographyProps: {
				variant: 'body2',
			},
		},
	},
	MuiFormLabel: {
		defaultProps: {
			sx: { mb: 1, display: 'block' },
		},
		styleOverrides: {
			root: {
				fontSize: 15,
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			inputAdornedStart: {
				marginLeft: 10,
			},
			inputAdornedEnd: {
				marginRight: 10,
			},
		},
	},
	MuiFormControl: {
		defaultProps: {
			fullWidth: true,
		},
	},
	MuiFormControlLabel: {
		styleOverrides: {
			label: {
				fontSize: 14,
				fontWeight: 500,
				lineHeight: '24px',
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			input: {
				fontSize: 14,
				fontWeight: 500,
				lineHeight: '24px',
			},
		},
	},
});
