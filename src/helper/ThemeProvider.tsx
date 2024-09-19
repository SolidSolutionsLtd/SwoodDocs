import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark', // Switches to dark mode
		primary: {
			main: 'rgb(25, 118, 210)',
		},
		background: {
			default: 'rgb(15, 18, 20)', // Main background color
			paper: 'rgb(15, 18, 20)', // Background for paper components
		},
		text: {
			primary: '#ffffff', // Text color
		},
	},
})
