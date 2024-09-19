import { Stack, Typography } from '@mui/material'
import { ProChip } from './ProChip'

export const SectionTitle = ({ title, pro }: { title: string; pro?: boolean }) => {
	return (
		<Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
			<Typography variant="h4" style={{ fontWeight: 'bold' }}>
				{title}
			</Typography>
			{pro && <ProChip big={true} />}
		</Stack>
	)
}
