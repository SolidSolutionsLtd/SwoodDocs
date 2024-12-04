import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: 'rgb(25, 118, 210)',
			// main: '#1D4F91', // TriMech Blue
		},
		background: {
			default: 'rgb(15, 18, 20)', // Main background color
			paper: 'rgb(15, 18, 20)', // Background for paper components
		},
		text: {
			// primary: 'rgb(182, 190, 201)', // MUI Grey
			primary: '#BFBFC3', // TriMech Grey
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					marginTop: '16px', // Adjust the value as needed
				},
				h3: {
					color: 'rgb(246, 247, 248)', // Set h3 color to white
				},
				h4: {
					color: 'rgb(246, 247, 248)', // Set h3 color to white
				},
			},
		},
	},
})

export const lightTheme = createTheme({
	palette: {
		// primary: {
		// 	main: 'rgb(25, 118, 210)',
		// },
		background: {
			// default: 'rgb(15, 18, 20)', // Main background color
			// paper: 'rgb(15, 18, 20)', // Background for paper components
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					marginTop: '16px', // Adjust the value as needed
				},
			},
		},
	},
})
