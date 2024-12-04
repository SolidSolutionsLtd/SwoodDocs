import { IconButton } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { useTheme } from '../providers/MyThemeProvider'

export const ThemeToggle = () => {
	const { toggleTheme, isDarkMode } = useTheme()

	return (
		<IconButton aria-label="change theme" onClick={toggleTheme}>
			{isDarkMode ? <WbSunnyOutlinedIcon color="primary" fontSize="small" /> : <DarkModeOutlinedIcon sx={{ color: 'white' }} fontSize="small" />}
		</IconButton>
	)
}
