import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
	return (
		<Box style={{ textAlign: 'center', padding: '50px' }}>
			<Typography variant="h4" style={{ fontWeight: 'bold', paddingBottom: '50px' }}>
				404 - Page Not Found
			</Typography>
			<Typography>Sorry, the page you are looking for does not exist.</Typography>
			<Typography>
				Go back to <NavLink to="/">Home</NavLink>.
			</Typography>

			<Box display="flex" justifyContent="center" className="imageBox">
				<img src="./images/404dino.png" style={{ height: '200px', borderRadius: '200px' }} />
			</Box>
		</Box>
	)
}
