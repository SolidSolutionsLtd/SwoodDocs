import { Box, Stack, Button, Typography } from '@mui/material'
import { SwoodMergePostTag } from './NameTags'

export const ReportPreviewLinkPro = () => {
	const handlePro = () => (window.location.href = 'https://solidsolutionsltd.github.io/SwoodReportProExample/')

	return (
		<Stack my={5}>
			<Box display="flex" justifyContent="center" mb={1}>
				<Typography variant="h6">Explore the Swood Report Pro report versions by clicking the button below</Typography>
			</Box>
			<Box display="flex" justifyContent="center">
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" onClick={handlePro}>
						Preview Pro Report
					</Button>
				</Stack>
			</Box>
			<Box display="flex" justifyContent="center">
				<Typography color="textDisabled" variant="caption">
					* Report preview have been generated using the <SwoodMergePostTag /> option.
				</Typography>
			</Box>
		</Stack>
	)
}
