import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SwoodNestingTag } from '../../components/NameTags'

const NestedCuttingPattern = () => {
	return (
		<>
			<PageTitle title="Nested or beam sawed" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#CustomProperty">Defining the activating custom property</a>
					</li>
					<li>
						<a href="#PlaceholderProperty">Creating the activating property</a>
					</li>
					<li>
						<a href="#DisableCuttingPattern">Excluding panels from cutting pattern</a>
					</li>
					<li>
						<a href="#EnableNesting">Enabling panels in nesting</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					In some workflows, users may want to categorize panels into two main groups: Nested or Beam Sawed. Nested panels are processed using <SwoodNestingTag />, while Beam Sawed panels are optimized in the Cutting Pattern process.
				</Typography>

				<Typography>This behavior can be controlled by assigning a custom property to the model, which defines how the panels will be processed.</Typography>
			</Section>

			<Section id="CustomProperty" title="Defining the activating custom property">
				<Typography>
					Define the custom property that will control whether a panel is nested. For example, a property called <span className="highlight">Nested</span> could be used. If the property is set to "Yes" the panel will be nested; if set to "No" it will be sent to the Cutting Pattern.
				</Typography>
				<Typography>By default, if this property is not defined, the panel will be processed using the Cutting Pattern. This default behavior cannot be changed.</Typography>
			</Section>

			<Section id="PlaceholderProperty" title="Creating the activating property">
				<Typography>To define the property that enables nesting, follow these steps:</Typography>
				<ol>
					<li>
						Open <span className="highlight">SwoodEditor</span> and navigate to <span className="param">Report &gt; Custom Properties</span>.
					</li>
					<li>Create a new Panel Custom Property.</li>
					<li>
						Ensure the property type is set to <span className="highlight">Boolean</span>.
					</li>
					<li>
						Enter a name for the property, such as <span className="highlight">Nested</span>.
					</li>
					<li>
						Take note of the placeholder name, for example, <span className="highlight">Part_BOO_1</span>.
					</li>
				</ol>
				<ImageComponent source="./images/NestedOrBeamSawDefinePlaceholder.png" size="800px" />
			</Section>

			<Section id="DisableCuttingPattern" title="Excluding panels from cutting pattern">
				<Typography>By default, all panels are sent to the Cutting Pattern unless the custom property is set to "Yes" for nesting. Follow these steps to exclude panels from the Cutting Pattern:</Typography>
				<ol>
					<li>
						In <span className="highlight">SwoodEditor</span>, navigate to Cutting Pattern.
					</li>
					<li>
						Add the placeholder name to the <span className="highlight">Ignore Part Condition</span> field.
					</li>
					<li>Save your settings.</li>
				</ol>
				<ImageComponent source="./images/NestedOrBeamSawDisableCuttingPattern.png" size="800px" />
			</Section>

			<Section id="EnableNesting" title="Enabling panels in nesting">
				<Typography>Panels with the custom property set to "Yes" will be processed using nesting. To enable this, follow these steps:</Typography>
				<ol>
					<li>Open the SWOODCAM.cfg file in a text editor, located in the DAT folder.</li>
					<li>
						Find the <span className="highlight">CUSTOM PROPERTY ACTIVATION</span> field.
					</li>
					<li>
						Enter the custom property name, such as <span className="highlight">Nested</span>.
					</li>
					<li>
						Ensure there is no semicolon (;) before the <span className="highlight">CUSTOM PROPERTY ACTIVATION</span> entry. If present, remove it.
					</li>
				</ol>
				<ImageComponent source="./images/NestedOrBeamSawNestingActivate.png" size="400px" />
			</Section>
		</>
	)
}

export default NestedCuttingPattern
