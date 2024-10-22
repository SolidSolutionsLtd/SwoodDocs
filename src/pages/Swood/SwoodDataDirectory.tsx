import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SolidWorksTag, SwoodDataDirectoryTag, SwoodTag } from '../../components/NameTags'

const SwoodDataDirectory = () => {
	return (
		<>
			<PageTitle title="Swood data directory" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#FindSDD">How to find your Swood data directory</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography variant="body1">
					The <SwoodDataDirectoryTag /> contains the libraries (Materials, Frames, SwoodBoxes, Connectors, etc.) as well as the report files used by <SwoodTag />.
				</Typography>
				<Typography variant="body1">Note that this location is customizable and can be defined locally or pointed to a mapped server directory.</Typography>
			</Section>

			<Section id="FindSDD" title="How to find your Swood data directory">
				<Typography>
					You can find the location of the <SwoodDataDirectoryTag /> by opening <SolidWorksTag />, then using the top menu to navigate to <span className="param">Tools &gt; SWOOD Design &gt; Settings</span>.
				</Typography>
				<Typography>
					Please make sure to restart <SolidWorksTag /> if the <SwoodDataDirectoryTag /> is changed.
				</Typography>
				<ImageComponent source="./images/Setup1.png" />
			</Section>
		</>
	)
}

export default SwoodDataDirectory
