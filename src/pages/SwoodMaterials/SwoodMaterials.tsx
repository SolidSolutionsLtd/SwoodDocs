import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { ProChip } from '../../components/ProChip'
import { BetaDisclaimer } from '../../components/BetaDisclaimer'
import { SwoodMaterialsTag, SwoodTag } from '../../components/NameTags'
import DownloadSwoodMaterials from '../../components/DownloadSwoodMaterials'
import { ImageComponent } from '../../components/ImageComponent'

const SwoodMaterials = () => {
	return (
		<>
			<PageTitle title="SwoodMaterials" pro={true} beta={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Features">Features</a>
					</li>
					<li>
						<a href="#Workflow">Workflow</a>
					</li>
					<li>
						<a href="#Limitations">Limitations</a>
					</li>
					<li>
						<a href="#FAQs">FAQs</a>
					</li>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Disclaimer">SwoodMaterials disclaimer</a>
					</li>
					<li>
						<a href="#Setup">How to set up SwoodMaterials</a>
					</li>
					<li>
						<a href="#future-development">Future development</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodMaterialsTag /> is a tool designed to simplify the batch import of materials into the <SwoodTag /> materials library using a user-friendly spreadsheet-style interface. It helps streamline material management for projects of any size.
				</Typography>

				<Typography>
					Please note that <SwoodMaterialsTag /> is currently in its beta phase. While we strive for a seamless experience, the application may contain errors or bugs. Your feedback is invaluable in helping us refine and improve the tool.
				</Typography>
			</Section>

			<Section id="Features" title="Features">
				<Typography>
					<strong>Key features of SwoodMaterials include:</strong>
				</Typography>
				<ul>
					<li>
						Batch import of materials into the <SwoodTag /> materials library.
					</li>
					<li>Spreadsheet-style interface for easy data entry and management.</li>
					<li>Supports copy-paste functionality with Excel for efficient data transfer.</li>
				</ul>
			</Section>

			<Section id="Limitations" title="Limitations">
				<Typography>
					While <SwoodMaterialsTag /> offers powerful features, there are some limitations to consider:
				</Typography>
				<ul>
					<li style={{ color: 'rgb(255, 72, 72)' }}>Board reusable offcuts and machinings are deleted when processed.</li>
					<li>Changes to compound materials are not supported; these are excluded from the table by default.</li>
					<li>Formulas created within the spreadsheet are not saved.</li>
					<li>All boards are saved to the root path; saving out Board folders is not supported.</li>
					<li>Defining new compound materials is not currently possible.</li>
					<li>Extended material properties cannot be modified.</li>
					<li>Data validation is not automatic; users must ensure data accuracy.</li>
				</ul>
				<Typography>Some of these limitations are temporary as the tool continues to evolve.</Typography>
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Can I save the table to Excel?" secondary="Yes, you can copy the entire table and paste it into Excel for further editing or backup purposes." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I import a table from Excel?" secondary="Yes, you can copy and paste a table directly from Excel. Be sure to preserve the header row for proper alignment." />
				</ListItem>

				<ListItem>
					<ListItemText
						primary="How can I provide feedback or report bugs?"
						secondary={
							<>
								We welcome your feedback and suggestions. Please report any issues or share ideas at <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>. Your input helps us improve.
							</>
						}
					/>
				</ListItem>
			</Section>

			<Section id="Requirements" title="Requirements">
				<Typography>To use SwoodMaterials, ensure the following:</Typography>
				<ol>
					<li>
						SwoodReport Pro <ProChip /> license
					</li>
					<li>Swood 2024 SP0.0 or newer</li>
				</ol>
			</Section>

			<Box className="red">
				<Section id="Disclaimer" title="SwoodMaterials disclaimer">
					<BetaDisclaimer />
				</Section>
			</Box>

			<Section id="Setup" title="How to set up SwoodMaterials">
				<Typography>Setting up SwoodMaterials is quick and easy. Follow these steps:</Typography>
				<ol>
					<li>Download the installer and run it on your machine.</li>
					<Typography className="red">Please note that your eligibility for this version depends on your Subscription Renewal Date.</Typography>

					<DownloadSwoodMaterials />
					<li>
						Ensure that the downloaded file has not been blocked by your machine. Right-click on the downloaded file, then go to <span className="param">Properties &gt; Unblock &gt; OK</span>. If the <span className="param">Unblock</span> option is not present, it means the file has not been blocked, and you can skip this step.
					</li>
					<ImageComponent source="./images/unblock-app.png" size="400px" />

					<li>Follow the on-screen instructions to complete the installation.</li>
				</ol>
				<Typography>Once installed, launch the application and start managing your materials.</Typography>
			</Section>

			<Section id="future-development" title="Future development">
				<Typography>
					Based on user feedback and evolving needs, here are some of the planned future developments for <SwoodMaterialsTag />:
				</Typography>
				<ul>
					<li>Ability to integrate with ERP systems</li>
					<li>Support for editing and defining compound materials directly within the tool.</li>
					<li>Enhanced validation mechanisms to ensure data accuracy before import.</li>
					<li>Improved handling of extended material properties for greater customization.</li>
				</ul>
				<Typography>
					These features aim to expand the functionality of <SwoodMaterialsTag /> while maintaining its user-friendly design. If you have specific suggestions or requirements, we encourage you to share your ideas with us at <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>.
				</Typography>
			</Section>
		</>
	)
}

export default SwoodMaterials
