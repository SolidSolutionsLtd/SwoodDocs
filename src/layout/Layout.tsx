import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { makeStyles } from '@mui/styles'
import { Menu } from '../pages/Menu'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Outlet } from 'react-router-dom'

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

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: `${drawerWidth}px`,
				transition: theme.transitions.create(['margin', 'width'], {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
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

export const Layout = () => {
	const theme = useTheme()
	const [open, setOpen] = useState(true)

	const handleDrawerOpen = () => setOpen(true)

	const handleDrawerClose = () => setOpen(false)

	const classes = useStyles()

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} style={{ backgroundColor: 'rgb(1,4,7)' }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={[
							{
								mr: 2,
							},
							open && { display: 'none' },
						]}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" noWrap component="div">
						<strong>SwoodDocs</strong>
					</Typography>
				</Toolbar>
			</AppBar>
			{/* Menu */}
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
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
				</DrawerHeader>
				<Divider />
				<Menu />
			</Drawer>

			{/* Main Content */}
			<Main open={open}>
				<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px`, m: 0 }}>
					<ScrollToTopButton />
					<Outlet />
				</Box>
			</Main>
		</Box>
	)
}
