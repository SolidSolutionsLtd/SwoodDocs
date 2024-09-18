import { Typography } from '@mui/material'
import { IndexItem } from '../components/IndexItem'
import { SectionDivider } from '../components/SectionDivider'
import { useLocation } from 'react-router-dom';

export const Index = () => {
	const location = useLocation();
	
	console.log('Home Location:' + location.pathname)
	console.log('Home:' + location.hash)

	return (
		<>
			<Typography variant="h3" style={{ fontWeight: 'bold' }}>
				Swood Docs
			</Typography>

			<SectionDivider />
			<ul>
				<li>
					Swood
					<ul>
						<IndexItem to="/SwoodCompatibility" title="Swood Compatibility" />
						<IndexItem to="/ScriptParameters" title="List of Swood Script Parameters" />
						<IndexItem to="/SwoodTab" title="Reset Swood Tabs" />
						<IndexItem to="/FileName" title="Issues with long file names" />
					</ul>
				</li>
				<br />
				<br />
				<li>
					Swood Report
					<ul>
						<IndexItem to="/SwoodReportQuickstart" title="Swood Report Quickstart" />
						<IndexItem to="/SwoodLicensing" title="Swood Report licensing" />
						<IndexItem to="/ReportCompatibility" title="Swood Report Compatibility" />
						<IndexItem to="/SwoodDataDirectory" title="How to find the Swood Data Directory" />
						<IndexItem to="/Matrix" title="Swood Report matrix" />
						<IndexItem to="/SwoodProperties" title="List of Swood properties" />
						<IndexItem to="/ConcatenateProperties" title="How to concatenate/evaluate properties" pro={true} postDate="18/09/2024" />
						<IndexItem to="/Frames" title="How to define a component as a Frame" pro={true} />
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
						<IndexItem to="/SwoodReportReleaseNotes" title="Swood Report release notes" />
					</ul>
				</li>

				<br />
				<br />
				<li>
					Swood Editor
					<ul>
						<IndexItem to="/SwoodLicensing" title="Swood Editor licensing" />
						<IndexItem to="/SwoodEditorReleaseNotes" title="Swood Editor release notes" />
						<IndexItem to="/CreatingDATBackups" title="How to backup Report Settings" />
					</ul>
				</li>
			</ul>
		</>
	)
}
