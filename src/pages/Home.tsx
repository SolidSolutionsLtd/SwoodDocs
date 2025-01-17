/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Divider, Stack, Typography } from '@mui/material'
import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { SectionCard } from '../components/SectionCard'
import LatestSwoodDocs from '../components/LatestSwoodDocs'
import { SwoodEditorTag, SwoodMergeTag, SwoodReportsTag, SwoodRXTag, SwoodTag, SwoodUtilsTag } from '../components/NameTags'
import { Section } from '../components/Section'
import LatestNews from '../components/LatestNews'
import { LinkElement } from '../components/LinkElement'
import { LatestSwoodVersion } from '../components/LatestSwoodVersion'

const Home = () => {
	return (
		<Stack direction={'row'} divider={<Divider orientation="vertical" flexItem />} spacing={2}>
			<Box sx={{ padding: '20px' }}>
				<Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
					<PageTitle title="Welcome to SwoodDocs!" />
					{/* <Box
					sx={{
						position: 'absolute',
						top: -20,
						left: -17,
					}}
				>
					<img src={'./images/christmasHat.png'} style={{ width: '60px' }} />
				</Box> */}
				</Box>

				<Typography variant="subtitle1" color="textDisabled" sx={{ marginTop: '1px' }}>
					by Solid Solutions
				</Typography>
				{/* Introduction Text */}
				<Typography>
					This site is designed to be your comprehensive guide for all things <SwoodTag />. From optimizing performance to maximizing reporting capabilities, we've compiled all the essential information to help you master your workflow.
				</Typography>
				<Typography>
					Whether you're a seasoned professional or just getting started, this site provides the tools and knowledge to help you streamline your work, troubleshoot issues, and unlock the full potential of <SwoodTag />.
				</Typography>

				<Section id="Overview" title="⚠️ Important Notice">
					<Typography>
						<SwoodEditorTag /> versions v1.2.1 and earlier will no longer receive in-app update notifications. To ensure you have the latest version, please manually download it by following the steps <LinkElement to="/SwoodReportQuickStart">here</LinkElement>.
					</Typography>
				</Section>

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

					<SectionCard
						to="/SwoodMerge"
						title="SwoodMerge"
						postDate="10/01/2025"
						content={
							<>
								<SwoodMergeTag link={false} /> is a powerful and flexible tool designed to merge multiple <SwoodReportsTag /> into a single, cohesive output.
							</>
						}
					/>
					<SectionCard
						to="/SwoodMaterials"
						title="SwoodMaterials"
						postDate="10/01/2025"
						content={
							<>
								A tool designed to simplify the batch import of materials into the <SwoodTag /> materials library.
							</>
						}
					/>
				</Box>
			</Box>

			<Box sx={{ width: 500 }}>
				<LatestSwoodVersion />
				<LatestNews />
				<LatestSwoodDocs />
			</Box>
		</Stack>
	)
}

export default Home
