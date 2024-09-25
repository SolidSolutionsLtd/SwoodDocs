import { ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'

const MergeReports = () => {
	return (
		<>
			<PageTitle title="How to Merge Nest and Design Reports" pro={true} beta={true} />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Workflow">Workflow</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>When using Swood Design and Swood Nesting, users must manage multiple assemblies: one or more design assemblies and the nesting assembly. This separation often leads to issues with reporting due to the division of data. For example, nesting projects may not include all project components (such as hardware) or information about the frames used. Conversely, design projects lack details about the nested sheets.</Typography>
			</Section>

			<Typography>Reports don’t directly access the SolidWorks model; they only consider the data that has been output. Therefore, if changes are made to the models, you will need to re-run the affected reports. Finally, re-run the nesting project to ensure the merge happens again.</Typography>

			<Section id="Workflow" title="Workflow">
				<Typography>To merge projects, follow the steps outlined below:</Typography>

				<ol>
					<li>Create Swood Design Projects.</li>
					<li>Generate Swood Design Project Reports.</li>
					<li>Create a Swood Nesting Project using the Swood Design Projects as source files.</li>
					<li>Generate the Swood Nesting Report.</li>
					<li>The Merged Report will automatically be generated after the Nesting Report is generated.</li>
				</ol>
				<ImageComponent source="./images/MergeReportWorkflow.png" size="600px" />
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Can I use a single source file for the Nesting project?" secondary="Yes, you can use any number of source files in the nesting project." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Where is the Merged Report saved?" secondary="The Merged Report is saved in the same directory as the Nested Report." />
				</ListItem>
				<ListItem>
					<ListItemText primary="What will be the name of the Merged Report?" secondary='The Merged Report will be automatically named "Merged - [Name of Nest Report]." This cannot be changed.' />
				</ListItem>
				<ListItem>
					<ListItemText primary="Why can I see other reports in the Merged Report folder?" secondary="These files are remnants of the merge process and are not required after the merge is completed." />
				</ListItem>
				<ListItem>
					<ListItemText primary="What should I do if any of the models change?" secondary="If a model changes, run the associated Design report and then the Nesting report to regenerate the Merged report." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge multiple Design projects without a Nest project?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge multiple Nest projects?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Are cutting patterns re-optimised in the Merged Report?" secondary="The Merged Report does not re-optimise cutting patterns from the Design projects. The original cutting patterns are retained, which may not be the most efficient solution." />
				</ListItem>
			</Section>
		</>
	)
}

export default MergeReports
