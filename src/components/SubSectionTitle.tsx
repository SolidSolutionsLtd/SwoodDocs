import { Stack, Typography } from '@mui/material'
import { ProChip } from './ProChip'

export const SubSectionTitle = ({ title, pro }: { title: string; pro?: boolean }) => {
	return (
		<Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: '10px' }}>
			<Typography variant="h6" style={{ fontWeight: 'bold' }}>
				{title}
			</Typography>
			{pro && <ProChip big={true} />}
		</Stack>
	)
}
