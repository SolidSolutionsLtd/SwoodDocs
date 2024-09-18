import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'
import { ProChip } from '../components/ProChip'

export const SaveToPDF = () => {
	return (
		<>
			<PageTitle title="Saving Drawings to PDF" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#AssociatedDrawings">Associated Drawings</a>
					</li>
					<li>
						<a href="#ActivatingProperties">Activating Custom Properties</a>
					</li>
					<li>
						<a href="#PDFSaved">Where Are the PDFs Saved?</a>
					</li>
					<li>
						<a href="#ReportLinks">
							Viewing the PDF Drawings in the Report <ProChip />
						</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Swood can automatically save the associated SolidWorks drawings of models as PDFs. This process is enabled by adding specific custom properties to the model and then running the Swood Report.</Typography>
			</Section>

			<Section id="AssociatedDrawings" title="What Is a SolidWorks Associated Drawing?">
				<Typography>Only SolidWorks associated drawings can be automatically saved as PDFs. To qualify as an associated drawing, a SolidWorks drawing must meet the following criteria:</Typography>
				<ul>
					<li>The drawing file name must match the model file name.</li>
					<li>The drawing must be saved in the same location as the model.</li>
				</ul>
			</Section>

			<Section id="ActivatingProperties" title="Activating Custom Properties">
				<Typography>By default, the option to save drawings as PDFs is disabled. Since generating PDFs can take extra time and might not be needed initially, users must add specific custom properties to the file where the report will be run to enable this feature.</Typography>
				<Typography>Add any of the following properties to enable the corresponding PDF generation:</Typography>
				<ul>
					<li>
						<span className="highlight">PDFProject = Yes</span> Saves the project's drawing.
					</li>
					<li>
						<span className="highlight">PDFFrames = Yes</span> Saves all frame drawings.
					</li>
					<li>
						<span className="highlight">PDFPanels = Yes</span> Saves all panel drawings.
					</li>
					<li>
						<span className="highlight">PDFHardware = Yes</span> Saves all hardware drawings.
					</li>
				</ul>
			</Section>

			<Section id="PDFSaved" title="Where Are the PDFs Saved?">
				<Typography>By default, PDFs are saved in the following locations, depending on the model type:</Typography>
				<ul>
					<li>
						<span className="highlight">Project</span>: &lt;REPORTPATH&gt;\PDF
					</li>
					<li>
						<span className="highlight">Frames</span>: &lt;REPORTPATH&gt;\PDF\Frames
					</li>
					<li>
						<span className="highlight">Panels</span>: &lt;REPORTPATH&gt;\PDF\Panels
					</li>
					<li>
						<span className="highlight">Hardware</span>: &lt;REPORTPATH&gt;\PDF\Hardware
					</li>
				</ul>
			</Section>

			<Section id="ReportLinks" title="Viewing the PDF Drawings in the Report" pro={true}>
				<Typography>
					In the<span className="highlight">Swood Report Pro</span>, you can view the saved PDF drawings by clicking the PDF icons.
				</Typography>
				<Typography>
					To display the PDF icons, use the <span className="highlight">Swood Editor</span> to add a column with the property <span className="highlight">PDFRelativePath</span>, as shown in the example below:
				</Typography>
				<Typography>This property can be added to the Frames, Panels, and Hardware tables.</Typography>
				<ImageComponent source="./images/PDFProperty.png" size="150px" />

				<Typography>If the report contains saved PDFs, it will display a column with the corresponding icons:</Typography>
				<ImageComponent source="./images/PDFColumn.png" size="250px" />
			</Section>
		</>
	)
}
