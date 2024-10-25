import { List, ListItem } from '@mui/material'
import { menuItems } from '../data/menuData'
import { IndexItem } from './IndexItem'
import { isNew, parseDate } from '../helper/dateHelper'
import { Section } from './Section'

const flattenMenuItems = (items: IMenuItem[]): IMenuItem[] => {
	const result: IMenuItem[] = []

	for (const item of items) {
		const { children, ...rest } = item

		if (isNew(rest.postDate) || isNew(rest.updateDate)) result.push(rest)

		if (children) {
			result.push(...flattenMenuItems(children))
		}
	}

	const sortedMenuItems = result.sort((a, b) => {
		const dateA = new Date(parseDate(a.postDate) || parseDate(a.updateDate) || 0)
		const dateB = new Date(parseDate(b.postDate) || parseDate(b.updateDate) || 0)
		return dateB.getTime() - dateA.getTime()
	})

	return sortedMenuItems
}

const LatestSwoodDocs = () => {
	const flattenedMenuItems = flattenMenuItems(menuItems)

	return (
		<>
			{flattenedMenuItems.length > 0 && (
				<Section id="WhatsNew" title="Latest updates...">
					<List>
						{flattenedMenuItems.map((item, index) => (
							<ListItem key={index}>
								<IndexItem to={item.to} title={item.title} pro={item.pro} beta={item.beta} postDate={item.postDate} updateDate={item.updateDate} />
							</ListItem>
						))}
					</List>
				</Section>
			)}
		</>
	)
}

export default LatestSwoodDocs
