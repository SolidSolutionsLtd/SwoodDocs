import { Box } from '@mui/material'
import { SectionDivider } from './SectionDivider'
import { SubSectionTitle } from './SubSectionTitle'

interface SectionProps {
	title: string
	id: string
	children: React.ReactNode
	pro?: boolean
	divider?: boolean
}

export const SubSection: React.FC<SectionProps> = ({ title, id, children, pro, divider = true }) => {
	return (
		<>
			{divider && <SectionDivider margin={5} />}
			<Box id={id} sx={{ py: 3 }}>
				<SubSectionTitle title={title} pro={pro} />
				{children}
			</Box>
		</>
	)
}
