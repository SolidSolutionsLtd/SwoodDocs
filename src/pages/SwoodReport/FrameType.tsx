import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'

const FrameType = () => {
	return (
		<>
			<PageTitle title="Group frames by type" pro={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define a Frames Type</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The report enables users to classify Frames components by <span className="highlight">Type</span>, providing a clearer breakdown by grouping different types into separate tables.
				</Typography>
			</Section>
			<Section id="Define" title="How to define a Frames Type">
				<Typography>
					To define a Frames Type, add the custom property <span className="red">Frames Type</span> and set the value, such as, Floor Cabinets, Wall Cabinets, etc.
				</Typography>
				<ImageComponent source="./images/FrameTypeCustomProperty.png" size="600px" />
				<Typography>
					When Frames Types are present in a project, you can use the <span className="highlight">Type</span> toggle to group the different Frames types into separate tables, as shown below.
				</Typography>
				<ImageComponent source="./images/FrameType.png" size="800px" />
			</Section>
		</>
	)
}

export default FrameType
