import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SwoodReportTag } from '../../components/NameTags'
import { ProChip } from '../../components/ProChip'
import { ImageComponent } from '../../components/ImageComponent'

const SwoodReportPro = () => {
	return (
		<>
			<PageTitle title="Explore the benefits of the SwoodReport Pro" pro />

			<nav>
				<ul>
					<li>
						<a href="#overview">Overview</a>
					</li>
					<li>
						<a href="#search-tables">Searchable & sortable tables</a>
					</li>
					<li>
						<a href="#print-tables">Print grouped or filtered tables</a>
					</li>
					<li>
						<a href="#save-excel">Save tables as excel</a>
					</li>
					<li>
						<a href="#program-beam-saw">Program & beam saw indicator</a>
					</li>
					<li>
						<a href="#frame-list">Frame list</a>
					</li>
					<li>
						<a href="#frame-detail">Frame detail page</a>
					</li>
					<li>
						<a href="#frame-labels">Frame labels</a>
					</li>
					<li>
						<a href="#weldments-page">Weldments page</a>
					</li>
					<li>
						<a href="#group-material">Group by material type</a>
					</li>
					<li>
						<a href="#group-frames">Group by frames</a>
					</li>
					<li>
						<a href="#group-machines">Group by machines</a>
					</li>
					<li>
						<a href="#combine-panels">Combine panels</a>
					</li>
					<li>
						<a href="#combine-stocks">Combine stocks</a>
					</li>
					<li>
						<a href="#automatic-ids">Automatic panel IDs</a>
					</li>
					<li>
						<a href="#beam-saw-list">Beam saw list</a>
					</li>
					<li>
						<a href="#beam-saw-labels">Beam saw labels</a>
					</li>
					<li>
						<a href="#print-full-report">Print full report functionality</a>
					</li>
					<li>
						<a href="#additional-properties">Additional properties</a>
					</li>
					<li>
						<a href="#swoodutils">Access to SwoodUtils</a>
					</li>
					<li>
						<a href="#summary-charts">Summary charts</a>
					</li>
					<li>
						<a href="#navigation-arrows">Next & previous arrows in detailed pages</a>
					</li>
					<li>
						<a href="#3d-panel-models">3D panel models</a>
					</li>
					<li>
						<a href="#3d-sheet-models">3D sheet models</a>
					</li>
					<li>
						<a href="#tick-icons">Tick icons on tables</a>
					</li>
					<li>
						<a href="#pdf-links">Links to PDF documents</a>
					</li>
					<li>
						<a href="#projects-page">Projects page</a>
					</li>
					<li>
						<a href="#qr-codes">Label QR codes</a>
					</li>
					<li>
						<a href="#concatenate-evaluate">Concatenate/evaluate properties</a>
					</li>
					<li>
						<a href="#group-hardware">Group hardware by type</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The <SwoodReportTag /> <ProChip /> significantly enhances the functionality of the base report, providing advanced tools tailored for effective project management and reporting in woodworking.
				</Typography>
				<Typography>
					With features like <strong>searchable and sortable tables</strong>, you can quickly access the information you need, saving valuable time and improving decision-making. The ability to <strong>print grouped or filtered tables</strong> allows you to present data clearly, whether for team discussions or client meetings.
				</Typography>
				<Typography>Additional functionalities, such as 3D modeling of panels and sheets, enable better visualization of your projects, helping you and your team understand complex assemblies at a glance. Enhanced capabilities for grouping materials and hardware ensure optimized resource management, allowing for a smooth workflow.</Typography>
				<Typography>Crucially, this upgraded reporting system facilitates improved communication with the shop floor. By providing clear, organized reports, you can ensure that your team on the floor has the precise information they need to execute tasks efficiently and accurately.</Typography>
				<Typography>
					Upgrading to <SwoodReportTag /> <ProChip /> equips you with the tools necessary for better organization, enhanced clarity, and more effective communication throughout your project lifecycle.
				</Typography>
				<Typography>Explore the sections below to uncover additional benefits and discover how this system can elevate your reporting and project management experience.</Typography>
			</Section>

			<Section id="search-tables" title="Searchable & sortable tables">
				<Typography>Streamline your workflow with tables that allow for efficient searching and sorting. Quickly locate specific items, enhancing your productivity and reducing the time spent sifting through information.</Typography>
				<ImageComponent source="./images/ReportPro/search-sort.gif" size="1000px" />
			</Section>

			<Section id="print-tables" title="Print grouped or filtered tables">
				<Typography>Easily print tables tailored to your needs. Whether you require a complete overview or filtered data, this functionality provides flexibility, ensuring you have the necessary information at hand., ready for supplier or the shop floor.</Typography>
				<ImageComponent source="./images/ReportPro/group-table.gif" size="1000px" />
			</Section>

			<Section id="save-excel" title="Save tables as excel">
				<Typography>Export your data effortlessly by saving tables as Excel files. This feature allows for seamless integration with other tools, enabling further analysis and manipulation of your data in a familiar environment.</Typography>
				<ImageComponent source="./images/ReportPro/excel-table.gif" size="1000px" />
			</Section>

			<Section id="program-beam-saw" title="Program & beam saw indicator">
				<Typography>Quickly identify which panels contain programs or have been classified for beam saw processing. This indicator streamlines workflow planning, helping to avoid confusion and ensure the correct panels are prioritized.</Typography>
			</Section>

			<Section id="frame-list" title="Frame list">
				<Typography>Classify assemblies as frames to generate a comprehensive list, complete with detailed information. This feature enhances project organization, making it easier to manage complex assemblies.</Typography>
				<ImageComponent source="./images/ReportPro/frame-list.png" size="1200px" />
			</Section>

			<Section id="frame-detail" title="Frame detail page">
				<Typography>Dive deep into frame specifications with a dedicated detail page. Access essential information about panels, hardware, and programs within each frame, facilitating informed decision-making and project management.</Typography>
				<ImageComponent source="./images/ReportPro/frame-details.png" size="800px" />
			</Section>

			<Section id="frame-labels" title="Frame labels">
				<Typography>Generate accurate labels for frames effortlessly. This functionality aids in identification and organization, ensuring that components are easily traceable throughout the production process.</Typography>
				<ImageComponent source="./images/ReportPro/frame-labels.png" size="800px" />
			</Section>

			<Section id="weldments-page" title="Weldments page">
				<Typography>View components modeled using SolidWorks weldments in an intuitive layout. This page enhances comprehension of complex assemblies, making it easier to visualize the end product and its components.</Typography>
				<ImageComponent source="./images/ReportPro/weldment-table.png" size="1200px" />
			</Section>

			<Section id="group-material" title="Group by material type">
				<Typography>Quickly separate materials into distinct groups, streamlining processes such as inventory management and supplier communication. This feature is invaluable when dealing with specific materials and ensures accuracy in reporting.</Typography>
				<ImageComponent source="./images/ReportPro/group-table-2.gif" size="1000px" />
			</Section>

			<Section id="group-frames" title="Group by frames">
				<Typography>Group panel lists by frames to gain immediate insight into their location within the assembly. This organization enhances project tracking and improves communication across teams.</Typography>
			</Section>

			<Section id="group-machines" title="Group by machines">
				<Typography>Organize program lists by machines to ensure efficient production planning. This capability aids in identifying machine requirements, optimizing workflows, and improving overall productivity.</Typography>
			</Section>

			<Section id="group-hardware" title="Group hardware by type">
				<Typography>Group hardware components by type for better organization and efficiency in managing inventory and project requirements. This feature simplifies resource allocation and planning.</Typography>
			</Section>

			<Section id="combine-panels" title="Combine panels">
				<Typography>Reduce redundancy by combining identical panels, simplifying your reports and reducing clutter.</Typography>
				<ImageComponent source="./images/ReportPro/combine-panels.gif" size="1200px" />
			</Section>

			<Section id="combine-stocks" title="Combine stocks">
				<Typography>Streamline the cutting list by combining stocks with the same overall dimensions.</Typography>
			</Section>

			<Section id="automatic-ids" title="Automatic panel IDs">
				<Typography>Automatically generate unique IDs for panels at the report level. This feature enhances traceability throughout the manufacturing process, reducing the chances of errors and improving overall accuracy.</Typography>
			</Section>

			<Section id="beam-saw-list" title="Beam saw list">
				<Typography>Quickly generate a separate list specifically for beam saw panels, allowing for targeted processing and better organization of your workflow.</Typography>
			</Section>

			<Section id="beam-saw-labels" title="Beam saw labels">
				<Typography>Create specific labels for beam saw panels, ensuring clarity in production and improving efficiency in identifying components throughout the process.</Typography>
			</Section>

			<Section id="print-full-report" title="Print full report functionality">
				<Typography>Print all pages of the report at once, with predefined options for pages and quantities. This capability saves time and ensures comprehensive documentation is readily available.</Typography>
				<ImageComponent source="./images/ReportPro/print-report.gif" size="1200px" />
			</Section>

			<Section id="additional-properties" title="Additional properties">
				<Typography>Access and display additional properties within your reports, enhancing the depth of information available for each item, and improving clarity in communication with team members and clients.</Typography>
			</Section>

			<Section id="swoodutils" title="Access to SwoodUtils">
				<Typography>Utilize SwoodUtils for generating panel IDs seamlessly. This integration simplifies processes and enhances data consistency throughout your projects.</Typography>
			</Section>

			<Section id="summary-charts" title="Summary charts">
				<Typography>Visualize key data points with summary charts, providing a quick overview of project metrics and performance. This feature aids in decision-making and enhances reporting capabilities.</Typography>
			</Section>

			<Section id="navigation-arrows" title="Next & previous arrows in detailed pages">
				<Typography>Navigate effortlessly between detailed pages using next and previous arrows. This enhancement improves user experience and allows for more efficient data review.</Typography>
			</Section>

			<Section id="3d-panel-models" title="3D panel models">
				<Typography>Visualize panels in 3D, facilitating a better understanding of dimensions and configurations. This feature enhances project planning and ensures accuracy in production.</Typography>
			</Section>

			<Section id="3d-sheet-models" title="3D sheet models">
				<Typography>Access detailed 3D representations of sheets, improving clarity in assembly processes and facilitating easier communication among team members.</Typography>
			</Section>

			<Section id="tick-icons" title="Tick icons on tables">
				<Typography>Easily identify completed tasks or processed items within tables using tick icons. This visual cue enhances data tracking and improves overall organization.</Typography>
			</Section>

			<Section id="pdf-links" title="Links to PDF documents">
				<Typography>Integrate links to relevant PDF documents directly within your reports, improving accessibility to important resources and enhancing the overall functionality of your reports.</Typography>
			</Section>

			<Section id="projects-page" title="Projects page">
				<Typography>Gain a comprehensive view of all your projects in one centralized page, facilitating better project management and oversight.</Typography>
			</Section>

			<Section id="qr-codes" title="Label QR codes">
				<Typography>Generate QR codes for labels to streamline tracking and identification. This feature enhances efficiency in the production process and improves traceability.</Typography>
			</Section>

			<Section id="concatenate-evaluate" title="Concatenate/evaluate properties">
				<Typography>Concatenate and evaluate properties for improved reporting. This functionality enhances data management and reporting accuracy, ensuring clarity in project communication.</Typography>
			</Section>
		</>
	)
}

export default SwoodReportPro
