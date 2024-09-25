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

	// code to add TopBar offset when scrolling down to section
	useEffect(() => {
		const handleHashChange = () => {
			const yOffset = -150 // Adjust this value to match the height of your fixed top bar
			const element = document.getElementById(window.location.hash.substring(1))
			if (element) {
				const y = element.getBoundingClientRect().top + window.scrollY + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
			}
		}

		window.addEventListener('hashchange', handleHashChange)

		// Call handleHashChange on initial load if there's a hash in the URL
		if (window.location.hash) {
			handleHashChange()
		}

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	return null
}

export default ScrollToSection
