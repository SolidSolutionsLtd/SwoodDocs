import { Box, Stack, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const ReportPreviewLinks = () => {
	const handlePro = () => (window.location.href = 'https://solidsolutionsltd.github.io/SwoodReportProExample/')
	const handleStandard = () => (window.location.href = 'https://solidsolutionsltd.github.io/SwoodReportStandardExample/')

	return (
		<Stack my={5}>
			<Box display="flex" justifyContent="center" mb={1}>
				<Typography variant="h6">Explore the different report versions by clicking the buttons below</Typography>
			</Box>
			<Box display="flex" justifyContent="center">
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" onClick={handleStandard}>
						Preview Standard Report
					</Button>
					<Button variant="outlined" onClick={handlePro}>
						Preview Pro Report
					</Button>
				</Stack>
			</Box>
			<Box display="flex" justifyContent="center">
				<Typography color="textDisabled" variant="caption">
					* Report previews have been generated using the <NavLink to="/MergeReports">MergeReports</NavLink> option. Please note that this feature is only available in the Pro Report.
				</Typography>
			</Box>
		</Stack>
	)
}
