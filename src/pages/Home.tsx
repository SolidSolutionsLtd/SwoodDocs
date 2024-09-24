import { Box, Typography } from '@mui/material'
import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { SectionCard } from '../components/SectionCard'

const Home = () => {
	return (
		// import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

		<Box sx={{ padding: '20px' }}>
			{/* Title */}
			<PageTitle title="Welcome to SwoodDocs!" />

			{/* Introduction Text */}
			<Typography>This site is designed to be your comprehensive guide for all things SWOOD. Whether you're looking to optimize performance or take full advantage of SWOOD's reporting capabilities, we’ve gathered all the essential information to help you master your workflow.</Typography>
			<Typography>Whether you're a seasoned professional or just getting started, this site provides the tools and knowledge to help you streamline your work, troubleshoot issues, and unlock the full potential of SWOOD.</Typography>

			<SectionDivider />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: 2,
					justifyContent: 'center',
				}}
			>
				<SectionCard to="/Swood" title="Swood" content="Discover best practices to enhance Swood performance, find how to gather support files with Swood RX and explore the script parameters." />

				<SectionCard to="/SwoodReport" title="Swood Report" content="Learn how to effectively use Swood's reporting features, including working with extended material properties, and defining complex components like hardware or frames." />

				<SectionCard to="/SwoodEditor" title="Swood Editor" content="Access essential licensing information and learn how to efficiently manage and back up your report settings." />

				<SectionCard to="/SwoodUtils" title="SwoodUtils" content="SwoodUtils streamlines the ID assignment process for panels and frames, providing a user-friendly interface." />
			</Box>
		</Box>
	)
}

export default Home
