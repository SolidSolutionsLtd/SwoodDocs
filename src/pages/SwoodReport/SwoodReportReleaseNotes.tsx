import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ProChip } from '../../components/ProChip'
import { Release } from '../../components/Release'
import { SolidWorksTag, SwoodDesignTag, SwoodTag } from '../../components/NameTags'

const SwoodReportReleaseNotes = () => {
	return (
		<>
			<PageTitle title="SwoodReport release notes" />

			<Release version="2.10.3" ReleaseDate="13/09/2024">
				<ul>
					<Typography variant="h6">New Features</Typography>
					<ul>
						<li>Ability to display panel properties in Cutting Pattern Panel List</li>
						<li>Ability to show/print Cutting Patten statistics</li>
						<li>Ability to show/print Cutting Patten cut list</li>
						<li>Cutting Pattern colours turn white when printing</li>
						<li>Cutting Pattern rotated 90 deg. Origin is Top-Left corner</li>
						<li>Ability to hide/show dimensions and IDs in Cutting Pattern</li>
						<li>Added grain direction arrow to Cutting Pattern</li>
					</ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>
							Updated QRCodes <ProChip />
						</li>
						<li>Minor changes to Menu format</li>
					</ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed bug where Program details would not show tool list</li>
						<li>Fixed printing issue with Cutting Pattern</li>
					</ul>
					<Typography variant="h6">Known bugs</Typography>
					<ul>
						<li>Reference issues/missing images in home page when using a custom Home Tab name</li>
					</ul>
				</ul>
			</Release>

			<Release version="2.10.2" ReleaseDate="6/09/2024">
				<ul>
					<Typography variant="h6">New Features</Typography>
					<ul>
						<li>
							Ability to hide Frame Panels if FramePanelColumns is empty <ProChip />
						</li>
						<li>
							Ability to see weldments in Frame Details page <ProChip />
						</li>
						<li>Ability to display panel properties in Cutting Pattern Details</li>
					</ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>
							Profiles are now Weldments to keep in line with the <SolidWorksTag /> terminology
						</li>
						<li>Grain property is now HasGrain</li>
					</ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed issue where grouping frames by Frame Type would replace parent properties with child properties</li>
					</ul>
				</ul>
			</Release>

			<Release version="2.10.1" ReleaseDate="1/09/2024">
				<ul>
					<Typography variant="h6">New Features</Typography>
					<ul>
						<li>Ability to exclude panels with material extended custom property Exclude = Yes</li>
					</ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>Added data-id and data-id-instance attributes to Labels</li>
						<li>Added ID property to Nested Panels</li>
						<li>Updater now removes Board Estimation data from Report.cfg</li>
					</ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed issue with Frame Details page if name contains ^, &lt;, &gt;, "</li>
						<li>Fixed issue where updater removes label image</li>
						<li>Fixed issue where label images where not displaying laminate arrows</li>
						<li>Fixed issue where Projects page is blank due to a missing file</li>
						<li>Fixed issue if new line character is present in custom property value</li>
					</ul>
				</ul>
			</Release>

			<Release version="2.10.0" ReleaseDate="20/08/2024">
				<Typography variant="subtitle1">Requirements: Swood 2024 SP0.0 or newer</Typography>
				<Typography variant="subtitle1" className="red">
					Warning: This version introduces breaking changes for reports that save labels to image files. Please contact support before upgrading.
				</Typography>
				<ul>
					<Typography variant="h6">New Features</Typography>
					<ul>
						<li>New Cutting Pattern pages</li>
						<li>New Labels layout</li>
						<li>
							Ability to create Frame Labels <ProChip />
						</li>
						<li>New Edgebands Page</li>
						<li>New Laminates Page</li>
						<li>
							New SubFrame Details page <ProChip />
						</li>
						<li>New Raw Data Viewer</li>
						<li>
							New Barcode formats for labels <ProChip />
						</li>
						<li>
							Ability to concatenate and evaluate properties in main tables and labels <ProChip /> «Length» «EVAL(«Length»*«Width»)»
						</li>
						<li>Ability to print any page order, any quantity. Print Quantity no longer in use</li>
					</ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>New ReportSettings.js format</li>
						<li>Ability to group Nested Panels table by Parent Project</li>
						<li>Ability to define different settings for nested panel labels</li>
						<li>Ability to define different settings for BeamSaw labels</li>
						<li>Board Estimation has been retired and replaced by Cutting Pattern</li>
						<li>Changes to ensure 3D models are loaded</li>
						<li>Custom property comments and Summary are now merged into a single property</li>
						<li>Added warning messages for material and edgeband names with leading or trailing space characters</li>
						<li>Now using LabelsSortBy if it exists(not for nest projects)</li>
						<li>
							Added BeamSawColumns and SortByBeamSaw <ProChip />
						</li>
						<li>
							Ability to define a BeamSaw panel by adding an extended material property of BeamSaw = True <ProChip />
						</li>
						<li>
							Added report property - <span className="param">ImageRotateAngle</span> used for Panels and Programs to rotate images in Labels and Detail Pages
						</li>
						<li>
							Added report property - <span className="param">HasPanelProcess</span>
						</li>
						<li>
							Added report Property - <span className="param">PanelProcessNameList</span>
						</li>
						<li>Ability to group Frames by "Frame Type" custom property</li>
						<li>Ability to disable "Clean Database" in Database Post</li>
						<li>Report RunTime now written back to the database</li>
						<li>[[HTML changed to [[TEMPLATE</li>
						<li>HTMLSRC changed to TEMPLATESRC</li>
						<li>Added to Database - MaterialData and extended properties</li>
						<li>Added to Database - EdgebandData and extended properties</li>
						<li>Added to Database - guids to NestedSheetData</li>
						<li>
							Added to Database - <span className="param">WastedArea</span>
						</li>
						<li>
							Added to Database - <span className="param">SurfaceSheet</span>
						</li>
						<li>
							Added to Database - <span className="param">SurfaceParts</span>
						</li>
						<li>
							Added to Database - <span className="param">SurfaceScraps</span>
						</li>
						<li>
							Added to Database - <span className="param">WastedArea</span>
						</li>
						<li>
							Added to Database - <span className="param">NumberOfParts</span>
						</li>
						<li>
							Added to Database - <span className="param">NumberOfOffcuts</span>
						</li>
						<li>
							Added to Database - <span className="param">OffcutArea</span>
						</li>
						<li>
							Added to Database - <span className="param">EncodingError</span>
						</li>
						<li>
							Added to Database - <span className="param">RebuildError</span>
						</li>
						<li>
							Added to Database - <span className="param">SwoodReportVersion</span>
						</li>
						<li>
							Added to Database - <span className="param">ProgramOffcutsUsed</span>
						</li>
						<li>
							Added to Database - <span className="param">Frame PanelCount</span>
						</li>
						<li>
							Added to Database - <span className="param">Frame HardwareCount</span>
						</li>
						<li>
							Added to Database - <span className="param">Frame FrameDimension</span>
						</li>
						<li>
							Added to Database - <span className="param">MaterialId</span>
						</li>
						<li>
							Added to Database - <span className="param">SummaryAuthor</span>
						</li>
						<li>
							Added to Database - <span className="param">SummaryKeywords</span>
						</li>
						<li>
							Added to Database - <span className="param">SummarySubject</span>
						</li>
						<li>
							Added to Database - <span className="param">SummaryTitle</span>
						</li>
						<li>
							Added to Database - <span className="param">MaterialId</span>
						</li>
						<li>
							Added to Database - <span className="param">CreatedDate</span>
						</li>
						<li>
							Added to Database - <span className="param">LastSavedDate</span>
						</li>
						<li>
							Added to Database - <span className="param">LastSavedBy</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentDescription</span>
						</li>
						<li>
							Added to Database - <span className="param">NestingOffcutAreaRatio</span>
						</li>
						<li>
							Added to Database - <span className="param">NestingScrapsAreaRatio</span>
						</li>
						<li>
							Added to Database - <span className="param">NestingWasteAreaRatio</span>
						</li>
						<li>
							Added to Database - <span className="param">ProgramDirectory</span>
						</li>
						<li>
							Added to Database - <span className="param">ProgramFullPath</span>
						</li>
						<li>
							Added to Database - <span className="param">Parent</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentIndex</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentName</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentConfiguration</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentSourceName</span>
						</li>
						<li>
							Added to Database - <span className="param">ParentPath</span>
						</li>
					</ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed ProgramNameList not displaying correctly</li>
						<li>Fixed ProgramFileNameList not displaying correctly</li>
						<li>Fixed PanelProcess not displaying correctly</li>
						<li>Fixed report now date/time</li>
						<li>Fixed issue where Frame Details page would break if the frame name contained a '^' character</li>
					</ul>
				</ul>
			</Release>

			<Release version="2.9.2" ReleaseDate="01/03/2024">
				<ul>
					<li>
						Ability to show SubFrames <ProChip />
					</li>
					<li>Ability to show layers, laminates, edgebands and panel process in program detailed page</li>
					<li>Summary page now shows when only programs exists</li>
					<li>
						Edgebands now sorted by banding order instead of feature order. <span className="param">EBStringReverse</span> property is now only used to reverse the order of EBString (display 2S2L instead of 2L2S)
					</li>
					<li>Now requires .net 8.0</li>
					<li>
						New print method to avoid blank pages <ProChip />
					</li>
					<li>Fixed bug where report is black when using Multi-Stock panels</li>
					<li>
						Added options to show panel properties in Program Details page: <span className="param">ProgramDetailsShowLayers</span>, <span className="param">ProgramDetailsShowLaminates</span>, <span className="param">ProgramDetailsShowEdgebands</span>, <span className="param">ProgramDetailsShowPanelProcess</span>
					</li>
				</ul>
			</Release>

			<Release version="2.9.1" ReleaseDate="01/02/2024">
				<ul>
					<li>Ability to not show hardware and programs in Frame Details Page by not providing columns to display</li>
					<li>Added Description property to projects</li>
					<li>Added part custom properties to programs and nested parts</li>
				</ul>
			</Release>
			<Release version="2.9.0" ReleaseDate="18/10/2023">
				<ul>
					<li>
						Ability to link to automatically generated pdfs <ProChip />
					</li>
					<li>PostLauncher now accepts absolute path</li>
					<li>"No Machining to Encode" message in Sheet Details page if sheet has no machining</li>
					<li>Changed logic for [PANEL_SIZE] message</li>
					<li>Fixed issue where panels will not display in sheets if Project Name has a plus sign or comma sign</li>
					<li>
						Ability to generate QR codes for labels <ProChip />
					</li>
					<li>Now using solid solutions licensing-2.2.5274.0.exe</li>
					<li>Fixed bug where Sheet pages where not working if Project filename contained invalid characters</li>
					<li>
						Ability to show Parent data or Top Level data in labels by using new Type property <ProChip />
					</li>
					<li>Added Component Description column to Messages Page</li>
					<li>Fixed issue where Edgeband quantity is wrong when using Project Quantity property</li>
					<li>
						Added <span className="param">ProgramFileNameList</span>ProgramFileNameList property <ProChip />
					</li>
					<li>
						Added <span className="param">BoardEstimationSummary</span> property to be able to show cost in summary <ProChip />
					</li>
					<li>
						Toggle option to hide/show 3D model for Panels and Sheets <ProChip />
					</li>

					<Typography variant="h6">Known bugs</Typography>
					<ul>
						<li>
							Print is blank randomly when using Print All button <ProChip />
						</li>
						<li>Blank report when using Multi-Stock panels</li>
					</ul>
				</ul>
			</Release>
			<Release version="2.8.7" ReleaseDate="18/05/2023">
				<ul>
					<li>
						Added BoardEstimation <ProChip />
					</li>
					<li>
						Option to <span className="param">ExcludePanelLabels</span>
					</li>
					<li>
						Option to <span className="param">ExcludeOffcutLabels</span>
					</li>
					<li>Display of PanelProcess in Summary and Panel Details Page</li>
					<li>Fixed bug where Sheet pages where not working if Project filename contained a single quote character</li>
					<li>Added Panel Process to database</li>
					<li>Fixed issue where numbers of boards were not calculated correctly in Summary page if "One program for same sheets" was used</li>
					<li>Fixed bug where Sheet image was not showing if the program name has a # character</li>
					<li>Fixed Profile quantity calculation when using multiple instances</li>
					<li>Fixed material quantity calculation when using Unit cost type and multiple instances</li>
					<li>Fix issue where Sheet Details page not showing correctly when assembly contained '&' character</li>
					<li>Fix issue where &#60;br&#62; was displayed when using CommentCP property</li>
					<li>Frame and Panel details pages are now printed following the defined sorting order</li>
					<li>Fixed bug where Programs where showing as combined in Program Details page</li>
					<li>Sorting order fixed for Sheets</li>
					<li>Sorting order fixed for Programs</li>
					<li>Added NameTrimStart and NameTrimEnd properties to hardware</li>
					<li>Added ProgramNameList property to Panels</li>
					<li>
						Ability to define Frame property to display instead of name <span className="param">FrameNameProperty</span>
					</li>
					<li>Added Error message for programs to Database.js</li>
					<li>Fixed issue where previous button was not working in Sheet Details page</li>
					<li>
						<span className="param">CheckForUpdates</span> enabled by default
					</li>
					<li>Fixed Program indicator link</li>
					<li>Fixed Panel link from Sheet Details page</li>
					<li>Checks if Panels have the same SWPanelID</li>
					<li>Fixed bug where Panels, Stocks and Summary tabs are missing if there are only Beam Saw panels in project</li>
					<li>Added FrameID to Panel Variables</li>
					<li>Changes to Label so that the first property can use Type:TopLevel</li>

					<Typography variant="h6">Known bugs</Typography>
					<ul>
						<li>
							Edgeband quantity calculation is wrong when using <span className="param">ProjectQuantity</span> property
						</li>
						<li>Print is blank when only printing Sheet Details</li>
						<li>
							Error message when nesting when using <SwoodTag /> 2023
						</li>
					</ul>
				</ul>
			</Release>
			<Release version="2.8.6" ReleaseDate="17/02/2023">
				<ul>
					<li>ReportUpdater.exe</li>
					<li>Removed PanelID from stocks when they are combined</li>
					<li>
						Added <span className="param">LaminateTop</span>, <span className="param">LaminateBottom</span>, <span className="param">EBFront</span>, <span className="param">EBBack</span>, <span className="param">EBLeft</span>, <span className="param">EBRight</span> object properties
					</li>
					<li>Fixed nesting quantity issue when "One Program for same sheets" is used. Panel Quantity property in Sheet details pages shows the Quantity per sheet of the panel</li>
					<li>
						Added <span className="param">ToolNumberList</span> property that lists Tool numbers used in a program as a string separated by commas
					</li>
					<li>Added default settings to Labels.js</li>

					<Typography variant="h6">Known bugs</Typography>
					<ul>
						<li>Incorrect Profile quantity calculation when using multiple instances</li>
						<li>Incorrect material quantity calculation when using Unit cost type and multiple instances</li>
						<li>Issues with report files when Project name contains a space character at the start or end</li>
						<li>Previous button not working in Sheet Details page</li>
						<li>Program error messages not showing in Message page</li>
						<li>Unable to find page when clicking on Program indicator</li>
						<li>Unable to find page when clicking on Panel from Sheet Details Page</li>
						<li>Panels, Stocks and Summary tabs missing if there are only Beam Saw panels in project</li>
						<li>Sheets Details page not showing if project contains '&' character</li>
						<li>CommentsCP property displays &#60;br&#62; at the end</li>
						<li>Programs showing as Combined in Program Details Page</li>
						<li>Sorting order not working for Sheets</li>
						<li>Sorting order not working for Programs</li>
						<li>Nesting image does not display if Program contains # character</li>
						<li>Sheet pages show incorrectly if Project filename contains single quote character</li>
					</ul>
				</ul>
			</Release>
			<Release version="2.8.5" ReleaseDate="13/01/2023">
				<ul>
					<li>Common files between Pro and Stn report</li>
					<li>Changes to Database.js file, now using v1.1.5</li>
					<li>&#60;br&#62; removed from comments when downloading excel file</li>
					<li>Material Extended custom properties are now optional</li>
					<li>Edgeband Extended custom properties are now optional</li>
					<li>Changes to Progress colour</li>
					<li>Fixed issue in Summary page where NaN is displayed if cost type used is Unit</li>
					<li>ProjectsPost.exe no longer in use. This has been merged with DatabasePost.exe</li>
					<li>Added LabelHeader class to label header</li>
					<li>Added LabelsPatch function</li>
				</ul>
			</Release>
			<Release version="2.8.4" ReleaseDate="14/12/2022">
				<ul>
					<li>Changes to Database.js file, now using v1.1.4</li>
					<li>Table content centered by default</li>
					<li>Table Print column is default</li>
					<li>Table Search column is default</li>
					<li>Sorted bug when using the table search feature</li>
					<li>Sorted issue where hardware was not being grouped when using grouped by Hardware Type</li>
					<li>Ability to round to nearest fraction for imperial UnitCost</li>
					<li>Added imperial fractions to Edgebands and Laminates in detailed pages</li>
					<li>Sorted bug where swipe feature was not working for nesting</li>
					<li>SimpleReport option</li>
					<li>Fixed issue where image was not being created when single quote is used in name</li>
					<li>
						Added <span className="param">DefaultMaterialMarkup</span> and <span className="param">DefaultHardwareMarkup</span>
					</li>
					<li>
						<span className="param">ShowSummaryChart</span> is TRUE by default
					</li>
					<li>
						<span className="param">Print</span> property added to PrintList, default is true
					</li>
				</ul>
			</Release>
			<Release version="2.8.3" ReleaseDate="">
				<ul>
					<li>Modified PostLauncher. Ability to launch multiple posts</li>
					<li>Hardware type now checks for (PATH CONTIENT "\Hardwares\") or (PATH CONTIENT "\solidworks data")</li>
				</ul>
			</Release>

			<Release version="2.8.2" ReleaseDate="">
				<ul>
					<li>Added Sheets page</li>
					<li>Changes to naming format SwoodProjects is now Projects</li>
					<li>Table headers are now centered by default</li>
					<li>Improved Messages page</li>
					<li>Included DefaultSettings.js</li>
				</ul>
			</Release>
			<Release version="2.8.1" ReleaseDate="">
				<Typography variant="subtitle1">
					Requirements: <SwoodTag /> 2022 SP1.2
				</Typography>
				<ul>
					<li>Format Tweaks</li>
					<li>Machining cost for nested projects excludes panels with Z+</li>
					<li>Changed to Home page code</li>
					<li>
						Ability to check for updates. <span className="param">CheckForUpdates</span>=true
					</li>
					<li>Link to Report Releases Page</li>
					<li>Client custom .css files for SwoodDesign and Print</li>
					<li>Panel properties merged with nested data in labels</li>
					<li>Ability to change themes</li>
					<li>Bug fix where frame cost was not calculated correctly in Frames table</li>
					<li>Database post processor</li>
				</ul>
			</Release>

			<Release version="2.8.0" ReleaseDate="">
				<ul>
					<li>New Projects Page</li>
					<li>Babylon files</li>
					<li>Query strings for detailed pages</li>
					<li>Bug fix where print headers was removing whitespaces like PanelDetails or NestingDetails</li>
					<li>Bug fix wrong Edgeband calculation when a single program per sheet is used in nesting</li>
					<li>
						Multibody dimensions like <span className="param">LengthWithEB</span> and <span className="param">LengthWithoutEB</span> are now the panel's Length dimension. Same for Width and Thickness
					</li>
					{/* <li>
						Ability to group Hardware by reference property <span className="param">GroupHardwareByReference</span>=true. Used for Handed Hardware
					</li> */}
				</ul>
			</Release>

			<Release version="2.7.6" ReleaseDate="">
				<ul>
					<li>
						Added the following properties for Nesting: <span className="param">UsedStockX</span>, <span className="param">UsedStockY</span>, <span className="param">UsedStockArea</span> , <span className="param">UsedStockAreaString</span>
					</li>
					<li>Bug fix where program indicator is not showed in nested details when using relative report</li>
				</ul>
			</Release>
			<Release version="2.7.5.1" ReleaseDate="">
				<ul>
					<li>Bug fix where table names where showing it's id when printing</li>
					<li>Bug fix NestedPanel list was not being printed</li>
				</ul>
			</Release>
			<Release version="2.7.5" ReleaseDate="">
				<ul>
					<li>Bug fix where Frame comment does not show the first character</li>
					<li>Curved Edges displayed as C, Undefined edgebands don't show a letter</li>
					<li>Material Combine function in Summary is now checking for the materials CostType and UnitCost to know if they should be combined or not</li>
					<li>Added function to calculate time in seconds for machining costs in Summary</li>
					<li>Fixed bug in FrameDetails.js to accurately group panels</li>
				</ul>
			</Release>
			<Release version="2.7.4" ReleaseDate="">
				<ul>
					<li>
						<span className="param">ResourcesType</span> no longer in use, using boolean <span className="param">ResourcesRelative</span> to define relative report
					</li>
					<li>Removed WEB Absolute and WEB Relative Folders. Now there is only WEB</li>
					<li>
						<span className="param">Scribe</span>=Yes property uses the Panel's Rough sizes as the Finished Sizes
					</li>
				</ul>
			</Release>

			<Release version="2.7.3" ReleaseDate="">
				<ul>
					<li>Ability to define Frame Details Panel table header</li>
					<li>Ability to change table names in frame details list (Panels, Hardware and Programs)</li>
					<li>Minor changes to take into account projects that work with panel configurations</li>
					<li>Using Database Version: Pro 1.0.4</li>
					<li>Removed unnecessary html headers from html files</li>
					<li>Bug fix removed first page margin in print.css to fix issue where footer was not showing</li>
				</ul>
			</Release>

			<Release version="2.7.2" ReleaseDate="">
				<ul>
					<li>Ability to modify Page Names, Table Names and hide pages</li>
					<li>
						Table names will be the same as the page name by default. Use <span className="param">ReportTableTitles</span> array to overwrite this
					</li>
					<li>LengthLongestEdge is respected in Summary Page it cost type is Length</li>
					<li>CombinedStocks now take into account laminates</li>
				</ul>
			</Release>
			<Release version="2.7.1" ReleaseDate="">
				<ul>
					<li>Fixed bug in Summary where Edgebang length was not being calculated properly</li>
					<li>LengthLongestEdge now also applies to Laminates</li>
					<li>Fixed bug program image reference issue in FrameDetails</li>
					<li>
						Added <span className="param">FrameDetailsPanelPatch</span> and <span className="param">FrameDetailsHardwarePatch</span> functions
					</li>
				</ul>
			</Release>
			<Release version="2.7.0" ReleaseDate="">
				<ul>
					<li>
						Added Patch functions <span className="param">CombinedPanelPatch</span> and <span className="param">CombinedStockPatch</span>
					</li>
					<li>Fixed printing issue caused when Frame was being excluded</li>
					<li>
						<span className="param">ReportDebugMode</span>=true will open print without print preview. Setting is set as False by default
					</li>
					<li>Uses configuration name on SourceName to make the name unique</li>
					<li>Panel Length, Width and Thickness properties are used in Programs</li>
					<li>Database Version: Pro 1.0.3</li>
					<li>Change made to FrameDetails.js to fix issue where combined panels where not getting combined properly in Frames</li>
					<li>Summary page processes Boards so it's able to obtain its properties</li>
				</ul>
			</Release>

			<Release version="2.6.6" ReleaseDate="">
				<ul>
					<li>Summary pages shows if report only contains hardware</li>
					<li>Ability to group nested panels by machine name</li>
					<li>
						Added <span className="param">SheetDataPatch</span> function to Patch file
					</li>
					<li>
						Added <span className="param">EmptyCell</span> property to materials in summary page
					</li>
					<li>
						Added <span className="param">MaterialsPostPatch</span> function
					</li>
					<li>Fixed bug where Combined Stocks number was not counting properly (If using a different CombinedStockName than 'Combined Stock')</li>
					<li>
						New <span className="param">ScrapPercentage</span> and <span className="param">UsedPercentage</span> Property for nested boards
					</li>
					<li>Footer displays 'R' next to the report version to indicate a Relative Report</li>
					<li>
						Ability to Change Columns in Summary for Edgebands using <span className="param">SummaryEdgebandColumns</span>. If not present, the default is to use the same as <span className="param">SummaryColumns</span>
					</li>
				</ul>
			</Release>

			<Release version="2.6.5" ReleaseDate="">
				<ul>
					<li>Fixes to names and grouping programs</li>
					<li>
						Ability to define Currency precision to Tables by using property <span className="param">precision</span>. Default is precision = 2
					</li>
					<li>
						Ability to define Currency precision to Hardware table in Summary by using property <span className="param">precision</span>. Default is precision = 2
					</li>
					<li>
						<span className="param">DrawnBy</span> property added to Database
					</li>
					<li>
						<span className="param">ProjectNumber</span> property added to Database
					</li>
					<li>
						New property: <span className="param">NameTrimStart</span> = Trims everything to the right of the last underscore in the filename
					</li>
					<li>
						New property: <span className="param">NameTrimEnd</span> = Trims everything to the left of the first underscore in the filename
					</li>
					<li>Ability to define column that contains the link</li>
					<li>Ability to define precision in Summary for material quantity and cost</li>
					<li>Ability to disable header sorter arrow using HeaderSort: false</li>
					<li>
						New Panel and Program property <span className="param">EmptyCell</span>. Used to display empty cell in Frame Details Page
					</li>
					<li>Rough sizes are now used to combine stocks instead of finished sizes</li>
					<li>
						Property added to Edgebands in Database file <span className="param">IsCurved</span>
					</li>
					<li>
						Property added to Panels in Database file <span className="param">IsCurved</span>
					</li>
					<li>
						Property added to Programs in Database file <span className="param">ProgramAngleX</span>
					</li>
					<li>
						Property added to Programs in Database file <span className="param">ProgramZ</span>
					</li>
					<li>Curved Edgebands excluded from EBString and EBStringOrder</li>
					<li>Solved issue where panels were not property grouped in the Stocks Page</li>
					<li>
						<span className="param">LongestEdge</span> is now <span className="param">LengthLongestEdge</span> and it is set to true by default
					</li>
					<li>Frames can now be excluded. Information is now correct and does not break the report</li>
					<li>Panels defined as Hardware will be treated as Hardware. Panel image will be generated and no panel detailed list will be generated</li>
					<li>
						<SwoodDesignTag /> Panel size properties are now available in Program object (<span className="param">LengthWithEB</span>, <span className="param">LengthWithoutEB</span>, <span className="param">RoughLength</span>)
					</li>
					<li>Fixed bug wrong Frame Quantity calculation in Frame Details when using Project Quantity</li>
					<li>Fixed bug where PanelData was getting processed twice in Frame Details</li>
					<li>
						Ability to disable Print Header <span className="param">PrintHeader</span> = false
					</li>
					<li>
						Ability to disable Company logo in print header <span className="param">PrintCompanyLogo</span> = false
					</li>
				</ul>
			</Release>
			<Release version="2.6.4" ReleaseDate="">
				<ul>
					<li>Added SelectToggle function to Table.js. The default groups was not working in the V2.6.3</li>
					<li>
						Added <span className="param">PrintInfoPrefix</span> class to print header. This modifies ReportHeader.js and Print.css file
					</li>
					<li>
						Ability to reverse EBString (2S 2L instead of 2L 2S) using <span className="param">EBStringReverse</span>=true
					</li>
					<li>Fixed link between Nesting and panel details fixed</li>
					<li>
						Ability to show/hide label image <span className="param">ShowLabelImage</span>=true
					</li>
					<li>
						Ability to Combine Programs (<span className="param">CombinePrograms</span>=true)
					</li>
					<li>
						Fixed issue where Frame details would fails if <span className="param">SortByPanelFrame</span> was not defined
					</li>
					<li>Added fixes and defaults to PrintReport.js</li>
					<li>Added CombineID to ProgramData in Database.js and to Programs in Report.cfg</li>
				</ul>
			</Release>
			<Release version="2.6.3" ReleaseDate="">
				<ul>
					<li>Warning messages when properties are missing are now handled differently</li>
					<li>
						Added <span className="param">NestingNumber</span> to Database
					</li>
					<li>Included Macros in DAT folder</li>
				</ul>
			</Release>
			<Release version="2.6.2" ReleaseDate="">
				<ul>
					<li>Ability to define default grouping for pages</li>
					<li>Ability to group when printing</li>
					<li>Warning messages if images or detailed pages are not created</li>
					<li>Changes to how nesting Quantities are calculated</li>
					<li>Changed condition for IMGPANELVIEWS to avoid creating images for non panel components. from CONDITION=NOT(TOTYPE='HARDWARE')AND(NOT(Exclude)) to CONDITION=(PANEL)AND(NOT(Exclude))</li>
					<li>Handles missing properties and sets default values</li>
				</ul>
			</Release>
			<Release version="2.6.1" ReleaseDate="">
				<ul>
					<li>"Programs" tab is now "Program Detailed List"</li>
					<li>"Programs" tab is now a table. Can be grouped by Frame or Machine</li>
					<li>Ability to group panel detailed list by Frame</li>
					<li>Removed check EB_LSTOCK &lt;&gt; 0 from database because edgebands that are not Front, Back, Left or Right don't have EB_LSTOCK. Was causing odd angled Edgebands to not appear in report</li>
				</ul>
			</Release>
			<Release version="2.6.0" ReleaseDate="">
				<ul>
					<li>"Nesting" tab is now "Nesting Detailed List"</li>
					<li>"Nested Panels" tab is now "Nesting"</li>
					<li>Ability to group Nesting by sheet</li>
					<li>Changes to nesting grouping functions</li>
					<li>Panel Properties merged with Nesting panels</li>
					<li>Ability to use Type: "currency" in Panel list of "Nesting Details" Tab</li>
					<li>Ability to use Type: "currency" in labels</li>
				</ul>
			</Release>

			<Release version="2.5.2" ReleaseDate="">
				<ul>
					<li>Ability to use formatters in ReportSettings file</li>
					<li>Summary now uses Rough Dimensions (includes stock extension)</li>
					<li>
						New <span className="param">EBStringSeparator</span> property to define how EB abbreviation is separated
					</li>
					<li>ProgramColumns is now ProgramListColumns in ReportSettings.js</li>
					<li>Changes to Home.html to fix TopLevel functionality</li>
				</ul>
			</Release>

			<Release version="2.5.1" ReleaseDate="">
				<ul>
					<li>Comments can now use any character. Invalid character message removed</li>
					<li>
						Added <span className="param">CommentsCp</span> property. Uses "Comments" from Custom Properties
					</li>
					<li>Ability to group Program Detailed List by frame</li>
				</ul>
			</Release>

			<Release version="2.05" ReleaseDate="">
				<ul>
					<li>
						<span className="param">UseTopLevelProperties</span> added
					</li>
					<li>Changed to Database.js to use «»</li>
					<li>Home page code changed to allow TopLevel models</li>
					<li>
						Fixed how summary comments are processed to avoid a <br />
						at the end
					</li>
				</ul>
			</Release>
			<Release version="2.04" ReleaseDate="">
				<ul>
					<li>Ability to customize report header and info displayed in home page</li>
					<li>Sorted issue where Spindle tools were not showing up in programs tab</li>
					<li>Ability to show Machining Costs</li>
					<li>Database.js now uses javascript encoding to avoid invalid character issues</li>
					<li>Company logo added to top left of print pages</li>
				</ul>
			</Release>
			<Release version="2.03" ReleaseDate="">
				<ul>
					<li>Ability to save multisheet drawing in a single PDF file</li>
					<li>Message if Panel materials does not exist in the materials library</li>
					<li>Ability to change horizontal alignment in Nesting tab</li>
					<li>Ability sort Panels in "Frame Details" different to the "Panels" tab</li>
					<li>Fixed Nested Board Description issue in Summary page</li>
					<li>Changes to calculation of nested quantity</li>
					<li>Added Labour Costs property. Used to add costs in summary</li>
					<li>Fixed issue with edgeband abbreviation for multibody panels</li>
					<li>
						Added <span className="param">Purchased</span> property to Hardware
					</li>
				</ul>
			</Release>

			<Release version="2.02" ReleaseDate="">
				<ul>
					<li>Ability to customize nested sheets Page</li>
					<li>Ability to hide or show the tool list in nested Page</li>
					<li>Format time function</li>
					<li>Ability to change Combined default names</li>
					<li>Ability to group the nested panels in the Nesting Details Page</li>
					<li>Ability to use styles in labels</li>
					<li>Ability to add prefix to labels</li>
					<li>Updated messages to check if panel fits in board</li>
					<li>Menu.js uses ((TOTYPES)CONTAINS'HARDWARE')AND(NOT(Exclude))</li>
					<li>Changes to Labels.css to fix printing issues</li>
					<li>DataBase.js moved to JS Clients folder</li>
					<li>NOT((TOTYPES)CONTAINS'HARDWARE') to Panels and Profiles loop in DataBase and Menu</li>
					<li>((TOTYPES)CONTAINS'EXCLUDED') to Excluded page and Menu</li>
					<li>Print.css file updated to fix Frame print issue that separated image from list</li>
					<li>Ability to set styles in Frame details page</li>
					<li>Frame cost properties: MaterialCost, HardwareCost, TotalCost</li>
					<li>Individual panel cost properties: CoreCost, EBCost, LAMCost, TotalCost</li>
					<li>Edgebanding abbreviations</li>
					<li>Ability to group by Hardware Type</li>
					<li>SwoodDesign, SwoodCam, SwoodNesting Properties</li>
					<li>Message if name starts with space character</li>
				</ul>
			</Release>
		</>
	)
}

export default SwoodReportReleaseNotes
