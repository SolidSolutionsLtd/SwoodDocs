import { useEffect, useState } from 'react'
import { menuItems } from '../data/menuData'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import { ListItem, Collapse, List, ListSubheader, Typography } from '@mui/material'
import { IndexItem } from '../components/IndexItem'

interface MenuItemProps {
	item: IMenuItem
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
			{item.children ? (
				<>
					<ListSubheader component="div" sx={{ position: 'sticky', top: 60, zIndex: 1, bgcolor: 'background.paper', p: 0, m: 0 }}>
						<ListItem onClick={handleClick} component="li" sx={{ fontSize: 16 }}>
							<IndexItem to={item.to} title={item.title} pro={item.pro} beta={item.beta} postDate={item.postDate} updateDate={item.updateDate} />
							{item.children ? open ? <ArrowDropDown color="info" /> : <ArrowRight color="disabled" /> : null}
						</ListItem>
					</ListSubheader>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding sx={{ pl: 4 }}>
							{item.children.map((child, index) => (
								<MenuItem key={index} item={child} filter={filter} />
							))}
						</List>
					</Collapse>
				</>
			) : (
				<ListItem onClick={handleClick} component="li">
					<IndexItem to={item.to} title={item.title} pro={item.pro} beta={item.beta} postDate={item.postDate} updateDate={item.updateDate} />
				</ListItem>
			)}
		</>
	)
}

const filterMenuItems = (items: IMenuItem[], filter: string): IMenuItem[] => {
	return items
		.map(item => {
			if (item.children) {
				const filteredChildren = filterMenuItems(item.children, filter)
				if (filteredChildren.length > 0 || item.title?.toLowerCase().includes(filter)) {
					return { ...item, children: filteredChildren }
				}
			} else if (item.title?.toLowerCase().includes(filter)) {
				return item
			}
			return null
		})
		.filter(item => item !== null) as IMenuItem[]
}

const Menu = ({ filter }: { filter: string }) => {
	// console.log('filter menu: ' + filter)

	// Create a new array by filtering the original array
	const filteredData = filterMenuItems(menuItems, filter.toLowerCase())

	if (filteredData.length === 0)
		return (
			<Typography color="textDisabled" sx={{ marginLeft: '20px' }}>
				No matches found.
			</Typography>
		)

	return (
		<List>
			{filteredData.map((item, index) => (
				<MenuItem key={index} item={item} filter={filter} />
			))}
		</List>
	)
}

export default Menu
