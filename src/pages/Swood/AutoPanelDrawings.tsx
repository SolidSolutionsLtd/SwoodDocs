import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SolidSolutionsTag, SwoodTag } from '../../components/NameTags'
import { ImageComponent } from '../../components/ImageComponent'

const AutoPanelDrawing = () => {
	return (
		<>
			<PageTitle title="How to automatically generate panel drawings" pro={true} beta={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
					<li>
						<a href="#DocumentSettings">Document settings</a>
					</li>
					<li>
						<a href="#PanelDrawingSettings">Panel drawing settings</a>
					</li>
					<li>
						<a href="#GrooveParameters">Groove parameters</a>
					</li>
					<li>
						<a href="#HoleParameters">Hole parameters</a>
					</li>
					<li>
						<a href="#EdgebandAndGrainDirectionParameters">Edgeband and grain direction parameters</a>
					</li>
					<li>
						<a href="#LayerParameters">Layer parameters</a>
					</li>
					<li>
						<a href="#SavingOptions">Saving options</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodTag /> provides a powerful feature that allows users to automatically generate panel drawings when running a report. This capability is particularly useful for streamlining the production process, ensuring that each panel has detailed and precise documentation without manual intervention.
				</Typography>
				<Typography>
					With automatic panel drawing generation, you can save considerable time and minimize errors by having <SwoodTag /> create consistent and accurate drawings for all panels in a project. This feature integrates seamlessly with SolidWorks, leveraging its drawing tools to produce high-quality, detailed illustrations of panels, complete with relevant information such as grooves, holes, edgebands, and grain direction.
				</Typography>
				<Typography>There are multiple configurations available to customize how drawings are generated, allowing you to:</Typography>
				<ul>
					<li>Generate individual drawings for each panel.</li>
					<li>Create a single drawing containing multiple sheets, one for each panel in the entire project.</li>
					<li>Produce drawings for assemblies or sub-assemblies that include all the panels, each represented on a separate sheet.</li>
				</ul>
				<Typography>
					Additionally, the generated drawings can include key dimensions, annotations, and other parameters to provide a complete reference for manufacturing. <SwoodTag /> also allows customization of view orientations, drawing settings, and even saving options for different formats like PDF, DXF, or DWG, making it adaptable to various production needs.
				</Typography>
				<Typography>This automated approach helps designers and manufacturers efficiently prepare documentation, ensuring the project flows smoothly from design to production, with clear and concise panel information readily available.</Typography>
				<Typography>
					See the example below for a panel drawing generated automatically by <SwoodTag />.
				</Typography>
				<ImageComponent source="./images/AutoPanelDrawing/AutoPanelDrawingExample.png" size="900px" />
			</Section>

			<Section id="Requirements" title="Requirements">
				<ol>
					<li>Swood 2022 SP0.0 or newer</li>
					<li>SolidWorks Drawing Template with the correct setup</li>
				</ol>
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Will generating automatic panel drawings increase the report generation time?" secondary="Yes, it will significantly increase the report generation time." />
				</ListItem>

				<ListItem>
					<ListItemText primary="Can I set up multiple document generations?" secondary="Yes, you can configure multiple documents to use different settings or drawing templates." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I set up automatic drawings with my custom drawing template?" secondary="Yes, but it requires some setup." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I automatically create an assembly drawing with a BOM along with drawings of all the panels?" secondary="Creating assembly drawings with a BOM is currently a limitation." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I define the order of the panel drawings?" secondary="Defining the order of panel drawings is not supported." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I generate drawings without running the report?" secondary="Generating drawings without running the report is currently a limitation." />
				</ListItem>
				<ListItem>
					<ListItemText primary="If I spot a mistake in a panel after running the report, can I regenerate the drawing for just that panel?" secondary="This feature is not available. You will need to rerun the report." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								Can <SolidSolutionsTag /> set up automatic panel drawings for me?
							</>
						}
						secondary={
							<>
								Yes, <SolidSolutionsTag /> can set up automatic panel drawings for you on a consultancy basis.
							</>
						}
					/>
				</ListItem>
			</Section>

			<Section id="DocumentSettings" title="Document settings">
				<ListItem>
					<ListItemText primary="AutoDrawing Document" secondary="AutoDrawing setup name." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Process On" secondary="The document generation can be set based on the selected option:" />
				</ListItem>
				<Box sx={{ marginLeft: 5 }}>
					<ListItem>
						<ListItemText primary="Process on Panel" secondary="Generates one drawing per panel." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Process on Report" secondary="Generates a single drawing for the entire report, with one sheet per panel." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Process on Assembly" secondary="Generates one drawing for each assembly or sub-assembly containing panels, with one sheet per panel." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Process on Typed Object" secondary="Generates one drawing per typed object containing panels, with one sheet per panel." />
					</ListItem>
				</Box>
				<ListItem>
					<ListItemText primary="Condition" secondary="Condition that triggers the automatic panel generation. default is 'TRUE'" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Drawing Template Path" secondary="Path to the drawing template. It must be saved inside the DAT folder." />
				</ListItem>
			</Section>

			<Section id="PanelDrawingSettings" title="Panel drawing settings">
				<ListItem>
					<ListItemText
						primary="Redefine Panel Orientation"
						secondary={
							<>
								Allows <SwoodTag /> to redefine the front view to align with the panel's Z-axis. This change is made only if necessary, and affected panels will require saving the project.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Origin Position" secondary="Specifies the origin for panel dimensions." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Panel Dimensions" secondary="Show or hide the panel's main dimensions in the drawing." />
				</ListItem>
				<ListItem>
					<ListItemText primary="View for Thickness Dimension" secondary="Specifies the view to display the thickness dimension." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Delete Views without Dimensions" secondary="Option to remove views without any dimensions." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show These Views Without Dimensions" secondary="Forces specified views to be displayed without dimensions." />
				</ListItem>
			</Section>

			<Section id="GrooveParameters" title="Groove parameters">
				<ListItem>
					<ListItemText primary="Show Groove Dimensions" secondary="Show or hide groove width and depth." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Max Width of Grooves to Dimension" secondary="Sets the maximum groove width beyond which dimensions are hidden." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Horizontal Grooves" secondary="Show or hide grooves along the X-axis." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Vertical Grooves" secondary="Show or hide grooves along the Y-axis." />
				</ListItem>
			</Section>

			<Section id="HoleParameters" title="Hole parameters">
				<ListItem>
					<ListItemText primary="Show Hole Tables" secondary="Show or hide the list of panel holes in a table." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Ordinate Dimensions" secondary="Show or hide ordinate dimensions instead of regular dimensions." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Include Arc Holes" secondary="Include or exclude arc-based holes." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Arc Min Angle" secondary="Sets the minimum angle for arc holes." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Main View" secondary="Specifies the view that contains most hole information." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Hole Table Anchor" secondary="Corner of the drawing template used to position the hole table." />
				</ListItem>
			</Section>

			<Section id="EdgebandAndGrainDirectionParameters" title="Edgeband and grain direction parameters">
				<ListItem>
					<ListItemText primary="Show Grain" secondary="Show or hide the grain direction of the panel." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Edgebands" secondary="Show or hide the panel edgebands." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Edgeband Table" secondary="Show or hide the list of edgebands in a table." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Edgeband Order" secondary="Show or hide the order of edgebands in the view." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Show Edgeband Reference" secondary="Show or hide edgeband references in the view." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Edgeband Table Anchor" secondary="Corner of the drawing template used to position the edgeband table." />
				</ListItem>
				<ListItem>
					<ListItemText primary="View for Edgebands and Grain Direction" secondary="Specifies the view to display edgeband and grain direction information." />
				</ListItem>
			</Section>

			<Section id="LayerParameters" title="Layer parameters">
				<ListItem>
					<ListItemText primary="Hole Annotation Layer Name" secondary="Name of the drawing layer displaying hole information." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Tables Layer Name" secondary="Name of the drawing layer displaying tables." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Dimensions Layer Name" secondary="Name of the drawing layer displaying dimensions." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Ordinates Layer Name" secondary="Name of the drawing layer displaying ordinate dimensions." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Edgeband and Grain Layer Name" secondary="Name of the drawing layer displaying edgebands and grain direction." />
				</ListItem>
			</Section>

			<Section id="SavingOptions" title="Saving options">
				<ListItem>
					<ListItemText primary="Save Drawing Document" secondary="Option to save the .slddrw file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Save PDF Document" secondary="Option to save the PDF file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="PDF Path" secondary="Path to save the PDF file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Save DXF Document" secondary="Option to save the DXF file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="DXF Path" secondary="Path to save the DXF file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Save DWG Document" secondary="Option to save the DWG file." />
				</ListItem>
				<ListItem>
					<ListItemText primary="DWG Path" secondary="Path to save the DWG file." />
				</ListItem>
			</Section>
		</>
	)
}

export default AutoPanelDrawing
