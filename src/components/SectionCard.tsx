import { Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { NewChip } from './NewChip'
import { isNew } from '../helper/dateHelper'

interface SectionProps {
	to?: string
	title: string
	postDate?: string
	content: React.ReactNode
}

export const SectionCard: React.FC<SectionProps> = ({ to, title, content, postDate }) => {
	return to ? (
		<NavLink to={to}>
			<Card sx={{ borderRadius: 2 }}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" marginTop="5px" color="primary">
							<strong>{title}</strong>
							{postDate && isNew(postDate, 60) && <NewChip />}
						</Typography>
						<Divider />
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</NavLink>
	) : (
		<Card sx={{ borderRadius: 2 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" marginTop="5px" color="primary">
						<strong>{title}</strong>
					</Typography>
					<Divider />
					<Typography variant="body2" sx={{ color: 'text.secondary' }}>
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
