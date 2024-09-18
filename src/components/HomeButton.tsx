import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import { Link as RouterLink } from 'react-router-dom'

export const HomeButton = () => {
	return (
		<IconButton component={RouterLink} to="/">
			<HomeIcon color="primary" fontSize="large" />
		</IconButton>
	)
}
