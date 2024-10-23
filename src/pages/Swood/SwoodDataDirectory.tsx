import { ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { SolidWorksTag, SwoodDataDirectoryTag, SwoodTag } from '../../components/NameTags'
import DataDirectoryStructure from '../../components/DataDirectoryStructure'

const SwoodDataDirectory = () => {
	return (
		<>
			<PageTitle title="Understanding the Swood data directory" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#FindSDD">How to find/set your Swood data directory</a>
					</li>
					<li>
						<a href="#structure">Swood data directory structure</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The <SwoodDataDirectoryTag /> is a centralized repository that stores essential configurations, templates, models, and databases used by <SwoodTag />. It organizes resources like material data, frames, SWOODBoxes, hardware components, and design templates to streamline workflows and ensure consistency across projects in the <SwoodTag /> ecosystem.
				</Typography>

				<Typography>
					The <SwoodDataDirectoryTag /> can be configured to reside in any local folder on your system. Alternatively, to enable shared settings and libraries across multiple users, it can be set to a networked server drive.
				</Typography>
			</Section>

			<Section id="FindSDD" title="How to find/set your Swood data directory">
				<Typography>
					You can find or set the location of the <SwoodDataDirectoryTag /> by opening <SolidWorksTag />, then using the top menu to navigate to <span className="param">Tools &gt; SWOOD Design &gt; Settings</span>.
				</Typography>
				<Typography>
					Please make sure to restart <SolidWorksTag /> if the <SwoodDataDirectoryTag /> is changed.
				</Typography>
				<ImageComponent source="./images/Setup1.png" />
			</Section>

			<Section id="structure" title="Swood data directory structure">
				<Typography>
					The <SwoodDataDirectoryTag /> is organized into multiple folders, each containing various databases, <SolidWorksTag /> models, settings, and templates tailored for your projects.
				</Typography>
				<Typography>To enhance your understanding of the different folders and their specific contents, please select a folder from the list below to view further details.</Typography>

				<br />
				<br />
				<DataDirectoryStructure />
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText
						primary={
							<>
								What would be a good location to place the <SwoodDataDirectoryTag />?
							</>
						}
						secondary={
							<>
								Ideally, the <SwoodDataDirectoryTag /> should be placed as close to the root directory as possible. Keeping it near the root (e.g., <code>C:\SwoodData</code>) helps avoid issues with the Windows filename character limit of 256 characters, which can be exceeded if the directory is nested too deeply.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								Can multiple users share the same <SwoodDataDirectoryTag />?
							</>
						}
						secondary={
							<>
								Yes, the <SwoodDataDirectoryTag /> can be set up on a shared network server, allowing multiple users to access the same settings, templates, and libraries. This setup ensures consistency across projects and facilitates team collaboration.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								Is it possible to place the <SwoodDataDirectoryTag /> on Dropbox or a similar file-sharing service?
							</>
						}
						secondary={
							<>
								It is not recommended to use Dropbox or other file-sharing services for the <SwoodDataDirectoryTag />. These systems may cause file synchronization issues, leading to potential data corruption or conflicts. For best results, use a shared network server that supports stable, multi-user access.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								How do I back up my <SwoodDataDirectoryTag />?
							</>
						}
						secondary={
							<>
								Regularly back up the <SwoodDataDirectoryTag /> by copying the entire directory to a secure location, such as an external drive or a dedicated backup server. This helps protect against data loss due to hardware failure or accidental deletion.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								What permissions are required for users accessing a shared <SwoodDataDirectoryTag />?
							</>
						}
						secondary={
							<>
								Users should have read and write permissions for the <SwoodDataDirectoryTag /> to access and modify the files as needed. For a shared network setup, confirm that the permissions are correctly set to prevent access issues or unauthorized modifications.
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<>
								Is it possible to have multiple <SwoodDataDirectoryTag /> locations?
							</>
						}
						secondary={
							<>
								While it's technically possible to have multiple <SwoodDataDirectoryTag /> locations, it is recommended to keep a single, centralized directory to avoid confusion and ensure consistency. Multiple directories can lead to mismatched settings and duplicate files.
							</>
						}
					/>
				</ListItem>
			</Section>
		</>
	)
}

export default SwoodDataDirectory
