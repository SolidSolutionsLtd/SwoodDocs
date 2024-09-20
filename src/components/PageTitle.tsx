import { Stack, Typography } from '@mui/material'
import { ProChip } from './ProChip'
import { BetaChip } from './BetaChip'

export const PageTitle = ({ title, pro, beta }: { title: string; pro?: boolean; beta?: boolean }) => {
	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Typography className="PageTitle" variant="h3" style={{ fontWeight: 'bold' }}>
					{title}
				</Typography>
				{pro && <ProChip big={true} />}
				{beta && <BetaChip big={true} />}
			</Stack>
		</>
	)
}
