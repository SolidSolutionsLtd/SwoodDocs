import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'

const ProjectQuantity = () => {
	return (
		<>
			<PageTitle title="How to Change the Report Project Quantity" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#ProjectQuantityCustomProperty">Adding a Project Quantity Property</a>
					</li>
					<li>
						<a href="#ProjectQuantityCustomDisplay">Displaying the Project Quantity</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Users can modify the Project Quantity by adding a custom property. Changing this value will cause the report to multiply all item quantities by the specified Project Quantity. This is especially useful when the same project needs to be accounted for multiple times.</Typography>
				<Typography>
					<span className="red">Note: This option is not recommended for nesting projects, as the nesting optimization will not account for the adjusted quantities.</span>
				</Typography>
			</Section>

			<Section id="ProjectQuantityCustomProperty" title="Adding a Project Quantity Property">
				<Typography>
					To define a project quantity, add a custom property named <span className="highlight">Project Quantity</span> to the top-level assembly (the one used to generate the report).
					<ImageComponent source="./images/ProjectQuantityCustomProperty.png" size="300px" />
				</Typography>
			</Section>

			<Section id="ProjectQuantityCustomDisplay" title="Displaying the Project Quantity">
				<Typography>
					Once set, the <span className="highlight">Project Quantity</span> will be shown on the report's home screen and will multiply all item quantities in the tables and on the <span className="highlight">Summary Page</span>.
				</Typography>
				<ImageComponent source="./images/ProjectQuantityHome.png" size="600px" />
				<ImageComponent source="./images/ProjectQuantityTable.png" size="300px" />
			</Section>
		</>
	)
}

export default ProjectQuantity