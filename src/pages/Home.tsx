import { Box, Typography } from '@mui/material'
import { SectionDivider } from '../components/SectionDivider'

const Home = () => {
	return (
		// import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

		<Box sx={{ padding: '20px' }}>
			{/* Title */}
			<Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
				Welcome to the SwoodDocs!
			</Typography>

			{/* Introduction Text */}
			<Typography variant="body1" paragraph>
				This site is designed to be your comprehensive guide for all things SWOOD. Whether you're looking to optimize performance, navigate compatibility issues, or take full advantage of SWOOD's reporting and editing capabilities, we’ve gathered all the essential information to help you master your workflow.
			</Typography>

			{/* Section Heading */}
			<Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '30px' }}>
				Explore Key Sections:
			</Typography>

			<Typography variant="h6">SWOOD</Typography>
			<Typography>Discover best practices to enhance SWOOD performance, find solutions to compatibility issues, and explore tools like script parameters and tab resets.</Typography>

			<SectionDivider />

			{/* SWOOD Report Section */}
			<Typography variant="h6">SWOOD Report</Typography>
			<Typography>Learn how to effectively use SWOOD's reporting features, including working with extended material properties, and defining complex components like hardware or frames.</Typography>

			<SectionDivider />

			{/* SWOOD Editor Section */}
			<Typography variant="h6">SWOOD Editor</Typography>
			<Typography>Access essential licensing information and learn how to efficiently manage and back up your report settings.</Typography>

			<SectionDivider />
			{/* Closing Statement */}
			<Typography variant="body1" paragraph>
				Whether you're a seasoned professional or just getting started, this site provides the tools and knowledge to help you streamline your work, troubleshoot issues, and unlock the full potential of SWOOD.
			</Typography>
		</Box>
	)
}

export default Home
