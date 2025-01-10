import { Box, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { ProChip } from '../../components/ProChip'
import { BetaDisclaimer } from '../../components/BetaDisclaimer'
import { SwoodMaterialsTag, SwoodTag } from '../../components/NameTags'
import DownloadSwoodMaterials from '../../components/DownloadSwoodMaterials'

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
						<a href="#Workflow">Workflow</a>
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
				</ul>
			</nav>
			<Section id="Overview" title="Overview">
				<Typography>
					<SwoodMaterialsTag /> is a tool designed to batch import materials into the <SwoodTag /> materials library by using a spreadsheet-style interface
				</Typography>

				<Typography>
					Please note that <SwoodMaterialsTag /> is currently in its beta phase. While we strive for a seamless experience, the application may contain errors or bugs. We appreciate your understanding and encourage you to report any issues you encounter to help us refine and improve the application.
				</Typography>
			</Section>

			<Section id="limitations" title="Limitations">
				<ul>
					<li style={{ color: 'rgb(255, 72, 72)' }}>Board reusable offcuts and machinings get deleted</li>
					<li>Unable to make changes to compound materials, they will be excluded from the table by default</li>
					<li>Formulas created on spreadsheet do not get saved</li>
					<li>Unable to save out Board folders. All boards will be saved to the root path</li>
					<li>Unable to define compound materials</li>
					<li>Unable to change extended properties of materials</li>
					<li>Data is not validated. User must ensure data is correct</li>
				</ul>
			</Section>

			<Section id="FAQs" title="FAQs">
				<ListItem>
					<ListItemText primary="Can I save the table to Excel?" secondary="Yes, you can select the entire table and copy and paste it to Excel." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Can I import a table from Excel?" secondary="Yes, you can copy and paste a table from Excel. Make sure the header rows stays intact." />
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
						<ProChip /> license
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
				<ol>
					<li>Download the installer and run it.</li>

					<Typography className="red">Note: Your eligibility for this version depends on your Subscription Renewal Date.</Typography>

					<DownloadSwoodMaterials />
				</ol>
			</Section>
		</>
	)
}

export default SwoodMaterials
