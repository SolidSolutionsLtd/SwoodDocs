import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SwoodReportTag } from '../../components/NameTags'

const ProjectName = () => {
	return (
		<>
			<PageTitle title="How to change the report project name" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#ProjectNameCustomProperty">Adding a custom project name property</a>
					</li>
					<li>
						<a href="#ProjectNameCustomDisplay">Displaying the project name</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					By default, the <SwoodReportTag /> uses the model's name as the project name. However, this can be changed to reference a custom property in the model.
				</Typography>
			</Section>

			<Section id="ProjectNameCustomProperty" title="Adding a custom project name property">
				<Typography>
					To specify a custom project name, add a custom property called <span className="highlight">Project Name</span> to the top-level assembly (the one used to generate the report).
					<ImageComponent source="./images/ProjectNameCustomProperty.png" size="600px" />
				</Typography>
			</Section>

			<Section id="ProjectNameCustomDisplay" title="Displaying the project name">
				<Typography>
					Once set, the <span className="highlight">Project Name</span> will appear at the top of the report and in the print header, as shown in the examples below.
				</Typography>
				<ImageComponent source="./images/ProjectNameReport.png" size="600px" />
				<ImageComponent source="./images/ProjectNamePrint.png" size="600px" />
			</Section>
		</>
	)
}

export default ProjectName
