// src/components/TopBar.tsx
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeToggle } from '../components/ThemeToggle'
import { Box } from '@mui/material'
import { useTheme } from '../providers/MyThemeProvider'

const drawerWidth = 340

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

interface TopBarProps {
	open: boolean
	handleDrawerOpen: () => void
}

const TopBar: React.FC<TopBarProps> = ({ open, handleDrawerOpen }) => {
	const [pageTitle, setPageTitle] = useState('')
	const { isDarkMode } = useTheme()

	useEffect(() => {
		// Function to observe changes in the DOM
		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (mutation.type === 'childList' || mutation.type === 'characterData') {
					// Check if the PageTitle element exists and update the state
					const titleElement = document.querySelector('.PageTitle')
					if (titleElement) {
						setPageTitle(titleElement.textContent || 'Home')
					}
				}
			})
		})

		// Function to observe the PageTitle element and its content
		const observePageTitle = () => {
			const titleElement = document.querySelector('.PageTitle')
			if (titleElement) {
				// Observe changes to the content of the .PageTitle element
				observer.observe(titleElement, {
					childList: true,
					characterData: true,
					subtree: true, // Includes changes to child nodes
				})
				setPageTitle(titleElement.textContent || 'Home')
			}
		}

		// Start by observing the whole document for PageTitle creation
		const bodyObserver = new MutationObserver(mutations => {
			mutations.forEach(() => {
				observePageTitle()
			})
		})

		bodyObserver.observe(document.body, {
			childList: true,
			subtree: true, // Observe the entire body and its descendants
		})

		// Initial check to see if the .PageTitle is already rendered
		observePageTitle()

		// Cleanup the observers on component unmount
		return () => {
			observer.disconnect()
			bodyObserver.disconnect()
		}
	}, [])

	return (
		// <AppBar className="no-print" position="fixed" open={open} style={{ backgroundColor: 'rgb(1,4,7)' }}>
		<AppBar className="no-print" position="fixed" open={open}>
			<Toolbar>
				<IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{ mr: 2 }, open && { display: 'none' }]}>
					<MenuIcon
						sx={{
							color: isDarkMode ? 'primary.main' : 'white', // Use primary color in dark mode, white otherwise
						}}
					/>
				</IconButton>
				<Typography variant="h5" noWrap component="div" color={isDarkMode ? 'primary' : ''} paddingRight="5px" margin="0px">
					<strong>SwoodDocs</strong>
				</Typography>
				<Typography color="textDisabled" marginTop="6px">
					{' '}
					/ {pageTitle}
				</Typography>
				<Box sx={{ flexGrow: 1 }} /> {/* Pushes the ThemeToggle to the right */}
				<ThemeToggle />
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
