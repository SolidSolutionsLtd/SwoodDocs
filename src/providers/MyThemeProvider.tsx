import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../helper/ThemeProvider.tsx'

type MyThemeContextType = {
	isDarkMode: boolean
	toggleTheme: () => void
}

// Create the context with a default value
const MyThemeContext = createContext<MyThemeContextType | undefined>(undefined)

type MyThemeProviderProps = {
	children: ReactNode
}

// Provider component
export const MyThemeProvider: React.FC<MyThemeProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		// Default to dark theme if no theme is saved in localStorage
		const storedTheme = localStorage.getItem('theme')
		return storedTheme ? storedTheme === 'dark' : true // Default to true (dark mode)
	})

	const toggleTheme = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode
			localStorage.setItem('theme', newMode ? 'dark' : 'light') // Save the updated theme
			return newMode
		})
	}

	useEffect(() => {
		// Ensure the initial theme matches the stored value
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme) {
			setIsDarkMode(storedTheme === 'dark')
		}
	}, [])

	return (
		<MyThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</MyThemeContext.Provider>
	)
}

// Hook to use the ThemeContext
export const useTheme = (): MyThemeContextType => {
	const context = useContext(MyThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
