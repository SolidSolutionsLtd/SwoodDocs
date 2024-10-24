import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SolidWorksTag } from '../../components/NameTags'

const MaterialType = () => {
	return (
		<>
			<PageTitle title="Group by material type" pro={true} />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#ExtendedProperties">Creating the material type property</a>
					</li>
					<li>
						<a href="#Defining">How to define a material type</a>
					</li>
					<li>
						<a href="#DesignReport">Grouping by material type in the report</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					Materials can be grouped using the Material's Extended Custom Property <span className="highlight">Material Type</span>. This grouping provides a clearer breakdown of your panels in the report and summary.
				</Typography>
			</Section>
			<Section id="ExtendedProperties" title="Creating the material type property">
				<Typography>
					To create the <span className="highlight">Material Type</span> property, go to the <span className="highlight">Extended Properties</span> in the <span className="highlight">Swood Materials Library</span>. Create a new property by filling in the blank row in the Name column. The property should be a <span className="highlight">String</span> Type with a default value of <span className="highlight">Core</span>.
				</Typography>
				<Typography>
					Note that adding a Material Extended Property requires restarting <SolidWorksTag />.
				</Typography>
				<ImageComponent source="./images/Extended Properties.png" size="600px" />
			</Section>
			<Section id="Defining" title="How to define a Material Type">
				<Typography>
					To define the <span className="highlight">Material Type</span> of a specific material, you need to edit the material in your <span className="highlight">Material Library</span>. Scroll down to the <span className="highlight">Extended Properties</span> menu, tick the checkbox next to <span className="highlight">Material Type</span> and define your <span className="highlight">Material Type</span> name in the input field.
				</Typography>
				<Typography>
					To define the <span className="highlight">Material Type</span> for a specific material, edit the material in your <span className="highlight">Swood Materials Library</span>. Scroll down to the Extended Properties menu, check the box next to <span className="highlight">Material Type</span>, and enter your <span className="highlight">Material Type</span> name in the input field.
				</Typography>
				<Typography>
					Note that <span className="highlight">Material Type</span> names are case-sensitive
				</Typography>
				<ImageComponent source="./images/Materials Library.png" size="600px" />
			</Section>
			<Section id="DesignReport" title="Grouping by material type in the report">
				<Typography>
					When two or more <span className="highlight">Material Types</span> are present in the report, a toggle option will appear in the top right corner of the <span className="highlight">Panel</span> and <span className="highlight">Stock</span>. Using this toggle will group the panels by their corresponding <span className="highlight">Material Types</span>, as shown below.
				</Typography>
				<ImageComponent source="./images/Material Type Panels.png" size="800px" />
				<Typography>
					<span className="highlight">Material Types</span> also controls grouping on the <span className="highlight">Summary</span>, displaying the total costs for the different <span className="highlight">Material Types</span>.
				</Typography>
				<ImageComponent source="./images/Material Type Summary.png" size="800px" />
			</Section>
		</>
	)
}

export default MaterialType
