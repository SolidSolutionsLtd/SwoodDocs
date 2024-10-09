import { useState, useEffect } from 'react'
import { Fab } from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

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
			className="no-print"
			color="info"
			aria-label="scroll back to top"
			onClick={scrollToTop}
			size="small"
			sx={{
				position: 'fixed',
				bottom: isVisible ? 16 : -60, // Adjust the hidden position as needed
				right: 16,
				transition: 'bottom 0.2s ease-in-out',
			}}
		>
			<KeyboardDoubleArrowUpIcon />
		</Fab>
	)
}
