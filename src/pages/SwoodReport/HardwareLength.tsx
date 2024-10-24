import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'

const HardwareLength = () => {
	return (
		<>
			<PageTitle title="Hardware length" />
			<h1>Hardware Length</h1>
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to display the hardware length custom property</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The report provides functionality for displaying the <span className="highlight">Length</span> custom property of hardware components. This feature is particularly useful for items such as hanging rails where the length may vary between projects.
				</Typography>
			</Section>
			<Section id="Define" title="How to display the hardware length custom property">
				<Typography>The report will automatically append the Hardware Length custom property to the Name property. To ensure this works correctly, the Length custom property must be properly linked to the length dimension of the model. For instance, in the example below, the Length custom property is linked to a sketch dimension set to 500.</Typography>
				<ImageComponent source="./images/HardwareLengthCustomProperty.png" size="600px" />
				<Typography>
					When a hardware component has a Length custom property, the report will automatically include this value in the <span className="highlight">Name</span> property, as demonstrated below.
				</Typography>
				<ImageComponent source="./images/HardwareLengthTable.png" size="150px" />
			</Section>
		</>
	)
}

export default HardwareLength
