import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { ProChip } from '../../components/ProChip'
import { SolidWorksTag, SwoodEditorTag, SwoodReportProTag, SwoodReportTag, SwoodTag } from '../../components/NameTags'

const SaveToPDF = () => {
	return (
		<>
			<PageTitle title="Saving drawings to PDF" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#AssociatedDrawings">What is a SolidWorks associated drawing?</a>
					</li>
					<li>
						<a href="#ActivatingProperties">Activating custom properties</a>
					</li>
					<li>
						<a href="#PDFSaved">Where are the PDFs saved?</a>
					</li>
					<li>
						<a href="#ReportLinks">
							Viewing the PDF drawings in the report <ProChip />
						</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodTag /> can automatically save the associated <SolidWorksTag /> drawings of models as PDFs. This process is enabled by adding specific custom properties to the model and then running the <SwoodReportTag />.
				</Typography>
			</Section>

			<Section id="AssociatedDrawings" title="What is a SolidWorks associated drawing?">
				<Typography>
					Only <SolidWorksTag /> associated drawings can be automatically saved as PDFs. To qualify as an associated drawing, a <SolidWorksTag /> drawing must meet the following criteria:
				</Typography>
				<ul>
					<li>The drawing file name must match the model file name.</li>
					<li>The drawing must be saved in the same location as the model.</li>
				</ul>
			</Section>

			<Section id="ActivatingProperties" title="Activating custom properties">
				<Typography>By default, the option to save drawings as PDF is disabled. Since generating PDFs can take extra time and might not be needed initially, users must add specific custom properties to the file where the report will be run to enable this feature.</Typography>

				<Typography>
					Add any of the following custom properties to the <span className="highlight">top-level assembly</span> and set its value to <span className="highlight">Yes</span> to enable the corresponding PDF generation:
				</Typography>
				<ul>
					<li>
						<span className="highlight">PDFProject</span>: saves the project's drawing.
					</li>
					<li>
						<span className="highlight">PDFFrames</span>: saves all frame drawings.
					</li>
					<li>
						<span className="highlight">PDFPanels</span>: saves all panel drawings.
					</li>
					<li>
						<span className="highlight">PDFHardware</span>: saves all hardware drawings.
					</li>
				</ul>
			</Section>

			<Section id="PDFSaved" title="Where are the PDFs saved?">
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

			<Section id="ReportLinks" title="Viewing the PDF drawings in the report" pro={true}>
				<Typography>
					In the <SwoodReportProTag />, you can view the saved PDF drawings by clicking the PDF icons.
				</Typography>
				<Typography>
					To display the PDF icons, use the <SwoodEditorTag /> to add a column with the property <span className="highlight">PDFRelativePath</span>, as shown in the example below:
				</Typography>
				<Typography>This property can be added to the Frames, Panels, and Hardware tables.</Typography>
				<ImageComponent source="./images/PDFProperty.png" size="500px" />

				<Typography>If the report contains saved PDFs, it will display a column with the corresponding icons:</Typography>

				<ImageComponent source="./images/ReportPro/pdf-links.gif" size="800px" />
			</Section>
		</>
	)
}

export default SaveToPDF
