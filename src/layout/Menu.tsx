import { IndexItem } from '../components/IndexItem'

const Menu: React.FC = () => {
	return (
		<>
			<ul>
				<IndexItem to="/" title="Home" />
				<li>
					<IndexItem to="/Swood" title="Swood" postDate="18/09/2024" />
					<ul>
						<IndexItem to="/SwoodPerformance" title="How to Enhance Swood Performance" postDate="18/09/2024" />
						<IndexItem to="/SwoodRX" title="How to create a Swood RX" postDate="23/09/2024" />
						<IndexItem to="/SwoodCompatibility" title="Swood Compatibility" />
						<IndexItem to="/ScriptParameters" title="List of Swood Script Parameters" updateDate="23/09/2024" />
						<IndexItem to="/SwoodDataDirectory" title="How to find the Swood Data Directory" />
						<IndexItem to="/SwoodTab" title="How to Reset Swood Tabs" />
						<IndexItem to="/FileName" title="Issues with long file names" />
					</ul>
				</li>
				<br />
				<li>
					<IndexItem to="/SwoodReport" title="Swood Report" />
					<ul>
						<IndexItem to="/SwoodReportQuickStart" title="Swood Report QuickStart" />
						<IndexItem to="/SwoodLicensing" title="Swood Report Licensing" />
						<IndexItem to="/ReportCompatibility" title="Swood Report Compatibility" />
						<IndexItem to="/SwoodReportReleaseNotes" title="Swood Report Release Notes" />
						<IndexItem to="/SwoodReportMatrix" title="Swood Report Matrix" />
						<IndexItem to="/SwoodReportProperties" title="List of Swood Report Properties" postDate="18/09/2024" />
						<IndexItem to="/MaterialExtendedProperties" title="List of Swood Material Extended Properties" postDate="18/09/2024" />
						<IndexItem to="/PanelsAndStocks" title="Difference between Panels and Stocks List" postDate="18/09/2024" />
						<IndexItem to="/CustomProperties" title="How to display Custom Properties" pro={false} postDate="19/09/2024" />
						<IndexItem to="/ConcatenateProperties" title="How to concatenate/evaluate properties" pro={true} postDate="18/09/2024" />
						<IndexItem to="/ProjectName" title="How to Change the Report Project Name" postDate="23/09/2024" />
						<IndexItem to="/ProjectQuantity" title="How to Change the Report Project Quantity" postDate="23/09/2024" />
						<IndexItem to="/SimpleReport" title="How to Generate a Simple Report" postDate="24/09/2024" />
						<li>
							Frames
							<ul>
								<IndexItem to="/Frames" title="How to define a component as a Frame" pro={true} />
								<IndexItem to="/FrameType" title="How to group Frames by Type" pro={true} postDate="18/09/2024" />
							</ul>
						</li>
						<IndexItem to="/CuttingPattern" title="How to generate a Cutting Pattern" postDate="18/09/2024" />
						<IndexItem to="/NestedCuttingPattern" title="How to Define Panels as Nested or Beam Sawed (Cutting Pattern)" postDate="18/09/2024" />

						<li>
							Hardware
							<ul>
								<IndexItem to="/Hardware" title="How to define a component as Hardware" />
								<IndexItem to="/HardwareLength" title="How to display the length of a Hardware component" />
								<IndexItem to="/HardwareType" title="How to group Hardware by Type" pro={true} />
							</ul>
						</li>
						<IndexItem to="/BeamSaw" title="How to define a panel as Beam Saw" pro={true} />
						<IndexItem to="/SaveToPDF" title="How to automatically save Drawings to PDF" postDate="18/09/2024" />
						<IndexItem to="/Exclude" title="How to exclude a component from the Report" />
						<IndexItem to="/MaterialType" title="How to group materials by Type" pro={true} />
					</ul>
				</li>
				<br />
				<li>
					<IndexItem to="/SwoodEditor" title="Swood Editor" />
					<ul>
						<IndexItem to="/SwoodLicensing" title="Swood Editor licensing" />
						<IndexItem to="/SwoodEditorReleaseNotes" title="Swood Editor Release Notes" />
						<IndexItem to="/CreatingDATBackups" title="How to backup Report Settings" />
					</ul>
				</li>
				<br />
				<li>
					<IndexItem to="/SwoodUtils" title="SwoodUtils" pro={true} beta={true} />
					<ul>
						<IndexItem to="/SwoodUtilsReleaseNotes" title="SwoodUtils Release Notes" />
					</ul>
				</li>
			</ul>
		</>
	)
}

export default Menu
