import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Helper function to scroll to section when using # in the URL. This solves single page issues in github pages.
const ScrollToSection = () => {
	const location = useLocation()

	useEffect(() => {
		if (location.hash) {
			const elementId = location.hash.substring(1) // Remove the '#' from the hash
			const element = document.getElementById(elementId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location]) // Re-run the effect whenever the location changes

	return null
}

export default ScrollToSection
