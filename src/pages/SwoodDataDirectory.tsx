import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'

const SwoodDataDirectory = () => {
	return (
		<>
			<PageTitle title="Swood Data Directory" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#FindSDD">How to Find Your Swood Data Directory</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography variant="body1">
					The <span className="highlight">Swood Data Directory</span> contains the libraries (Materials, Frames, SwoodBoxes, Connectors, etc.) as well as the report files used by Swood.
				</Typography>
				<Typography variant="body1">Note that this location is customizable and can be defined locally or pointed to a mapped server directory.</Typography>
			</Section>

			<Section id="FindSDD" title="How to Find Your Swood Data Directory">
				<Typography>
					You can find the location of the <span className="highlight">Swood Data Directory</span> by opening SolidWorks, then using the top menu to navigate to <span className="param">Tools &gt; SWOOD Design &gt; Settings</span>.
				</Typography>
				<Typography>
					Please make sure to restart SolidWorks if the <span className="highlight">Swood Data Directory</span> is changed.
				</Typography>
				<ImageComponent source="./images/Setup1.png" />
			</Section>
		</>
	)
}

export default SwoodDataDirectory
