import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './styles/index.css'
import './styles/App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// import { CssBaseline, ThemeProvider } from '@mui/material'
// import { darkTheme } from './helper/ThemeProvider.tsx'
import { MyThemeProvider } from './providers/MyThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MyThemeProvider>
			{/* <ThemeProvider theme={darkTheme}> */}
			{/* <CssBaseline /> */}
			<App />
			{/* </ThemeProvider> */}
		</MyThemeProvider>
	</StrictMode>
)
