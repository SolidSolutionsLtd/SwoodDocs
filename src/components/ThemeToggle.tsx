import { IconButton } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

export const ThemeToggle = () => {
	const handleToggleTheme = () => {
		console.log('theme changed')
	}
	return (
		<IconButton color="primary" aria-label="change theme" onClick={handleToggleTheme}>
			<DarkModeOutlinedIcon color="primary" />
		</IconButton>
	)
}
