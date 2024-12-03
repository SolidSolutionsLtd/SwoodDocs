import { Box, Stack, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SwoodReportProTag, SwoodUtilsTag } from '../../components/NameTags'
import { ImageComponent } from '../../components/ImageComponent'

const SwoodReportPro = () => {
	return (
		<>
			<PageTitle title="Explore the benefits of SwoodReport Pro" pro />

			<nav>
				<ul>
					<li>
						<a href="#overview">Overview</a>
					</li>
					<li>
						<a href="#table-functions">Enhanced table functionality</a>
						<ul>
							<li>
								<a href="#table-search">Searchable & sortable tables</a>
							</li>
							<li>
								<a href="#table-print">Print grouped or filtered tables</a>
							</li>
							<li>
								<a href="#table-excel">Save tables as excel</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#table-group">Grouped tables</a>
						<ul>
							<li>
								<a href="#table-group-panel">Grouped panel table</a>
							</li>
							<li>
								<a href="#table-group-program">Grouped program table</a>
							</li>
							<li>
								<a href="#table-group-hardware">Grouped hardware table</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#projects-page">Projects page</a>
					</li>
					<li>
						<a href="#frame">Classify assemblies as Frames</a>
						<ul>
							<li>
								<a href="#frame-list">Frames list</a>
							</li>
							<li>
								<a href="#frame-detail">Frame detail page</a>
							</li>
							<li>
								<a href="#frame-labels">Frame labels</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#3d-models">3D models</a>
						<ul>
							<li>
								<a href="#3d-models-panels">3D panels</a>
							</li>
							<li>
								<a href="#3d-sheet-models">3D sheets</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#print-full-report">Print full report functionality</a>
					</li>
					<li>
						<a href="#pdf-links">Links to PDF documents</a>
					</li>
					<li>
						<a href="#additional-properties">Additional properties</a>
					</li>
					<li>
						<a href="#program-beam-saw">Program & beam saw indicator</a>
					</li>
					<li>
						<a href="#combine-panels">Combine panels</a>
					</li>
					<li>
						<a href="#combine-stocks">Combine stocks</a>
					</li>
					<li>
						<a href="#qr-codes">Label QR codes</a>
					</li>
					<li>
						<a href="#concatenate-evaluate">Concatenate/evaluate properties</a>
					</li>
					<li>
						<a href="#automatic-ids">Automatic panel IDs</a>
					</li>
					<li>
						<a href="#swoodutils">Access to SwoodUtils</a>
					</li>
					<li>
						<a href="#beam-saw">Classify panels as beam saw</a>
						<ul>
							<li>
								<a href="#beam-saw-list">Beam saw list</a>
							</li>
							<li>
								<a href="#beam-saw-labels">Beam saw labels</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#weldments-page">Weldments page</a>
					</li>
					<li>
						<a href="#navigation-arrows">Next & previous arrows in detailed pages</a>
					</li>

					<li>
						<a href="#tick-icons">Tick icons on tables</a>
					</li>

					<li>
						<a href="#next-steps">Next Steps</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The <SwoodReportProTag /> significantly enhances the functionality of the base report, providing advanced tools tailored for effective project management and reporting in woodworking.
				</Typography>
				<Typography>
					With features like <strong>searchable and sortable tables</strong>, you can quickly access the information you need, saving valuable time and improving decision-making. The ability to <strong>print grouped or filtered tables</strong> allows you to present data clearly, whether for team discussions or client meetings.
				</Typography>
				<Typography>Additional functionalities, such as 3D modeling of panels and sheets, enable better visualization of your projects, helping you and your team understand complex assemblies at a glance. Enhanced capabilities for grouping materials and hardware ensure optimized resource management, allowing for a smooth workflow.</Typography>
				<Typography>Crucially, this upgraded reporting system facilitates improved communication with the shop floor. By providing clear, organized reports, you can ensure that your team on the floor has the precise information they need to execute tasks efficiently and accurately.</Typography>
				<Typography>
					Upgrading to <SwoodReportProTag /> equips you with the tools necessary for better organization, enhanced clarity, and more effective communication throughout your project lifecycle.
				</Typography>
				<Typography>Explore the sections below to uncover additional benefits and discover how this system can elevate your reporting and project management experience.</Typography>
			</Section>

			<Section id="table-functions" title="Enhanced table functionality">
				<Typography id="table-search" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Searchable & sortable tables
				</Typography>
				<Typography>Streamline your workflow with tables that allow for efficient searching and sorting. Quickly locate specific items, enhancing your productivity and reducing the time spent sifting through information.</Typography>
				<ImageComponent source="./images/ReportPro/search-sort.gif" size="1000px" />

				<Typography id="table-print" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Print grouped or filtered tables
				</Typography>
				<Typography>Easily print tables tailored to your needs. Whether you require a complete overview or filtered data, this functionality provides flexibility, ensuring you have the necessary information at hand., ready for supplier or the shop floor.</Typography>
				<ImageComponent source="./images/ReportPro/group-table.gif" size="1000px" />

				<Typography id="table-excel" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Save tables as excel
				</Typography>
				<Typography>Export your data effortlessly by saving tables as Excel files. This feature allows for seamless integration with other tools, enabling further analysis and manipulation of your data in a familiar environment.</Typography>
				<ImageComponent source="./images/ReportPro/excel-table.gif" size="1000px" />
			</Section>

			<Section id="table-group" title="Grouped tables">
				<Typography id="table-group-panel" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Grouped panel table
				</Typography>
				<Typography>
					Quickly separate panels into distinct groups, <span className="highlight">Frames</span> and <span className="highlight">Material Type</span>. This feature is invaluable when dealing with specific materials and ensures accuracy in reporting.
				</Typography>
				<ImageComponent source="./images/ReportPro/group-table-2.gif" size="1000px" />

				<Typography id="table-group-program" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Grouped program table
				</Typography>
				<Typography>Organize program lists by machines of frames to ensure efficient production planning. This capability aids in identifying machine requirements, optimizing workflows, and improving overall productivity.</Typography>
				<ImageComponent source="./images/ReportPro/group-programs.gif" size="1000px" />

				<Typography id="table-group-hardware" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Grouped hardware table
				</Typography>
				<Typography>Group hardware components by type for better organization and efficiency in managing inventory and project requirements. This feature simplifies resource allocation and planning.</Typography>
				<ImageComponent source="./images/ReportPro/group-hardware.gif" size="1000px" />
			</Section>

			<Section id="projects-page" title="Projects page">
				<Typography>Gain a comprehensive view of all your projects in one centralized page, facilitating better project management and oversight.</Typography>
				<ImageComponent source="./images/ReportPro/projects-page.png" size="800px" />
			</Section>

			<Section id="frame" title="Classify assemblies as Frames">
				<Typography id="frame-list" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Frames list
				</Typography>
				<Typography>Classify assemblies as frames to generate a comprehensive list, complete with detailed information. This feature enhances project organization, making it easier to manage complex assemblies.</Typography>
				<ImageComponent source="./images/ReportPro/frame-list.png" size="1200px" />

				<Typography id="frame-detail" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Frame details page
				</Typography>
				<Typography>Dive deep into frame specifications with a dedicated detail page. Access essential information about panels, hardware, and programs within each frame, facilitating informed decision-making and project management.</Typography>
				<ImageComponent source="./images/ReportPro/frame-details.png" size="800px" />

				<Typography id="frame-labels" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Frame labels
				</Typography>
				<Typography>Generate accurate labels for frames effortlessly. This functionality aids in identification and organization, ensuring that components are easily traceable throughout the production process.</Typography>
				<ImageComponent source="./images/ReportPro/frame-labels.png" size="800px" />
			</Section>

			<Section id="3d-models" title="3D models">
				<Typography id="3d-models-panels" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Panels
				</Typography>
				<Typography>Visualize panels in 3D, facilitating a better understanding of dimensions and configurations. This feature enhances project planning and ensures accuracy in production.</Typography>
				<ImageComponent source="./images/ReportPro/3d-panel.gif" size="800px" />

				<Typography id="3d-models-sheets" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Sheets
				</Typography>
				<Typography>Access detailed 3D representations of sheets, improving clarity in assembly processes and facilitating easier communication among team members.</Typography>
				<ImageComponent source="./images/ReportPro/3d-sheet.gif" size="800px" />
			</Section>

			<Section id="print-full-report" title="Print full report functionality">
				<Typography>Print all pages of the report at once, with predefined options for pages and quantities. This capability saves time and ensures comprehensive documentation is readily available.</Typography>
				<ImageComponent source="./images/ReportPro/print-report.gif" size="1200px" />
			</Section>

			<Section id="pdf-links" title="Links to PDF documents">
				<Typography>Integrate links to relevant PDF documents directly within your reports, improving accessibility to important resources and enhancing the overall functionality of your reports.</Typography>
				<ImageComponent source="./images/ReportPro/pdf-links.gif" size="800px" />
			</Section>

			<Section id="additional-properties" title="Additional Properties">
				<Typography>Enhance the depth of information in your reports by accessing and displaying additional properties for each item, improving clarity and communication with team members.</Typography>
				<Typography>For instance, panels include additional properties related to edgebands.</Typography>
				<Typography>Using the panel from the image as an example, the following additional properties can be displayed on tables or labels:</Typography>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: 2,
						justifyContent: 'center',
					}}
				>
					<Stack spacing={0} alignItems="center">
						<ul>
							<Typography sx={{ mt: 5 }}>
								<span className="highlight">EBString</span>: 2L 2S
							</Typography>
							<Typography color="textDisabled">Summarizes the edgebands and indicates whether they are placed on the long or short edges of the panel.</Typography>
							<Typography sx={{ mt: 5 }}>
								<span className="highlight">EBStringOrder</span>: 1S 2L 1S
							</Typography>
							<Typography color="textDisabled">Lists the edgebands in the order of placement, specifying their position on the long or short edges of the panel.</Typography>
							<Typography sx={{ mt: 5 }}>
								<span className="highlight">EdgingListString</span>: Red, Blue, Green
							</Typography>
							<Typography color="textDisabled">Provides a summary of the edgeband materials, separated by commas.</Typography>
						</ul>
					</Stack>
					<ImageComponent source="./images/ReportPro/additional-properties.png" size="300px" />
				</Box>
			</Section>

			<Section id="program-beam-saw" title="Program & beam saw indicator">
				<Typography>Quickly identify which panels contain programs or have been classified for beam saw processing. This indicator streamlines workflow planning, helping to avoid confusion and ensure the correct panels are prioritized.</Typography>
			</Section>

			<Section id="combine-panels" title="Combine panels">
				<Typography>Reduce redundancy by combining identical panels, simplifying your reports and reducing clutter.</Typography>
				<ImageComponent source="./images/ReportPro/combine-panels.gif" size="1200px" />
			</Section>

			<Section id="combine-stocks" title="Combine stocks">
				<Typography>Streamline the cutting list by combining stocks with the same overall dimensions.</Typography>
			</Section>

			<Section id="qr-codes" title="Label QR codes">
				<Typography>Generate QR codes for labels to streamline tracking and identification. This feature enhances efficiency in the production process and improves traceability.</Typography>
				<ImageComponent source="./images/ReportPro/label-qrcodes.png" size="800px" />
			</Section>

			<Section id="concatenate-evaluate" title="Concatenate/evaluate properties">
				<Typography>Generate custom properties by combining or evaluating various item attributes. This feature improves the displayed data for productions, ensuring clear and effective project communication.</Typography>
			</Section>

			<Section id="automatic-ids" title="Automatic panel IDs">
				<Typography>Automatically generate unique IDs for panels at the report level. This feature enhances traceability throughout the manufacturing process, reducing the chances of errors and improving overall accuracy.</Typography>
			</Section>

			<Section id="swoodutils" title="Access to SwoodUtils">
				<Typography>
					Access to the <SwoodUtilsTag /> add-in to streamline the ID assignment process for panels and frames, providing a user-friendly interface.
				</Typography>
			</Section>

			<Section id="beam-saw" title="Classify panels as beam saw">
				<Typography id="beam-saw-list" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Beam saw list
				</Typography>
				<Typography>Quickly generate a separate list specifically for beam saw panels, allowing for targeted processing and better organization of your workflow.</Typography>

				<Typography id="beam-saw-labels" variant="h6" style={{ marginTop: '10px', marginBottom: '10px' }}>
					Beam saw labels
				</Typography>
				<Typography>Create specific labels for beam saw panels, ensuring clarity in production and improving efficiency in identifying components throughout the process.</Typography>
			</Section>

			<Section id="weldments-page" title="Weldments page">
				<Typography>View components modeled using SolidWorks weldments in an intuitive layout. This page enhances comprehension of complex assemblies, making it easier to visualize the end product and its components.</Typography>
				<ImageComponent source="./images/ReportPro/weldment-table.png" size="1200px" />
			</Section>

			<Section id="navigation-arrows" title="Next & previous arrows in detailed pages">
				<Typography>Navigate effortlessly between detailed pages using next and previous arrows. This enhancement improves user experience and allows for more efficient data review.</Typography>
				<ImageComponent source="./images/ReportPro/next-arrows.gif" size="800px" />
			</Section>

			<Section id="tick-icons" title="Tick icons on tables">
				<Typography>Easily identify completed tasks or processed items within tables using tick icons. This visual cue enhances data tracking and improves overall organization.</Typography>
				<ImageComponent source="./images/ReportPro/tick-icons.png" size="1000px" />
			</Section>

			<Section id="next-steps" title="Next steps">
				<Typography>
					If you wish to upgrade to the <SwoodReportProTag />, please contact our team at <a href="mailto:SwoodApps@solidSolutions.co.uk">SwoodApps@solidSolutions.co.uk</a> for further details.
				</Typography>
			</Section>
		</>
	)
}

export default SwoodReportPro
