import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SwoodEditorTag } from '../../components/NameTags'

const CuttingPattern = () => {
	return (
		<>
			<PageTitle title="Cutting Patterns" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Define">How to generate a cutting pattern</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The report allows users to generate <span className="highlight">Cutting Patterns</span> for panels made of specific materials. This feature is designed for Beam Saw optimization but can also be used to estimate the number of boards required for a project.
				</Typography>
			</Section>

			<Section id="Requirements" title="Requirements">
				<ul>
					<li>Swood Design</li>
					<li>Swood 2024 SP0.0</li>
					<li>Report v2.10.0</li>
				</ul>
			</Section>

			<Section id="Define" title="How to generate a cutting pattern">
				<Typography>
					To generate a <span className="highlight">Cutting Pattern</span>, start by enabling the option in the <SwoodEditorTag /> as seen below.
				</Typography>
				<ImageComponent source="./images/CuttingPatternEnable.png" size="800px" />

				<Typography>
					Then, define a board in the <span className="highlight">Board Library</span> for all materials you which to send to the <span className="highlight">Cutting Pattern</span> and enable <span className="highlight">For Board Estimation</span>.
				</Typography>
				<ImageComponent source="./images/CuttingPatternBoard.png" size="600px" />
			</Section>
		</>
	)
}
export default CuttingPattern
