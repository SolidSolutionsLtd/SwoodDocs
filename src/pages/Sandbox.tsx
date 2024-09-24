import React, { useState } from 'react'
import { List, ListItem, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { menuItems } from '../data/menuData'

interface MenuItemType {
	to?: string
	title: string
	postDate?: string
	updateDate?: string
	pro?: boolean
	beta?: boolean
	children?: MenuItemType[]
}

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<>
			<ListItem onClick={handleClick} component="li">
				<ListItemText primary={item.title} />
				{item.children ? open ? <ExpandLess /> : <ExpandMore /> : null}
			</ListItem>
			{item.children && (
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding sx={{ pl: 4 }}>
						{item.children.map((child, index) => (
							<MenuItem key={index} item={child} />
						))}
					</List>
				</Collapse>
			)}
		</>
	)
}

const Menu: React.FC = () => (
	<List>
		{menuItems.map((item, index) => (
			<MenuItem key={index} item={item} />
		))}
	</List>
)

export default Menu
