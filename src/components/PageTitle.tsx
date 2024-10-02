import { Stack, Typography } from '@mui/material'
import { ProChip } from './ProChip'
import { BetaChip } from './BetaChip'
import { PremiumChip } from './PremiumChip'
import { useEffect } from 'react'

export const PageTitle = ({ title, pro, premium, beta }: { title: string; pro?: boolean; premium?: boolean; beta?: boolean }) => {
	useEffect(() => {
		document.title = title
	})

	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Typography className="PageTitle" variant="h3" style={{ fontWeight: 'bold' }}>
					{title}
				</Typography>
				{pro && <ProChip big={true} />}
				{premium && <PremiumChip big={true} />}
				{beta && <BetaChip big={true} />}
			</Stack>
		</>
	)
}
