import React, { createContext, useContext, useState, ReactNode } from 'react'

type ThemeContextType = {
	isDarkMode: boolean
	toggleTheme: () => void
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
	children: ReactNode
}

// Provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleTheme = () => {
		setIsDarkMode(prevMode => !prevMode)
	}

	return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
