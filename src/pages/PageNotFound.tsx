import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { messages404Page } from '../data/messages404Page'

const randomMessage = () => {
	return messages404Page[Math.floor(Math.random() * messages404Page.length)]
}

const PageNotFound = () => {
	return (
		<Box style={{ textAlign: 'center', padding: '50px' }}>
			<Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '50px' }}>
				404 - Page not found
			</Typography>

			<Typography variant="h6" style={{ paddingBottom: '30px' }}>
				{randomMessage()}
			</Typography>

			<Typography>
				Go back to <NavLink to="/">Home Page</NavLink>.
			</Typography>

			<Box display="flex" justifyContent="center" className="imageBox">
				<img src="./images/dino.gif" style={{ height: '200px' }} />
			</Box>
		</Box>
	)
}

export default PageNotFound
