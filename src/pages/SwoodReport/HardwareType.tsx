import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'

const HardwareType = () => {
	return (
		<>
			<PageTitle title="Group hardware by type" pro={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define a hardware type</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The report enables users to classify hardware components by <span className="highlight">Type</span>, providing a clearer breakdown by grouping different types into separate tables.
				</Typography>
			</Section>
			<Section id="Define" title="How to define a hardware type">
				<Typography>
					To define a Hardware Type, add the custom property <span className="red">Hardware Type</span> and set the value, such as, Handle, Connector, Hinge, Miscellaneous, etc.
				</Typography>
				<ImageComponent source="./images/HardwareTypeCustomProperty.png" size="600px" />
				<Typography>
					When Hardware Types are present in a project, you can use the <span className="highlight">Type</span> toggle to group the different hardware types into separate tables, as shown below.
				</Typography>
				<ImageComponent source="./images/HardwareType.png" size="1000px" />
			</Section>
		</>
	)
}

export default HardwareType
