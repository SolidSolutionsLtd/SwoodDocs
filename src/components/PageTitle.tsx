import { Stack, Typography } from '@mui/material'
import { ProChip } from './ProChip'

export const PageTitle = ({ title, pro }: { title: string; pro?: boolean }) => {
	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Typography className="PageTitle" variant="h3" style={{ fontWeight: 'bold' }}>
					{title}
				</Typography>
				{pro && <ProChip big={true} />}
			</Stack>
		</>
	)
}
