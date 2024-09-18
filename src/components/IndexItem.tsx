import { NavLink } from 'react-router-dom'
import { differenceInDays, parse } from 'date-fns'
import { ProChip } from './ProChip'
import { NewChip } from './NewChip'

const isNew = (dateStr: string) => {
	const today = new Date()
	const parsedDate = parse(dateStr, 'dd/MM/yyyy', new Date())
	return differenceInDays(today, parsedDate) < 30
}

interface Props {
	to: string
	title: string
	pro?: boolean
	postDate?: string
}

export const IndexItem: React.FC<Props> = ({ to, title, pro, postDate }) => {
	return (
		<li>
			<NavLink to={to}>
				{title} {pro && <ProChip />} {postDate && isNew(postDate) && <NewChip />}
			</NavLink>
		</li>
	)
}
