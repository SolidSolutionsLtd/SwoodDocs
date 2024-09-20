import { Suspense, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { makeStyles } from '@mui/styles'
import { Menu } from '../layout/Menu'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import TopBar from './TopBar'

const drawerWidth = 350

const useStyles = makeStyles(() => ({
	drawerPaper: {
		width: 240,
		boxSizing: 'border-box',
		// Custom scrollbar styles
		'&::-webkit-scrollbar': {
			width: '5px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgb(104,104,104)', // Black scroll bar
			borderRadius: '5px',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: 'rgb(66,66,66)',
		},
	},
}))

const Main = styled('main', { shouldForwardProp: (prop: string) => prop !== 'open' })<{
	open?: boolean
}>(({ theme }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	variants: [
		{
			props: ({ open }) => open,
			style: {
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
				marginLeft: 0,
			},
		},
	],
}))

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))

const Layout = () => {
	const theme = useTheme()
	const [open, setOpen] = useState(true)

	const handleDrawerOpen = () => setOpen(true)

	const handleDrawerClose = () => setOpen(false)

	const classes = useStyles()

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{ paper: classes.drawerPaper }}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon color="primary" /> : <ChevronRightIcon color="primary" />}</IconButton>
				</DrawerHeader>
				<Divider />
				<Menu />
			</Drawer>

			{/* Main Content */}
			<Main open={open}>
				<Suspense fallback={<Loading />}>
					<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px`, m: 0 }}>
						<ScrollToTopButton />
						<Outlet />
					</Box>
				</Suspense>
			</Main>
		</Box>
	)
}

export default Layout
