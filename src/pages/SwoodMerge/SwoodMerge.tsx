import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { ProChip } from '../../components/ProChip'
import { BetaDisclaimer } from '../../components/BetaDisclaimer'
import { SwoodCenterServicesTag, SwoodDataDirectoryTag, SwoodMaterialsTag, SwoodMergePostTag, SwoodMergeTag, SwoodReportsTag } from '../../components/NameTags'
import SwoodMergeDiagram from '../../Flow Diagrams/SwoodMergeDiagram'
import DownloadSwoodMerge from '../../components/DownloadSwoodMerge'

const SwoodMerge = () => {
	return (
		<>
			<PageTitle title="SwoodMerge" pro={true} beta={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#why-use-swoodmerge">Why use SwoodMerge?</a>
					</li>

					<li>
						<a href="#Workflow">Workflow</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Disclaimer">SwoodMerge disclaimer</a>
					</li>
					<li>
						<a href="#Setup">How to set up SwoodMerge</a>
					</li>
				</ul>
			</nav>
			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodMergeTag link={false} /> is a powerful and flexible tool designed to merge multiple <SwoodReportsTag /> reports into a single, cohesive output. Whether you're combining reports for a single project, or reusing standardized templates, <SwoodMergeTag link={false} /> provides a seamless and efficient solution.
				</Typography>

				<Typography>
					Please note that <SwoodMergeTag link={false} /> is currently in its beta phase. While we strive for a seamless experience, the application may contain errors or bugs. We appreciate your understanding and encourage you to report any issues you encounter to help us refine and improve the application.
				</Typography>
			</Section>

			<Section id="why-use-swoodmerge" title="Why use SwoodMerge?">
				<Typography>
					<SwoodMergeTag link={false} /> offers innovative solutions to improve client workflows and project management. Below are a few use case scenarios:
				</Typography>

				<Box ml={2}>
					<Typography variant="h5">Template-Based Workflow</Typography>
					<Typography>Users can create standardized reports for common items, such as cabinets. These "report templates" can be reused and combined to quickly generate new, customized project reports.</Typography>

					<Typography variant="h5">Subdivide Projects</Typography>
					<Typography>
						Large projects can be subdivided into manageable sections — for example, generating separate reports for each room in a building project. These individual reports can then be seamlessly merged using <SwoodMergeTag link={false} />.
					</Typography>

					<Typography variant="h5">Collaborative Reporting</Typography>
					<Typography>
						Team members working on different parts of a project can generate separate reports based on their contributions. These reports can then be consolidated into a single, comprehensive report using <SwoodMergeTag link={false} />, fostering collaboration and reducing redundant work.
					</Typography>
				</Box>
			</Section>

			<Section id="Workflow" title="Workflow">
				<Typography>
					Follow the steps below to merge multiple reports using <SwoodMergeTag link={false} />:
				</Typography>

				<ol>
					<li>Create the individual projects (e.g., Design, CAM, or Nesting).</li>
					<li>Generate the corresponding reports for each project.</li>
					<li>
						Open the <SwoodMergeTag link={false} /> application, select all the projects you wish to merge, and initiate the merge process.
					</li>
				</ol>

				<Typography>Once the reports are merged, you’ll have a consolidated output that integrates all the selected projects.</Typography>

				<SwoodMergeDiagram />
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Can I merge as many reports as I want?" secondary="Yes, you can use any number of reports." />
				</ListItem>
				<ListItem>
					<ListItemText primary="What should I do if any of the models change?" secondary="If a model changes, generate all associated reports and merge them again." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Are Combined IDs supported when merging reports?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Will the merge report be displayed in the Projects page?" secondary="No, this is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge a merged report?" secondary="This is not supported at the moment." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Can I change the sizes of the models when merging?"
						secondary={
							<>
								This is not possible. However, this is achievable with <SwoodCenterServicesTag />
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Can I automatically merge a nest report with all of its source files?"
						secondary={
							<>
								This is not possible. However, this is achievable with <SwoodMergePostTag />
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I merge with older report versions?" secondary="No, all reports must be version 2.11.0 or newer." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Are nesting sheets recalculated in the merged report?"
						secondary={
							<>
								The merged report does not re-optimise nested sheets. The original nested sheets are retained, which may not be the most efficient solution. However, this is achievable with <SwoodCenterServicesTag />
							</>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Are cutting patterns re-optimised in the merged report?" secondary="The merged report does not re-optimise cutting patterns. The original cutting patterns are retained, which may not be the most efficient solution." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I use the Project Quantity Custom Property?" secondary={<>This is not supported at the moment.</>} />
				</ListItem>
				<ListItem>
					<ListItemText primary="Is there a way to change the Projects Quantities of individual reports?" secondary={<>This is not supported at the moment.</>} />
				</ListItem>
				<ListItem>
					<ListItemText primary="How can I identify what reports have been merged?" secondary="At present, there is no interface to display this information. However, you can use the Raw Data Viewer to view the merged data." />
				</ListItem>
				<ImageComponent source="./images/MergeReportsData.gif" size="800px" />
				<ListItem>
					<ListItemText primary="What image will the merged report display on the home page?" secondary="The report will display the image if the first non-nest report that it finds. It is not possible to specify which source file's image will be used." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Should I disable the 'Insert Not Nested Parts' option in the nest settings?" secondary="Yes. Enabling this option will insert a single instance of un-nested parts, which can result in incorrect quantity values." />
				</ListItem>
				<ImageComponent source="./images/MergeReportsNotNestedOption.png" size="600px" />
				<ListItem>
					<ListItemText primary="Why are there original copies of the nest and design reports in the merged report folder?" secondary="These files are remnants of the merge process and are no longer needed once the merge is complete. Future developments may enable referencing these reports." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="How can I provide feedback, suggestions, or report bugs?"
						secondary={
							<>
								We value your input and encourage you to share any feedback, suggestions, or bugs you encounter. Please contact us at <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>. Your contributions help us improve and enhance our software.
							</>
						}
					/>
				</ListItem>
			</Section>

			<Section id="Requirements" title="Requirements">
				<ol>
					<li>
						SwoodReport Pro
						<ProChip /> version 2.11.0 or newer
					</li>
					<li>Swood 2024 SP0.0 or newer</li>
				</ol>
			</Section>

			<Box className="red">
				<Section id="Disclaimer" title="SwoodMerge disclaimer">
					<BetaDisclaimer />
				</Section>
			</Box>

			<Section id="Setup" title="How to set up SwoodMerge">
				<Typography>
					Setting up <SwoodMaterialsTag /> is quick and easy. Follow these steps:
				</Typography>

				<ol>
					<li>Download the installer and run it on your machine.</li>

					<Typography className="red">Please note that your eligibility for this version depends on your Subscription Renewal Date.</Typography>

					<DownloadSwoodMerge />
					<li>
						Ensure that the downloaded file has not been blocked by your machine. Right-click on the downloaded file, then go to <span className="param">Properties &gt; Unblock &gt; OK</span>. If the <span className="param">Unblock</span> option is not present, it means the file has not been blocked, and you can skip this step.
					</li>
					<ImageComponent source="./images/unblock-app.png" size="400px" />
					<li>Follow the on-screen instructions to complete the installation.</li>
					<li>
						Open the application and navigate to the settings by clicking the button in the top-right corner. Configure the following settings:
						<ul>
							<li>
								Set the <SwoodDataDirectoryTag /> in the corresponding field.
							</li>
							<li>
								Set the <span className="highlight">ProjectOutputPath</span> in the corresponding field.
							</li>
						</ul>
					</li>

					<li>
						Follow the steps outlined in the{' '}
						<a href="#Workflow" style={{ textDecoration: 'underline' }}>
							Workflow
						</a>{' '}
						section to create your first merged report.
					</li>
				</ol>
			</Section>
		</>
	)
}

export default SwoodMerge
