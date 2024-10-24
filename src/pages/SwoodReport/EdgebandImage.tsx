import { Box, Stack, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SwoodEditorTag, SwoodReportTag, SwoodTag } from '../../components/NameTags'
import { ImageComponent } from '../../components/ImageComponent'

const EdgebandImage = () => {
	return (
		<>
			<PageTitle title="Methods of displaying edgebands on images" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#standard">Standard method</a>
					</li>
					<li>
						<a href="#all-edgebands">All edgebands method</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodTag /> provides users with the ability to display edgebands on panel images, offering two distinct methods for customization. Each method has its own set of features, benefits, and potential limitations, making them suitable for different use cases.
				</Typography>
				<Typography>The following sections will explore these methods in greater detail, outlining their use cases, limitations, and examples of generated images to help you choose the most appropriate option for your needs.</Typography>
			</Section>

			<Section id="standard" title="Standard method">
				<Typography>
					This is the default approach used by <SwoodReportTag />, designed primarily for simple, rectangular panels. It allows users to showcase basic edge information, such as material, description or order. However, this method is best suited for straightforward designs where all edges are perpendicular, and the panels are uniformly shaped. It might not perform well with more complex or angled geometries. An example is shown below.
				</Typography>

				<Typography variant="h6">Rectangular Panel</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">SolidWorks Model</Typography>
					</Stack>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-standard-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">Generated Image</Typography>
					</Stack>
				</Box>

				<Typography variant="h6">Non-Rectangular Panel</Typography>
				<Typography>This method is not suitable for edgebands that are angled or curved. See the example below.</Typography>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-non-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">SolidWorks Model</Typography>
					</Stack>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-standard-non-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">Generated Image</Typography>
					</Stack>
				</Box>
			</Section>

			<Section id="all-edgebands" title="All edgebands method">
				<Typography>
					This alternative method expands on the capabilities of the standard approach. It can accommodate more complex designs, including angled and curved edgebands. Additionally, it adds a balloon with a leader line to display detailed information about each edgeband, making it easier to identify specific edges in more intricate panels. This method is versatile and provides a clearer visual representation for complex panel geometries but may introduce certain quirks or bugs under
					specific conditions. An example is shown below.
				</Typography>

				<Typography variant="h6">Rectangular Panel</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">SolidWorks Model</Typography>
					</Stack>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-alledgebands-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">Generated Image</Typography>
					</Stack>
				</Box>

				<Typography variant="h6">Non-Rectangular Panel</Typography>
				<Typography>This method is compatible with angled and curved edgebands, as demonstrated below.</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-non-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">SolidWorks Model</Typography>
					</Stack>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-alledgebands-non-rectangular.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">Generated Image</Typography>
					</Stack>
				</Box>

				<Typography variant="h6">Known Issues</Typography>
				<Typography>As of the current version, there is a known issue where edgeband balloons may not align correctly when the panel's length direction is not set to 0°. Refer to the example below:</Typography>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-non-rectangular-bug.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">SolidWorks Model</Typography>
					</Stack>

					<Stack spacing={0} alignItems="center">
						<ImageComponent source="./images/EB-alledgebands-non-rectangular-bug.png" size="400px" sx={{ paddingBottom: '5px' }} />
						<Typography color="textDisabled">Generated Image</Typography>
					</Stack>
				</Box>

				<Typography variant="h6">How to enable the all edgebands method</Typography>

				<Typography>
					To display all edgebands, open <SwoodEditorTag />, navigate to <span className="param">Images &gt; Panel Image</span>, then disable <span className="highlight">Edgeband Visible</span> and enable <span className="highlight">All Edgeband Visible</span>.
				</Typography>

				<ImageComponent source="./images/EB-enable-alledgebands.png" size="800px" />
			</Section>
		</>
	)
}

export default EdgebandImage
