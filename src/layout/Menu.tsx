import { useEffect, useState } from 'react'
import { menuItems } from '../data/menuData'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { ListItem, Collapse, List } from '@mui/material'
import { IndexItem } from '../components/IndexItem'

interface MenuItemType {
	to?: string
	title: string
	postDate?: string
	updateDate?: string
	pro?: boolean
	beta?: boolean
	children?: MenuItemType[]
}

interface MenuItemProps {
	item: MenuItemType
	filter: string
}

const MenuItem: React.FC<MenuItemProps> = ({ item, filter }) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (filter) {
			setOpen(true)
		} else {
			setOpen(false)
		}
	}, [filter])

	const handleClick = () => setOpen(!open)

	return (
		<>
			<ListItem onClick={handleClick} component="li">
				<IndexItem to={item.to} title={item.title} pro={item.pro} beta={item.beta} postDate={item.postDate} updateDate={item.updateDate} />
				{/* <ListItemText primary={item.title} /> */}
				{item.children ? open ? <ExpandLess /> : <ExpandMore /> : null}
			</ListItem>
			{item.children && (
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding sx={{ pl: 4 }}>
						{item.children.map((child, index) => (
							<MenuItem key={index} item={child} filter={filter} />
						))}
					</List>
				</Collapse>
			)}
		</>
	)
}

const filterMenuItems = (items: MenuItemType[], filter: string): MenuItemType[] => {
	return items
		.map(item => {
			if (item.children) {
				const filteredChildren = filterMenuItems(item.children, filter)
				if (filteredChildren.length > 0 || item.title.toLowerCase().includes(filter)) {
					return { ...item, children: filteredChildren }
				}
			} else if (item.title.toLowerCase().includes(filter)) {
				return item
			}
			return null
		})
		.filter(item => item !== null) as MenuItemType[]
}

const Menu = ({ filter }: { filter: string }) => {
	console.log('filter menu: ' + filter)

	// Create a new array by filtering the original array
	const filteredData = filterMenuItems(menuItems, filter.toLowerCase())

	return (
		<List>
			{filteredData.map((item, index) => (
				<MenuItem key={index} item={item} filter={filter} />
			))}
		</List>
	)
}

export default Menu
