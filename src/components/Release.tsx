import { Box, Stack, Typography } from '@mui/material'
import { SectionDivider } from './SectionDivider'
import { SectionTitle } from './SectionTitle'
import { differenceInDays, parse } from 'date-fns'
import { NewChip } from './NewChip'

const isNew = (dateStr: string) => {
	const today = new Date()
	const parsedDate = parse(dateStr, 'dd/MM/yyyy', new Date())
	return differenceInDays(today, parsedDate) < 30
}

interface SectionProps {
	version: string
	ReleaseDate: string
	children: React.ReactNode
}

export const Release: React.FC<SectionProps> = ({ version, ReleaseDate, children }) => {
	return (
		<>
			<SectionDivider />

			<Box id={version} sx={{ py: 3 }}>
				<Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
					<SectionTitle title={'v' + version} />
					{ReleaseDate && isNew(ReleaseDate) && <NewChip big={true} />}
				</Stack>

				{ReleaseDate && <Typography className="Date">Release Date: {ReleaseDate}</Typography>}

				{children}
			</Box>
		</>
	)
}
