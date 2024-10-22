import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SolidWorksTag, SwoodCAMTag, SwoodDesignTag, SwoodTag } from '../../components/NameTags'

const SwoodTab = () => {
	return (
		<>
			<PageTitle title="Reset Swood tabs" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Reset">How to reset the Swood tabs</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					There may be occasions where the <SwoodTag /> Tabs in the <SolidWorksTag /> Command Manager gets scrambled or options might be missing. The best way to fix this issue is to recreate the <SwoodTag /> Tabs.
				</Typography>
			</Section>

			<Section id="Reset" title="How to reset the Swood tabs">
				<ol>
					<li>
						Open a part file in <SolidWorksTag />.
					</li>
					<li>
						Right click the <SolidWorksTag /> Command Manager and select <span className="highlight">Customize</span>.
					</li>
					<li>
						Delete the Swood Design and Cam Tabs by <span className="param">Right Click &gt; Delete</span>.
					</li>
					<ImageComponent source="./images/DeleteTabs.png" />

					<li>
						Add the <SwoodTag /> Tabs by clicking the <span className="highlight">New Tab</span> button and then select both <SwoodDesignTag /> and <SwoodCAMTag /> options.
					</li>
					<ImageComponent source="./images/AddTabs.png" />

					<li>Open an assembly part and repeat the same process</li>
				</ol>
			</Section>
		</>
	)
}

export default SwoodTab
