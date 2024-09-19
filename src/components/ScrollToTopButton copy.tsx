import { useState, useEffect } from 'react'
import { Fab } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

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
				display: isVisible ? 'inline-flex' : 'none',
			}}
		>
			<ArrowUpwardIcon />
		</Fab>
	)
}
