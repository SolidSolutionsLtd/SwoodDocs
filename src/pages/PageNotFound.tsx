import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { messages404Page } from '../data/Messages404Page'

const randomMessage = () => {
	return messages404Page[Math.floor(Math.random() * messages404Page.length)]
}

export const PageNotFound = () => {
	return (
		<Box style={{ textAlign: 'center', padding: '50px' }}>
			<Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '50px' }}>
				404 - Page Not Found
			</Typography>

			<Typography variant="h6" style={{ paddingBottom: '30px' }}>
				{randomMessage()}
			</Typography>

			<Typography>
				Go back to <NavLink to="/">Home</NavLink>.
			</Typography>

			<Box display="flex" justifyContent="center" className="imageBox">
				<img src="./images/dino.gif" style={{ height: '200px' }} />
			</Box>
		</Box>
	)
}