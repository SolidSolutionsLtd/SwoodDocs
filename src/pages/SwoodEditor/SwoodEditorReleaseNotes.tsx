import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ProChip } from '../../components/ProChip'
import { Release } from '../../components/Release'
import { SwoodTag, SolidWorksTag } from '../../components/NameTags'

const SwoodEditorReleaseNotes = () => {
	return (
		<>
			<PageTitle title="Swood Editor release notes" />

			<Release version="1.2.1" ReleaseDate="13/09/2024">
				<Typography variant="h6">New features</Typography>
				<ul>
					<li>Includes report v2.10.3</li>
					<li>Ability to modify DAT backup name</li>
					<li>Added Display Settings for Cutting Pattern</li>
					<li>
						Added Weldment Settings <ProChip />
					</li>
				</ul>
				<Typography variant="h6">Improvements</Typography>
				<ul>
					<li>Disabled initial DAT backup</li>
					<li>Added ALLEDGEBAND properties for panel image</li>
					<li>Added autofill properties to cutting pattern tables</li>
					<li>Added autofill properties to frames and nesting labels</li>
					<li>Label tables automatically increase height depending on content</li>
					<li>Added formatting space between equal sign when saving .cfg</li>
				</ul>
				<Typography variant="h6">Bug fixes</Typography>
				<ul>
					<li>Fixed tables horizontal header scroll issue</li>
					<li>Fixed issue where labels page would intermittently would go blank, or would trigger a "Save Settings" flag without any changes</li>
					<li>Fixed issue where creating a backup would fail</li>
				</ul>
			</Release>

			<Release version="1.2.0" ReleaseDate="20/08/2024">
				<Typography variant="subtitle1">
					Requirements: <SwoodTag /> 2024 SP0.0 or newer
				</Typography>
				<Typography variant="subtitle1" className="red">
					Warning: This version introduces breaking changes for reports that save labels to image files. Please contact support before upgrading.
				</Typography>

				<ul>
					<Typography variant="h6">New features</Typography>
					<ul>
						<li>Includes Report v2.10.0</li>
						<li>New Label Layout Configurator</li>
						<li>Changes to Printing page. Now has the ability to define the order. Print and Quantity property no longer needed</li>
						<li>Ability to enable/disable System Report</li>
						<li>Added Settings for BeamSaw, Laminates, and Edgeband tables</li>
						<li>Added Cutting Pattern settings</li>
					</ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>CSV process on Hardware</li>
						<li>
							Updates Report.cfg version according to the installed <SwoodTag /> Version
						</li>
						<li>Removed Database.js import</li>
						<li>BoardEstimation settings have been removed</li>
						<li>Ability to change ShowPanelID and ShowPanelIDPrograms in Detailed Pages</li>
					</ul>
				</ul>
			</Release>

			<Release version="1.1.0" ReleaseDate="01/03/2024">
				<ul>
					<li>Includes Report v2.9.2</li>
					<li>Installs the SSM License manager as a pre-requisite</li>
					<li>Now requires .net 8.0</li>
					<li>
						Changed order and names in Nesting page to match <SwoodTag />
					</li>
					<li>Added "Part Distance Type" to Nesting page</li>
					<li>Added SORTMODE "Enable Holding Strategy" in Nesting Page</li>
					<li>Added properties to Program Details page: ProgramDetailsShowLayers, ProgramDetailsShowLaminates, ProgramDetailsShowEdgebands, ProgramDetailsShowPanelProcess</li>
					<li>Fixed bug where conditional variables where cleared when creating CSV files</li>
				</ul>
			</Release>

			<Release version="1.0.0" ReleaseDate="18/10/2023">
				<ul>
					<li>Includes Report v2.9.0</li>
					<li>New App Framework</li>
					<li>Ability to Live Preview</li>
					<li>Ability to define labels layout</li>
					<li>Ability to define report font and size</li>
					<li>Checks if imported files are set to read-only</li>
					<li>Ability to define home page and print header properties</li>
					<li>Ability to change or hide menu names</li>
					<li>Improved autofill lists</li>
					<li>Ability to undo/redo table changes</li>
					<li>Further nesting options added</li>
					<li>
						Board Estimation options <ProChip />
					</li>
					<li>Added Nesting Image settings</li>
				</ul>
			</Release>

			<Release version="0.0.5" ReleaseDate="18/03/2023">
				<ul>
					<li>Includes Report v2.8.7</li>
					<li>
						<span className="param">Update Report</span> merges default settings with custom settings
					</li>
					<li>App can now only run a single instance</li>
					<li>Added ability to define .csv documents</li>
					<li>Added further default properties to CAM section</li>
					<li>
						Added <span className="param">ShowSummaryChart</span> Property <ProChip />
					</li>
					<li>
						Added <span className="param">PrintSummaryChart</span> Property <ProChip />
					</li>
					<li>
						Ability to edit BoardEstimation pages <ProChip />
					</li>
					<li>Added ExcludePanelLabels Property</li>
					<li>Added ExcludeOffcutLabels Property</li>
					<li>Improved error message when reading ReportSettings.js file</li>
					<li>Fix import warning message issue</li>
					<li>
						Ability to defined custom properties using placeholders <span className="param">Report &gt; Custom Properties</span>
					</li>
					<li>Improved autocomplete properties</li>
					<li>Splash Screen</li>
				</ul>
			</Release>

			<Release version="0.0.4" ReleaseDate="17/02/2023">
				<ul>
					<li>Uses ReportUpdater from DAT</li>
					<li>Fixed issue where ReportSetting properties were not being changed</li>
					<li>
						Fixed <span className="param">FITPARTINPART</span> not being modified
					</li>
					<li>Ability to modify Programs Table</li>
					<li>Ability to modify Hardware Table</li>
					<li>Ability to modify Nested Sheets Table</li>
					<li>Ability to modify Nested Panels Table</li>
					<li>Additional options for printing</li>
					<li>Ability to modify Panel Details Page</li>
					<li>DAT updater checks if both local and current are older</li>
				</ul>
			</Release>

			<Release version="0.0.3" ReleaseDate="14/12/2022">
				<ul>
					<li>Minor Changes to UI</li>
				</ul>
			</Release>

			<Release version="0.0.2" ReleaseDate="10/12/2022">
				<ul>
					<li>Minor Changes to UI</li>
				</ul>
			</Release>

			<Release version="0.0.1" ReleaseDate="5/12/2022">
				<ul>
					<li>Improvement to how data is imported</li>
					<li>
						Notification when Dat folder being edited is different to the one specified in <SolidWorksTag />
					</li>
					<li>Changes to user interface when selecting tick & cross</li>
					<li>Ability to define Program Images</li>
					<li>Ability to define pages to print in the report</li>
					<li>Ability to modify units in Main Report Tab</li>
					<li>Links to release pages</li>
				</ul>
			</Release>

			<Release version="0.0.0" ReleaseDate="28/11/2022">
				<ul>
					<li>Initial Release</li>
				</ul>
			</Release>
		</>
	)
}

export default SwoodEditorReleaseNotes
