import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box, Stack, Typography, Breadcrumbs, Link } from '@mui/material'
import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { directoryStructure } from '../data/DataDirectory'
const drawerWidth = 275

const useStyles = makeStyles(() => ({
	drawerPaper: {
		width: drawerWidth,
		boxSizing: 'border-box',
		maxHeight: '600px',
		overflow: 'auto',
		'&::-webkit-scrollbar': { width: '5px' },
		'&::-webkit-scrollbar-thumb': { backgroundColor: 'rgb(104,104,104)', borderRadius: '5px' },
		'&::-webkit-scrollbar-track': { backgroundColor: 'rgb(66,66,66)' },
	},
}))

const DataDirectoryTree = ({ onSelect }: { onSelect: (item: IDirectoryItem) => void }) => {
	const [open, setOpen] = useState<{ [key: string]: boolean }>({})
	const classes = useStyles()

	const handleToggle = (label: string) => {
		setOpen(prevState => ({
			...prevState,
			[label]: !prevState[label],
		}))
	}

	const renderDirectoryItem = (item: IDirectoryItem, level = 0) => {
		const hasChildren = item.children && item.children.length > 0
		const indent = level * 3

		return (
			<div key={item.label}>
				<ListItemButton
					onClick={() => {
						onSelect(item)
						if (hasChildren) handleToggle(item.label)
					}}
					sx={{ pl: indent }}
				>
					{hasChildren && (open[item.label] ? <ArrowDropDown color="disabled" /> : <ArrowRight color="disabled" />)}
					<ListItemIcon sx={{ minWidth: 30, ml: hasChildren ? 0 : 3 }}>{item.icon}</ListItemIcon>
					<ListItemText
						primary={item.label}
						sx={{ mt: 0, ml: 0.5 }} // Adjust inset padding when no icon
					/>
				</ListItemButton>
				{hasChildren && (
					<Collapse in={open[item.label]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding dense>
							{item.children!.map(child => renderDirectoryItem(child, level + 1))}
						</List>
					</Collapse>
				)}
			</div>
		)
	}

	return (
		<List className={classes.drawerPaper} component="nav" aria-labelledby="swood-data-directory-subheader" dense>
			{directoryStructure.map(item => renderDirectoryItem(item))}
		</List>
	)
}

const findPath = (items: IDirectoryItem[], target: IDirectoryItem): IDirectoryItem[] | null => {
	for (const item of items) {
		if (item.label === target.label) return [item]
		if (item.children) {
			const path = findPath(item.children, target)
			if (path) return [item, ...path]
		}
	}
	return null
}

const DataDirectoryStructure = () => {
	const [selectedItem, setSelectedItem] = useState<IDirectoryItem | null>(null)
	const [selectedPath, setSelectedPath] = useState<IDirectoryItem[]>([])

	const handleSelect = (item: IDirectoryItem) => {
		setSelectedItem(item)
		const path = findPath(directoryStructure, item)
		if (path) setSelectedPath(path)
	}

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: '300px 1fr',
				gap: 2,
				justifyContent: 'center',
			}}
		>
			<DataDirectoryTree onSelect={handleSelect} />
			{selectedItem && selectedItem.info ? (
				<Stack spacing={2} sx={{ pt: 5 }}>
					<Breadcrumbs aria-label="breadcrumb">
						<Link key={0} underline="none" color={'inherit'}>
							...
						</Link>
						{selectedPath.map((crumb, index) => (
							<Link key={index} underline="none" color={index === selectedPath.length - 1 ? 'text.primary' : 'inherit'}>
								{crumb.label}
							</Link>
						))}
					</Breadcrumbs>
					{selectedItem.info}
				</Stack>
			) : (
				<Typography variant="h6" sx={{ pt: 5 }} color="textDisabled">
					Select a folder or file for further details...
				</Typography>
			)}
		</Box>
	)
}

export default DataDirectoryStructure
