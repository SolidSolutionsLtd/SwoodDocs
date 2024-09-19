import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './helper/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
)
