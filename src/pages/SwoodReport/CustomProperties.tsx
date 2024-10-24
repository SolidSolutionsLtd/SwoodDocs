import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { ProChip } from '../../components/ProChip'
import { SwoodReportTag } from '../../components/NameTags'

const CustomProperties = () => {
	return (
		<>
			<PageTitle title="How to display SolidWorks custom properties in the report" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#CustomPropertyTypes">Types of custom properties</a>
					</li>
					<li>
						<a href="#CustomPropertyLevels">Levels of custom properties</a>
					</li>
					<li>
						<a href="#CustomPropertyCapture">Capturing a custom properties</a>
					</li>
					<li>
						<a href="#CustomPropertyDisplay">Displaying a custom property in the report</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The <SwoodReportTag /> enables users to display custom properties of models. These properties can originate from panels, programs, frames, or projects.
				</Typography>
			</Section>

			<Section id="CustomPropertyTypes" title="Types of custom properties">
				<Typography>
					The <SwoodReportTag /> allows users to display custom properties of models in the report, these properties can come from panels, programs, frames or projects.
				</Typography>
				<ul>
					<li>String: A property that contains text.</li>
					<li>Boolean: A property that can be either true or false.</li>
					<li>Real: A property representing a numeric value.</li>
					<li>Dimension: A property representing a dimension value.</li>
					<li>Integer: A property representing a whole number without decimals</li>
				</ul>
			</Section>
			<Section id="CustomPropertyLevels" title="Levels of custom properties">
				<Typography>Custom properties can be read from various levels of the project, including the top level, panels, hardware, and more. Refer to the list below for the different available levels:</Typography>
				<ul>
					<li>Project: Properties added to the top-level assembly (the one used to run the report).</li>
					<li>Panel/Part: Properties added at the panel or part level.</li>
					<li>
						Frame/Assembly: Properties added at the frame or assembly level.
						<ProChip />
					</li>
					<li>Hardware: Properties added to hardware components.</li>
				</ul>
			</Section>

			<Section id="CustomPropertyCapture" title="Capturing a custom property">
				<Typography>
					To capture properties for display in the report, navigate to the <span className="highlight">SwoodEditor</span> and go to <span className="param">Report &gt; Custom Properties</span>. This section includes various levels and a list of placeholder properties that can be populated.
				</Typography>

				<Typography>
					For example, to capture a <span className="highlight">String</span> property at the panel level, use the first available <span className="highlight">String</span> <span className="red">(1)</span> placeholder and note the <span className="highlight">Placeholder Name</span> <span className="red">(2)</span>. Continue adding the required properties, considering their types.
				</Typography>

				<ImageComponent source="./images/CustomPropertyDefinition.png" size="800px" />
			</Section>

			<Section id="CustomPropertyDisplay" title="Displaying a custom property in the report">
				<Typography>Captured properties can be displayed in various parts of the report, with a common example being a table column.</Typography>

				<Typography>
					In this case, we want to display the <span className="highlight">Part_STR_1</span> placeholder property in the panel's table. To do this, navigate to <span className="param">Report &gt; Panels</span>, click on <span className="highlight">Add Column</span> <span className="red">(1)</span>, and then define the property using the placeholder name <span className="red">(2)</span>.
				</Typography>

				<ImageComponent source="./images/CustomPropertyColumn.png" size="800px" />
			</Section>
		</>
	)
}

export default CustomProperties
