import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { Section } from '../../components/Section'
import { NavLink } from 'react-router-dom'

const SwoodRX = () => {
	return (
		<>
			<PageTitle title="How to Create a Swood RX" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#SwoodRXOpen">How to Open the Swood RX Tool</a>
					</li>
					<li>
						<a href="#SwoodRXCreate">How to Package Files Using the Swood RX Tool</a>
					</li>
					<li>
						<a href="#NextSteps">Next Steps</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					<span className="highlight">Swood RX</span> is a tool developed by <span className="highlight">EFICAD</span> to streamline the process of exporting data for support requests. It should be used whenever you need to submit a request, ensuring all the required information is included to help resolve your issue efficiently.
				</Typography>
				<Typography>
					Feel free to watch this video tutorial on generating a Swood RX by clicking{' '}
					<NavLink to="https://www.youtube.com/watch?v=tomDyCP8w40" target="_blank">
						here
					</NavLink>
					.
				</Typography>
			</Section>

			<Section id="SwoodRXOpen" title="How to Open the Swood RX Tool">
				<Typography>
					The <span className="highlight">Swood RX</span> tool is installed with SWOOD and can be launched by searching for "SWOOD RX" in the Windows search bar.
				</Typography>
			</Section>

			<Section id="SwoodRXCreate" title="How to Package Files Using the Swood RX Tool">
				<Typography>To package files for support, follow these steps:</Typography>

				<ol>
					<li>
						Select the file you want to share with support. The <span className="highlight">Active document</span> option allows you to load the currently open document in SolidWorks.
					</li>
					<li>Enter your company name. This field is mandatory to create the SWOOD RX package.</li>
					<li>Select one or more SWOOD libraries to export. You can check which files are loaded by using the "Advanced selection" option. Files and folders from your SWOODData can be added by selecting the relevant boxes.</li>
					<li>Add any additional files that may help, such as videos, images, or other documents that illustrate the issue.</li>
					<li>Describe your request in detail. This helps the support team understand the problem. Providing more details reduces the number of back-and-forth communications and speeds up the resolution process.</li>
					<li>Choose a folder to save your export package.</li>
					<li>Save your SWOOD RX package.</li>
				</ol>

				<ImageComponent source="./images/SwoodRX.png" size="700px" />
			</Section>

			<Section id="NextSteps" title="Next Steps">
				<Typography>
					Once your Swood RX package is saved, a .zip file will be generated. Please send your support request and the .zip file to <a href="mailto:Support@SolidSolutions.co.uk">Support@SolidSolutions.co.uk</a>, and we will investigate the issue further.
				</Typography>
			</Section>
		</>
	)
}

export default SwoodRX
