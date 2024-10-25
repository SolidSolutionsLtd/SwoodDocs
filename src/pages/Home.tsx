import { Box, Typography } from '@mui/material'
import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { SectionCard } from '../components/SectionCard'
import LatestSwoodDocs from '../components/LatestSwoodDocs'
import { SwoodRXTag, SwoodTag, SwoodUtilsTag } from '../components/NameTags'

const Home = () => {
	return (
		<Box sx={{ padding: '20px' }}>
			<PageTitle title="Welcome to SwoodDocs!" />
			<Typography variant="subtitle1" color="textDisabled" sx={{ marginTop: '1px' }}>
				by Solid Solutions
			</Typography>
			{/* Introduction Text */}
			<Typography>
				This site is designed to be your comprehensive guide for all things <SwoodTag />. Whether you're looking to optimize performance or take full advantage of <SwoodTag />
				's reporting capabilities, we’ve gathered all the essential information to help you master your workflow.
			</Typography>
			<Typography>
				Whether you're a seasoned professional or just getting started, this site provides the tools and knowledge to help you streamline your work, troubleshoot issues, and unlock the full potential of <SwoodTag />.
			</Typography>

			<LatestSwoodDocs />

			<SectionDivider />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: 2,
					justifyContent: 'center',
				}}
			>
				<SectionCard
					to="/Swood"
					title="Swood"
					content={
						<>
							Discover best practices to enhance <SwoodTag /> performance, find how to gather support files with <SwoodRXTag /> and explore the script parameters.
						</>
					}
				/>

				<SectionCard
					to="/SwoodReport"
					title="SwoodReport"
					content={
						<>
							Learn how to effectively use <SwoodTag />
							's reporting features, including working with extended material properties, and defining complex components like hardware or frames.
						</>
					}
				/>

				<SectionCard to="/SwoodEditor" title="SwoodEditor" content="Access essential licensing information and learn how to efficiently manage and back up your report settings." />

				<SectionCard
					to="/SwoodUtils"
					title="SwoodUtils"
					content={
						<>
							<SwoodUtilsTag /> streamlines the ID assignment process for panels and frames, providing a user-friendly interface.
						</>
					}
				/>
			</Box>
		</Box>
	)
}

export default Home
