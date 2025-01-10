import { Typography } from '@mui/material'
import { SwoodCompatibilityData } from '../data/compatibility'
import { isNew } from '../helper/dateHelper'
import { NewChip } from './NewChip'
import { SubSection } from './SubSection'

export const LatestSwoodVersion = () => {
	return (
		<>
			<SubSection id="latest-swood-version" title="Latest Swood version" divider={false}>
				<Typography>
					Swood {SwoodCompatibilityData[0].SwoodVersion}
					{isNew(SwoodCompatibilityData[0].ReleaseDate, 60) && <NewChip />}
				</Typography>

				<Typography variant="caption" color="textDisabled">
					Release date: {SwoodCompatibilityData[0].ReleaseDate}
				</Typography>
			</SubSection>
		</>
	)
}
