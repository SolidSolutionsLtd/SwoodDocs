import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SwoodTag, SwoodDataDirectoryTag } from '../../components/NameTags'

const FileName = () => {
	return (
		<>
			<PageTitle title="Issues with long file names" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>

					<li>
						<a href="#RemovePath">Rename or move the Swood data directory folder</a>
					</li>
					<li>
						<a href="#SimpleName">Define a simplified naming convention</a>
					</li>
					<li>
						<a href="#AutoNumber">Swood automatic numbering system</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Microsoft Windows has a maximum path limit of 260 characters. If the length of the path and filename combined reach this limit, Windows will not be able to save the file to the directory.</Typography>
				<Typography>
					The way <SwoodTag /> creates filenames is by concatenating the names of parts and assemblies. While this generates a unique filename, it also tends to create a long filename.
				</Typography>
				<Typography>There are a few ways to approach this:</Typography>
			</Section>

			<ul>
				<li>
					<a href="#RemovePath">Rename or move the Swood data directory folder</a>
				</li>
				<li>
					<a href="#SimpleName">Define a simplified naming convention</a>
				</li>
				<li>
					<a href="#AutoNumber">
						Use the automatic numbering system from <SwoodTag />
					</a>
				</li>
			</ul>

			<Section id="RemovePath" title="Rename or move the Swood data directory folder">
				<Typography>
					Rename or move the <SwoodDataDirectoryTag /> folder closer to the root folder of your PC to avoid unnecessary nested directories.
				</Typography>
			</Section>

			<Section id="SimpleName" title="Define a simplified naming convention">
				<Typography>Create a simplified naming convention for Parts and Assemblies, something comprised of a couple of letters and numbers.</Typography>
				<Typography>As a simple example, “HC1_DR1_T” instead of “High Cabinet Type 1_Drawer Runner Type 1_Top”.</Typography>
				<Typography>
					A simplified naming convention will not allow for a descriptive name. However, you can add a Description custom property to the file and show it in the <SwoodTag /> Task Pane. You will need to enable this setting in <span className="param">Tools &gt; SWOOD Design &gt; Settings &gt; Design &gt; Frames &gt; Show Descriptions</span>.
				</Typography>
			</Section>

			<Section id="AutoNumber" title="Swood automatic numbering system">
				<h3>Limitations</h3>
				<ul>
					<li>
						The <SwoodDataDirectoryTag /> cannot be shared in Dropbox or any similar file-sharing service due to latency.
					</li>
					<li>Used counters cannot be retrieved or reused. Once they are used, it cannot be undone.</li>
					<li>The counters carry on from the previous project; they cannot be reset to 1 for a new project.</li>
				</ul>
				<h3>Overview</h3>
				<Typography>
					The <SwoodTag /> Automatic Numbering System automatically assigns names/numbers to components. The tool lets you define prefixes for three categories: Assemblies, Sub-Assemblies, and Parts. In the example below, we have “Frame”, “SubFrame”, and “Panel” respectively. Each category has its own counter that increments each time a component is created.
				</Typography>
				<Typography>You can assign counters to all components when using the "Insert Copy" option for Frames and SwoodBoxes.</Typography>
				<ImageComponent source="./images/Numbering1.png" size="500px" />

				<Typography>
					Selecting the <span className="highlight">Use Serial Number</span> option will rename each component using the predefined prefix and the next serial number in the sequence. Notice that this method ensures that each component has a unique name, so there is no longer the need to append the assembly name.
				</Typography>
				<ImageComponent source="./images/Numbering2.png" size="500px" />

				<Typography>
					To assign a counter to a panel when using the <span className="highlight">Create a New Panel</span> option, use the <span className="highlight">Use EPDM SerialNumber</span> tick option.
				</Typography>
				<ImageComponent source="./images/Numbering4.png" size="400px" />
				<Typography>
					If you believe this is the correct solution for you, please contact <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>.
				</Typography>
			</Section>
		</>
	)
}

export default FileName
