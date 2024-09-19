// src/components/TopBar.tsx
import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 350

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
	// const theme = useTheme()

	return (
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
					<MenuIcon color="primary" />
				</IconButton>
				<Typography variant="h5" noWrap component="div">
					<strong>SwoodDocs</strong>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
