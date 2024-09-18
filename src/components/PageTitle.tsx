import { Stack, Typography } from '@mui/material'
import { HomeButton } from './HomeButton'
import { ScrollToTopButton } from './ScrollToTopButton'
import { ProChip } from './ProChip'

export const PageTitle = ({ title, pro }: { title: string; pro?: boolean }) => {
	return (
		<>
			<ScrollToTopButton />
			<Stack direction="row" alignItems="center" spacing={2}>
				<HomeButton />
				<Typography variant="h3" style={{ fontWeight: 'bold' }}>
					{title}
					{pro && <ProChip big={true} />}
				</Typography>
			</Stack>
		</>
	)
}
