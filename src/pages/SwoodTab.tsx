import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'

const SwoodTab = () => {
	return (
		<>
			<PageTitle title="Reset Swood Tabs" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Reset">How to Reset the Swood Tabs</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>There may be occasions where the Swood Tabs in the SolidWorks Command Manager gets scrambled or options might be missing. The best way to fix this issue is to recreate the Swood Tabs.</Typography>
			</Section>

			<Section id="Reset" title="How to Reset the Swood Tabs">
				<ol>
					<li>Open a part file in Solidworks.</li>
					<li>
						Right click the SolidWorks Command Manager and select <span className="highlight">Customize</span>.
					</li>
					<li>
						Delete the Swood Design and Cam Tabs by <span className="param">Right Click &gt; Delete</span>.
					</li>
					<ImageComponent source="./images/DeleteTabs.png" />

					<li>
						Add the Swood Tabs by clicking the <span className="highlight">New Tab</span> button and then select both Swood Design and Swood Cam options.
					</li>
					<ImageComponent source="./images/AddTabs.png" />

					<li>Open an assembly part and repeat the same process</li>
				</ol>
			</Section>
		</>
	)
}

export default SwoodTab
