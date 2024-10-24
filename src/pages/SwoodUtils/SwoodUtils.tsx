import { Typography, Box, ListItemText } from '@mui/material'
import { ImageComponent } from '../../components/ImageComponent'
import { NavLink } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SolidWorksTag, SwoodReportTag, SwoodUtilsTag } from '../../components/NameTags'
import { BetaDisclaimer } from '../../components/BetaDisclaimer'
import DownloadSwoodUtils from '../../components/DownloadSwoodUtils'

const SwoodUtils = () => {
	return (
		<>
			<PageTitle title="SwoodUtils" pro={true} beta={true} />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Features">Features</a>
					</li>
					<li>
						<a href="#Disclaimer">SwoodUtils disclaimer</a>
					</li>
					<li>
						<a href="#Installation">Installation</a>
					</li>
					<li>
						<a href="#Licensing">Licensing</a>
					</li>
					<li>
						<a href="#Workflow">Workflow</a>
					</li>
					<li>
						<a href="#Controls">Main controls</a>
					</li>
					<li>
						<a href="#Types">Types of IDs</a>
					</li>
					<li>
						<a href="#IDElements">Elements of an ID</a>
					</li>
					<li>
						<a href="#IDFormat">Flat ID format</a>
					</li>
					<li>
						<a href="#IDFormatNested">Nested ID format</a>
					</li>
					<li>
						<a href="#Property">ID custom property</a>
					</li>
					<li>
						<a href="#Colours">Table row colours</a>
					</li>
					<li>
						<a href="#WarningIcons">Warning icons</a>
					</li>
					<li>
						<a href="#CustomProperties">How to modify custom properties</a>
					</li>
					<li>
						<a href="#AppSettings">Application settings</a>
					</li>
					<li>
						<a href="#IDSettings">ID settings</a>
					</li>
					<li>
						<a href="#CopySettings">Copy settings between users</a>
					</li>
					<li>
						<a href="#KnownBugs">Known bugs</a>
					</li>
					<li>
						<a href="#FutureDevelopment">Future development</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography variant="body1">
					<SwoodUtilsTag /> streamlines the ID assignment process for panels and frames, providing a user-friendly interface. It also identifies identical panels, removing the need for the <span className="highlight">Combine Panels</span> macro.
				</Typography>
				<Typography variant="body1">
					Please note that <SwoodUtilsTag /> is currently in its Beta stage.
				</Typography>
			</Section>

			<Section id="Features" title="Features">
				<ul>
					<li>
						<ListItemText primary="Easily assign or remove IDs for components like frames and panels through an intuitive interface." />
					</li>
					<li>
						<ListItemText primary="Detect identical panels and automatically assign a shared ID." />
					</li>
					<li>
						<ListItemText primary="Customizable ID settings: Adjust various options within <SwoodUtilsTag/> to suit your workflow preferences." />
					</li>
					<li>
						<ListItemText primary="Manage Custom Properties: Modify settings like Frame, SubFrame, Hardware, and Exclude to control panel numbering behavior." />
					</li>
				</ul>
			</Section>

			<Box className="red">
				<Section id="Disclaimer" title="SwoodUtils disclaimer">
					<BetaDisclaimer />
				</Section>
			</Box>

			<Section id="Installation" title="Installation">
				<ol>
					<li>
						Download <SwoodUtilsTag />
						<DownloadSwoodUtils />
					</li>
					<li>
						Close <SolidWorksTag /> before proceeding.
					</li>
					<li>Run the installer and follow the on-screen instructions to complete the installation.</li>
					<li>
						Once the installation is complete, open <SolidWorksTag />.
					</li>
					<li>
						Activate the <SwoodUtilsTag /> Add-in from the Add-ins menu.
					</li>
					<li>
						Navigate to the <SwoodUtilsTag /> tab in the <SolidWorksTag /> Command Manager and click on{' '}
						<span className="highlight">
							Open <SwoodUtilsTag />
						</span>{' '}
						to start using the tool.
					</li>
					<ImageComponent source="./images/SwoodUtils/CommandManagerTabs.png" size="500px" />

					<li>
						When you run <SwoodUtilsTag /> for the first time, you’ll need to activate your license. Simply copy and paste the provided license key into the field shown below.
					</li>

					<ImageComponent source="./images/SwoodUtils/ActivateLicense.png" size="700px" />
				</ol>
			</Section>

			<Section id="Licensing" title="Licensing">
				<Typography variant="body1">
					<SwoodUtilsTag /> uses the same licensing scheme as the <span className="highlight">SwoodEditor</span>, for more information click <NavLink to="/SwoodLicensing">here</NavLink>
				</Typography>
			</Section>

			<Section id="Workflow" title="Workflow">
				<ol>
					<li>Open the assembly containing the panels you want to assign IDs to.</li>
					<li>
						Enable the <SwoodUtilsTag /> Add-in. Go to the SwoodUtils Tab and click on{' '}
						<span className="highlight">
							Open <SwoodUtilsTag />
						</span>
					</li>
					<li>
						Click the <span className="highlight">Refresh Data</span> button to load models into <SwoodUtilsTag />.
					</li>
					<li>
						Once the data is loaded, <SwoodUtilsTag /> will automatically assign TempIDs to each panel based on your settings. These TempIDs act as a preview and are not yet saved to the model.
					</li>
					<li>
						Review the assigned TempIDs, then click <span className="highlight">Save TempIDs</span> to store them as custom properties.
					</li>
					<li>
						Finally, save the assembly in <SolidWorksTag />.
					</li>
				</ol>
			</Section>

			<Section id="Controls" title="Main controls">
				<ImageComponent source="./images/SwoodUtils/Controls.png" size="500px" />

				<Box>
					<Typography variant="h6" id="RefreshData">
						1. Refresh data
					</Typography>
					<Typography>
						Updates data from <SolidWorksTag />, typically used after adding new components to an assembly or switching the active model.
					</Typography>

					<Typography variant="h6" id="TempIDs">
						2. Generate TempIDs
					</Typography>
					<Typography>
						Generates Temporary IDs for models, particularly useful after modifying custom properties. This process runs automatically after using <span className="highlight">Refresh Data</span>.
					</Typography>

					<Typography variant="h6" id="SaveTempIDs">
						3. Save TempIDs to models
					</Typography>
					<Typography>Stores the TempIDs as custom properties within the models.</Typography>

					<Typography variant="h6" id="RemoveIDs">
						4. Remove IDs from models
					</Typography>
					<Typography>Deletes the ID custom properties from all models.</Typography>

					<Typography variant="h6" id="UpdateViewOrientation">
						5. Update view orientation
					</Typography>
					<Typography>Reorients the view of models where the Front view is not normal to the Z-axis. This option is only applicable when using "CombineIdentical" and when the following warning appears on one or more panels.</Typography>

					<ImageComponent source="./images/SwoodUtils/ViewOrientation.png" size="500px" />
				</Box>
			</Section>

			<Section id="Types" title="Types of IDs">
				<Typography>
					<SwoodUtilsTag /> supports two ID schemas: Flat and Nested.
				</Typography>

				<Box className="SubSection">
					<Typography variant="h6" id="Flat">
						Flat IDs
					</Typography>
					<Typography>Flat IDs assign sequential IDs to panels.</Typography>
					<ImageComponent source="./images/SwoodUtils/Flat.png" size="1000px" />

					<Typography>
						Flat IDs also assign sequential IDs to Frames. To view the table below you must click on the <span className="highlight">Assemblies</span> tab.
					</Typography>
					<ImageComponent source="./images/SwoodUtils/FlatAssemblies.png" size="1000px" />

					<Typography variant="h6" id="Nested">
						Nested IDs
					</Typography>
					<ImageComponent source="./images/SwoodUtils/Nested.png" size="1000px" />
					<Typography>Nested IDs also assign sequential IDs, but includes a reference to the parent frame.</Typography>
				</Box>
			</Section>

			<Section id="IDElements" title="Elements of an ID">
				<Typography>IDs are constructed by combining various elements, the available elements are listed below.</Typography>

				<ul>
					<li>
						<span className="Separator tooltip">ID Separator</span>
					</li>
					<Typography>A character or set of characters that separates the elements of an ID, typically a dot or dash.</Typography>

					<br />
					<li>
						<span className="TopCustomProperty tooltip">Top-Level Custom Property</span>
					</li>
					<Typography>Represents the custom property value of the top-level assembly. This element is optional.</Typography>

					<br />
					<li>
						<span className="CustomProperty tooltip">Frame Custom Property</span>
					</li>
					<Typography>Represents the custom property value of the frame. This element is optional.</Typography>

					<br />
					<li>
						<span className="FramePrefix tooltip">Frame Prefix</span>
					</li>
					<Typography>A fixed text value. This element is optional.</Typography>

					<br />
					<li>
						<span className="FrameID tooltip">Frame ID</span>
					</li>
					<Typography>
						Number or letter generated by <SwoodUtilsTag /> for each Frame.
					</Typography>

					<br />
					<li>
						<span className="Prefix tooltip">Panel Prefix</span>
					</li>
					<Typography>A fixed text value. This element is optional.</Typography>

					<br />
					<li>
						<span className="ModelID tooltip">Panel ID</span>
					</li>
					<Typography>
						Number generated by <SwoodUtilsTag /> for each Panel.
					</Typography>
				</ul>
			</Section>

			<Section id="IDFormat" title="Flat ID format">
				<Box className="SubSection">
					<Typography variant="h5">Panels</Typography>
					<Box className="SubSection">
						<Typography variant="h6" gutterBottom>
							Elements order
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">«TopLevel Custom Property»</span>
							<span className="Separator tooltip">«ID Separator»</span>
							<span className="Prefix tooltip">«Panel Prefix»</span>
							<span className="ModelID tooltip">«PanelID»</span>
						</Typography>

						<Typography variant="h6" gutterBottom>
							Example
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="Prefix tooltip">Panel-</span>
							<span className="ModelID tooltip">1</span>
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="Prefix tooltip">Panel-</span>
							<span className="ModelID tooltip">2</span>
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="Prefix tooltip">Panel-</span>
							<span className="ModelID tooltip">3</span>
						</Typography>

						<Typography variant="h6" gutterBottom>
							Example settings
						</Typography>

						<Typography>The following settings have been used in the previous example:</Typography>

						<Box className="SubSection">
							<ul>
								<li>
									<span className="TopCustomProperty tooltip">TopLevel Custom Property</span> = Description
								</li>
								<li>
									<span className="Separator tooltip">ID Separator</span> = Dot character (.)
								</li>
								<li>
									<span className="Prefix tooltip">Panel Prefix</span> = Panel-
								</li>
							</ul>
						</Box>

						<ImageComponent source="./images/SwoodUtils/IDFormatFlatPart.png" size="800px" />
					</Box>
				</Box>
				<Box className="SubSection">
					<Typography variant="h5">Frames</Typography>
					<Box className="SubSection">
						<Typography variant="h6" gutterBottom>
							Elements order
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">«TopLevel Custom Property»</span>
							<span className="Separator tooltip">«ID Separator»</span>
							<span className="FramePrefix tooltip">«Frame Prefix»</span>
							<span className="ModelID tooltip">«Frame ID»</span>
						</Typography>

						<Typography variant="h6" gutterBottom>
							Example
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="FramePrefix tooltip">Frame-</span>
							<span className="ModelID tooltip">A</span>
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="FramePrefix tooltip">Frame-</span>
							<span className="ModelID tooltip">B</span>
						</Typography>

						<Typography>
							<span className="TopCustomProperty tooltip">Top Level</span>
							<span className="Separator tooltip">.</span>
							<span className="FramePrefix tooltip">Frame-</span>
							<span className="ModelID tooltip">C</span>
						</Typography>

						<Typography variant="h6" gutterBottom>
							Example settings
						</Typography>

						<Typography>The following settings have been used in the previous example:</Typography>

						<Box className="SubSection">
							<ul>
								<li>
									<span className="TopCustomProperty tooltip">TopLevel Custom Property</span> = Description
								</li>
								<li>
									<span className="Separator tooltip">ID Separator</span> = Dot character (.)
								</li>
								<li>
									<span className="FramePrefix tooltip">Frame Prefix</span> = Frame-
								</li>
							</ul>
						</Box>

						<ImageComponent source="./images/SwoodUtils/IDFormatFlatAssembly.png" size="800px" />
					</Box>
				</Box>
			</Section>

			<Section id="IDFormatNested" title="Nested ID format">
				<Box className="SubSection">
					<Typography variant="h6" gutterBottom>
						Elements order
					</Typography>

					<Typography>
						<span className="TopCustomProperty tooltip">«TopLevel Custom Property»</span>
						<span className="Separator tooltip">«ID Separator»</span>
						<span className="CustomProperty tooltip">«Frame Custom Property»</span>
						<span className="Separator tooltip">«ID Separator»</span>
						<span className="FramePrefix tooltip">«Frame Prefix»</span>
						<span className="FrameID tooltip">«Frame ID»</span>
						<span className="Separator tooltip">«ID Separator»</span>
						<span className="Prefix tooltip">«Panel Prefix»</span>
						<span className="ModelID tooltip">«PanelID»</span>
					</Typography>

					<Typography variant="h6" gutterBottom>
						Example
					</Typography>

					<Typography>
						<span className="TopCustomProperty tooltip">Top Level</span>
						<span className="Separator tooltip">.</span>
						<span className="CustomProperty tooltip">Drawer Cabinet</span>
						<span className="Separator tooltip">.</span>
						<span className="FramePrefix tooltip">Frame-</span>
						<span className="FrameID tooltip">A</span>
						<span className="Separator tooltip">.</span>
						<span className="Prefix tooltip">Panel-</span>
						<span className="ModelID tooltip">1</span>
					</Typography>

					<Typography>
						<span className="TopCustomProperty tooltip">Top Level</span>
						<span className="Separator tooltip">.</span>
						<span className="CustomProperty tooltip">Drawer Cabinet</span>
						<span className="Separator tooltip">.</span>
						<span className="FramePrefix tooltip">Frame-</span>
						<span className="FrameID tooltip">A</span>
						<span className="Separator tooltip">.</span>
						<span className="Prefix tooltip">Panel-</span>
						<span className="ModelID tooltip">2</span>
					</Typography>

					<Typography>
						<span className="TopCustomProperty tooltip">Top Level</span>
						<span className="Separator tooltip">.</span>
						<span className="CustomProperty tooltip">Drawer Cabinet</span>
						<span className="Separator tooltip">.</span>
						<span className="FramePrefix tooltip">Frame-</span>
						<span className="FrameID tooltip">A</span>
						<span className="Separator tooltip">.</span>
						<span className="Prefix tooltip">Panel-</span>
						<span className="ModelID tooltip">3</span>
					</Typography>

					<Typography variant="h6" gutterBottom>
						Example settings
					</Typography>
					<Typography>The following settings have been used in the previous example:</Typography>

					<Box className="SubSection">
						<ul>
							<li>
								<span className="TopCustomProperty tooltip">TopLevel Custom Property</span> = Description
							</li>
							<li>
								<span className="Separator tooltip">ID Separator</span> = Dot character (.)
							</li>
							<li>
								<span className="CustomProperty tooltip">Frame Custom Property</span> = Description
							</li>
							<li>
								<span className="FramePrefix tooltip">Frame Prefix</span> = Frame-
							</li>
							<li>
								<span className="Prefix tooltip">Panel Prefix</span> = Panel-
							</li>
						</ul>
					</Box>

					<ImageComponent source="./images/SwoodUtils/IDFormat.png" size="1000px" />
				</Box>
			</Section>

			<Section id="Property" title="ID custom property">
				<Typography>
					Clicking <span className="highlight">Save TempIDs to Models</span> will save all <span className="highlight">TempIDs</span> to the models under the custom property <span className="highlight">ID</span>.
				</Typography>
				<Typography>
					When using Nested IDs, the Frame TempID will also be saved to all panels under the custom property <span className="highlight">ParentID</span>.
				</Typography>
				<Typography>
					For legacy reasons, <span className="highlight">TempIDs</span> will additionally be saved to the custom property <span className="highlight">PanelID</span> for panels, and <span className="highlight">FrameID</span> for frames. <span className="Red">This workflow is now deprecated and should be avoided.</span>
				</Typography>
			</Section>

			<Section id="Colours" title="Table row colours">
				<Typography>Rows are colour coded to easily identify the different types of components. See example below for legend.</Typography>
				<ImageComponent source="./images/SwoodUtils/Colours.png" size="1200px" />

				<Box className="SubSection">
					<ol>
						<li>Frame component</li>
						<li>Uncategorised model</li>
						<li>Panel component</li>
						<li>SubFrame component</li>
						<li>Model excluded by custom property: Exclude = "Yes". This also applies to the Swood Material Extended Property Exclude</li>
						<li>Model excluded by custom property: ExcludeID = "Yes". This also applies to the Swood Material Extended Property ExcludeID</li>
						<li>Suppressed component</li>
						<li>Hardware component</li>
					</ol>
				</Box>
			</Section>

			<Section id="WarningIcons" title="Warning icons">
				<Box className="SubSection">
					<Box style={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant="h6">ID mismatch</Typography>

						<img src="./images/SwoodUtils/IDMismatch.png" style={{ display: 'inline', marginLeft: '15px', borderRadius: '50%', height: '50px' }} />
					</Box>
					<Typography>This warning indicates that there is at least one mismatch between the TempID and the assigned ID for the component. See the example below.</Typography>
					<ImageComponent source="./images/SwoodUtils/IDMismatchTable.png" size="800px" />

					<Box style={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant="h6">Duplicate IDs</Typography>
						<img src="./images/SwoodUtils/IDDuplicate.png" style={{ display: 'inline', marginLeft: '15px', borderRadius: '50%', height: '50px' }} />
					</Box>
					<Typography>This warning indicates that there is at least one duplicate ID in the components. See the example below.</Typography>
					<ImageComponent source="./images/SwoodUtils/IDDuplicateTable.png" size="800px" />
				</Box>
			</Section>

			<Section id="CustomProperties" title="How to modify custom properties">
				<Typography>
					Custom Properties of models can be modified by double clicking on the value of the table, making the change, and then clicking on the <span className="highlight">Update</span> button. Multiple values can be edited before clicking the <span className="highlight">Update</span> button.
				</Typography>

				<ImageComponent source="./images/SwoodUtils/ChangeCustomProperty.gif" size="800px" />

				<Typography>Only the following Custom Properties can be modified:</Typography>

				<Box className="SubSection">
					<ul>
						<li>ID</li>
						<li>Description</li>
						<li>Frame</li>
						<li>SubFrame</li>
						<li>Hardware</li>
						<li>Excluded</li>
						<li>ExcludedID</li>
					</ul>
				</Box>
			</Section>

			<Section id="AppSettings" title="Application settings">
				<Box className="SubSection">
					<Typography variant="h6">Automatic Refresh</Typography>
					<Typography>
						Automatically update the data when changes are made to the active <SolidWorksTag /> model.
					</Typography>

					<Typography variant="h6">Confirmation prompt when Adding IDs</Typography>
					<Typography>Display a confirmation prompt when adding IDs.</Typography>

					<Typography variant="h6">Confirmation prompt when Deleting IDs</Typography>
					<Typography>Display a confirmation prompt when deleting existing IDs.</Typography>

					<Typography variant="h6">Dark Mode</Typography>
					<Typography>Switch between light and dark theme.</Typography>
				</Box>
			</Section>

			<Section id="IDSettings" title="ID settings">
				<Box className="SubSection">
					<Typography variant="h6">Nested IDs</Typography>
					<Typography>Select between Nested or Flat IDs.</Typography>

					<Typography variant="h6">Persistent IDs</Typography>

					<Typography>Retains the current panel ID instead of replacing it. This option is available for Flat IDs only.</Typography>

					<Typography>
						<span className="highlight" style={{ fontWeight: 'bold' }}>
							Persistent ID Disabled:
						</span>{' '}
						TempIDs are generated without considering the existing IDs.
					</Typography>

					<ImageComponent source="./images/SwoodUtils/PersistentOff.png" size="500px" />

					<Typography>
						<span className="highlight" style={{ fontWeight: 'bold' }}>
							Persistent ID Enabled:
						</span>{' '}
						Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the next available IDs (6, 7).
					</Typography>
					<ImageComponent source="./images/SwoodUtils/PersistentOn.png" size="500px" />

					<Typography variant="h6">Reuse IDs</Typography>

					<Typography>Reassigns IDs that have not been used. This option is available for Flat IDs only.</Typography>
					<Typography>
						<span className="highlight" style={{ fontWeight: 'bold' }}>
							Reuse IDs Disabled:
						</span>{' '}
						Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the next available IDs (6, 7).
					</Typography>
					<ImageComponent source="./images/SwoodUtils/PersistentOn.png" size="500px" />

					<Typography>
						<span className="highlight" style={{ fontWeight: 'bold' }}>
							Reuse IDs Enabled:
						</span>{' '}
						Panels with existing IDs retain their original values (1, 3, 5). Panels without IDs are assigned the unused IDs (2, 4).
					</Typography>
					<ImageComponent source="./images/SwoodUtils/PersistentOnReuse.png" size="500px" />

					<Typography variant="h6">Combine Identical</Typography>
					<Typography>This feature consolidates identical panels by evaluating their geometry, material, edgebands, laminates, and grain direction, assigning a shared ID to all matching panels.</Typography>
					<Typography>Additionally, combined panels are marked with a distinct icon for easy identification in the list.</Typography>
					<ImageComponent source="./images/SwoodUtils/CombinedPanels.png" size="500px" />

					<Typography variant="h6">Order Type</Typography>
					<Typography>Specifies how IDs are ordered:</Typography>
					<ul className="SubSection">
						<li>None: Random order (fastest method)</li>
						<li>SortSettings: Order IDs based on model custom properties, such as Thickness or Length or Material</li>
						<li>FeatureTreeOrder: Follows the feature tree order (slower method)</li>
					</ul>

					<Typography>The order can also be manually changed by dragging and dropping the rows. See example below.</Typography>
					<ImageComponent source="./images/SwoodUtils/Reorder.gif" size="800px" />

					<Typography variant="h6">ID Separator</Typography>
					<Typography>A character or set of characters that separates the elements of an ID, typically a dot or dash.</Typography>

					<Typography variant="h6">Frame Alpha ID</Typography>
					<Typography>Uses letters for Frame IDs instead of numbers.</Typography>

					<Typography variant="h6">Frame Starting ID</Typography>
					<Typography>Specifies the starting value for Frame IDs.</Typography>

					<Typography variant="h6">Frame Increment Value</Typography>
					<Typography>Value used to increment Frame IDs.</Typography>

					<Typography variant="h6">Frame ID Format</Typography>
					<Typography>Defines the format for numeric Frame IDs.</Typography>

					<Typography variant="h6">Frame Fixed Prefix</Typography>
					<Typography>Fixed prefix added to all Frame IDs.</Typography>

					<Typography variant="h6">Frame Sort Order</Typography>
					<Typography>Specifies the order used to sort the feature tree. Only visible when Order Type = SortSettings</Typography>

					<Typography variant="h6">Panel Starting ID</Typography>
					<Typography>Specifies the starting value for Panel IDs.</Typography>

					<Typography variant="h6">Panel Increment Value</Typography>
					<Typography>Value used to increment Panel IDs.</Typography>

					<Typography variant="h6">Panel ID Format</Typography>
					<Typography>Defines the format for numeric Panel IDs.</Typography>

					<Typography variant="h6">Panel Fixed Prefix</Typography>
					<Typography>Fixed prefix added to all Panel IDs.</Typography>

					<Typography variant="h6">Panel Sort Order</Typography>
					<Typography>Specifies the order used to sort the panel list. Only visible when Order Type = SortSettings</Typography>

					<Typography variant="h6">Top-Level Property Prefix</Typography>
					<Typography>Custom property name from TopLevel to be used as a prefix.</Typography>

					<Typography variant="h6">Frame Level Property Prefix</Typography>
					<Typography>Custom property name from Frame to be used as a prefix.</Typography>
				</Box>
			</Section>

			<Section id="CopySettings" title="Copy settings between users">
				<Typography>Settings are stored locally on each machine, they cannot be placed on a server.</Typography>
				<Typography>
					To share settings between users, simply copy the files in{' '}
					<span className="highlight">
						C:\ProgramData\Solid Solutions\
						<SwoodUtilsTag />
					</span>{' '}
					and paste them into the same directory on the second user's system.
				</Typography>
			</Section>

			<Section id="KnownBugs" title="Known bugs">
				<Box className="SubSection">
					<ul>
						<li>Unable to manually change the feature tree order by dragging and dropping the rows.</li>
					</ul>
				</Box>
			</Section>

			<Section id="FutureDevelopment" title="Future development">
				<Typography>Here is a list of ideas/feature that have been considered for future development:</Typography>

				<Box className="SubSection">
					<ul>
						<li>
							Integrate <SwoodUtilsTag /> into the <SolidWorksTag /> Task Pane with a simplified interface, with the option to "Pop Out" into a separate window for full functionality.
						</li>
						<li>Enable persistent IDs for nested components.</li>
						<li>Ability to copy settings between users through the UI.</li>
						<li>Ability to save settings to a server.</li>
						<li>Provide the capability to generate consecutive IDs globally using a database.</li>
						<li>
							Add a button to run the <SwoodReportTag />.
						</li>
					</ul>
				</Box>
			</Section>
		</>
	)
}

export default SwoodUtils
