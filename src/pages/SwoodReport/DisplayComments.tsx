import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SwoodTag } from '../../components/NameTags'
import { ImageComponent } from '../../components/ImageComponent'

const DisplayComments = () => {
	return (
		<>
			<PageTitle title="How to display comments in the report" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#types">Types of comments</a>
					</li>
					<li>
						<a href="#project">Project comments</a>
					</li>
					<li>
						<a href="#frame">Frame comments</a>
					</li>
					<li>
						<a href="#panel">Panel comments</a>
					</li>
					<li>
						<a href="#program">Program comments</a>
					</li>
					<li>
						<a href="#sheet">Sheet comments</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Adding comments to reports can be useful for communicating specific information about various elements. Comments can be applied to different components, such as the project, frames, panels, programs, and sheets, and will be displayed accordingly within the report. This guide will walk you through the different types of comments, how to add them, and where they appear in the report.</Typography>
			</Section>

			<Section id="types" title="Types of comments">
				<ul>
					<li>Project comments</li>
					<li>Frame comments</li>
					<li>Panel comments</li>
					<li>Program comments</li>
					<li>Sheet comments</li>
				</ul>
			</Section>

			<Section id="project" title="Project comments">
				<Typography>Project comments are assigned to the top-level assembly used to generate the report. These comments can be added either through a custom property or via the model's summary tab.</Typography>

				<ul>
					<li>Custom property</li>
					<Typography>
						Add the custom property <span className="highlight">Comments</span> and set its value.
					</Typography>
					<br />

					<li>Summary tab</li>
					<Typography>
						Open the document properties, navigate to the Summary tab, and enter your comment in the <span className="highlight">Comments</span> section. This method allows for multiline comments.
					</Typography>
					<br />
				</ul>

				<Typography variant="h6">Where are the comments displayed?</Typography>
				<Typography>By default, project comments are shown on the report's homepage. If both custom property and summary tab comments are used, the custom property comments are appended to the summary tab comments.</Typography>
			</Section>

			<Section id="frame" title="Frame comments">
				<Typography>Frame comments are assigned to frames and can be added via a custom property or the model's summary tab.</Typography>

				<ul>
					<li>Custom property</li>
					<Typography>
						Add the custom property <span className="highlight">Comments</span> and set its value.
					</Typography>
					<br />

					<li>Summary tab</li>
					<Typography>
						Open the document properties, navigate to the Summary tab, and enter your comment in the <span className="highlight">Comments</span> section. This method allows for multiline comments.
					</Typography>
					<br />
				</ul>

				<Typography variant="h6">Where are the comments displayed?</Typography>
				<Typography>
					Frame comments appear on the <span className="highlight">Frame Details</span> and <span className="highlight">Frame Detailed List</span> pages. You can also add a column to display the <span className="highlight">Comments</span> property. When both types of comments are used, the custom property comments are appended to the summary tab comments.
				</Typography>
			</Section>

			<Section id="panel" title="Panel comments">
				<Typography>Panel comments are assigned to panels and can be added through a custom property or the model's summary tab.</Typography>

				<ul>
					<li>Custom property</li>
					<Typography>
						Add the custom property <span className="highlight">Comments</span> and set its value.
					</Typography>
					<br />

					<li>Summary tab</li>
					<Typography>
						Open the document properties, navigate to the Summary tab, and enter your comment in the <span className="highlight">Comments</span> section. This method allows for multiline comments.
					</Typography>
					<br />
				</ul>

				<Typography variant="h6">Where are the comments displayed?</Typography>
				<Typography>
					Panel comments are displayed on the <span className="highlight">Panel Details</span> and <span className="highlight">Panel Detailed List</span> pages. You can also add a column to display the <span className="highlight">Comments</span> property. If both comment types are used, the custom property comments are appended to the summary tab comments.
				</Typography>
			</Section>

			<Section id="program" title="Program comments">
				<Typography>
					Program comments are added by modifying the <SwoodTag /> program settings as shown below:
				</Typography>

				<ImageComponent source="./images/ProgramComments.gif" size="600px" />

				<Typography variant="h6">Where are the comments displayed?</Typography>
				<Typography>
					Program comments are displayed on the <span className="highlight">Program Details</span> and <span className="highlight">Program Detailed List</span> pages. You can also add a column to display the <span className="highlight">Comments</span> property.
				</Typography>
			</Section>

			<Section id="sheet" title="Sheet comments">
				<Typography>
					Sheet comments are added to nested sheets by modifying the <SwoodTag /> program settings as shown below:
				</Typography>

				<ImageComponent source="./images/SheetComments.gif" size="600px" />

				<Typography variant="h6">Where are the comments displayed?</Typography>
				<Typography>
					Sheet comments appear on the <span className="highlight">Sheet Details</span> and <span className="highlight">Sheet Detailed List</span> pages. You can also add a column to display the <span className="highlight">Comments</span> property.
				</Typography>
			</Section>
		</>
	)
}

export default DisplayComments
