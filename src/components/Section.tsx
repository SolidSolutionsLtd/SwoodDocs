import { Box } from '@mui/material'
import { SectionDivider } from './SectionDivider'
import { SectionTitle } from './SectionTitle'

interface SectionProps {
	title: string
	id: string
	children: React.ReactNode
	pro?: boolean
}

export const Section: React.FC<SectionProps> = ({ title, id, children, pro }) => {
	return (
		<>
			<SectionDivider />

			<Box id={id} sx={{ py: 3 }}>
				<SectionTitle title={title} pro={pro} />
				{children}
			</Box>
		</>
	)
}
