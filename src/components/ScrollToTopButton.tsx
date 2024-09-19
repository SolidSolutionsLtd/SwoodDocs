import { Fab } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export const ScrollToTopButton = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<Fab
			color="info"
			aria-label="scroll back to top"
			onClick={scrollToTop}
			size="small"
			sx={{
				position: 'fixed',
				bottom: 16,
				right: 16,
			}}
		>
			<ArrowUpwardIcon />
		</Fab>
	)
}
