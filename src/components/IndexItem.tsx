import { NavLink } from 'react-router-dom'
import { ProChip } from './ProChip'
import { NewChip } from './NewChip'
import { UpdatedChip } from './UpdatedChip'
import { BetaChip } from './BetaChip'
import { isNew } from '../helper/dateHelper'

interface Props {
	to?: string
	title: string
	pro?: boolean
	beta?: boolean
	postDate?: string
	updateDate?: string
}

export const IndexItem: React.FC<Props> = ({ to, title, pro, beta, postDate, updateDate }) => {
	return to ? (
		<>
			<NavLink to={to} style={{ color: 'gray' }}>
				{title} {pro && <ProChip />}
				{beta && <BetaChip />} {postDate && isNew(postDate) && <NewChip />} {updateDate && isNew(updateDate) && <UpdatedChip />}
			</NavLink>
		</>
	) : (
		<>
			{title} {pro && <ProChip />}
			{beta && <BetaChip />} {postDate && isNew(postDate) && <NewChip />} {updateDate && isNew(updateDate) && <UpdatedChip />}
		</>
	)
}
