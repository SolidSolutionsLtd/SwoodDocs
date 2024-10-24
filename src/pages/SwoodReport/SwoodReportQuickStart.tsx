import { Typography, Button, Box } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ImageComponent } from '../../components/ImageComponent'
import { NavLink } from 'react-router-dom'
import { Section } from '../../components/Section'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { RegisterDownload } from '../../components/RegisterDownload'
import { SolidSolutionsLicenseManagerTag, SolidWorksTag, SwoodDataDirectoryTag, SwoodEditorTag, SwoodReportTag } from '../../components/NameTags'

const SwoodReportQuickStart = () => {
	const downloadLink = 'https://sldwks.com/?AzureURL=https://downloads.solidsolutions.co.uk/swood/SwoodEditor-Setup-1.2.1.exe'
	const appVersion = '1.2.1'
	const handleDownload = async () => {
		try {
			await RegisterDownload('SwoodEditorDownloads', appVersion, 'download_SwoodEditor')
			// Trigger the download after registration is complete
			window.location.href = downloadLink
		} catch (error) {
			console.error('Error during registration: ', error)
		}
	}

	return (
		<>
			<PageTitle title="SwoodReport QuickStart" />
			<nav>
				<ul>
					<li>
						<a href="#Requirements">Requirements</a>
					</li>
					<li>
						<a href="#Editor">Swood Editor application</a>
					</li>
					<li>
						<a href="#License">Solid Solutions license manager</a>
					</li>
					<li>
						<a href="#Setup">Setup the SwoodReport</a>
					</li>
				</ul>
			</nav>

			<Section id="Requirements" title="Requirements">
				<ul>
					<li>Google Chrome.</li>
					<li>Internet connection.</li>
					<li>Swood 2024 SP0.0 or newer.</li>
				</ul>
			</Section>

			<Section id="Editor" title="Swood Editor application">
				<Typography>
					To set up the <SwoodReportTag />, start by downloading and installing the <SwoodEditorTag />.
				</Typography>

				<Typography className="red">Please note that your eligibility for this version depends on your Subscription Renewal Date.</Typography>

				<Box display="flex" justifyContent="center" className="imageBox">
					<Button variant="outlined" size="large" color="info" onClick={handleDownload} endIcon={<CloudDownloadIcon />}>
						Download SwoodEditor v{appVersion}
					</Button>
				</Box>

				<Typography>If the download doesn't start, please copy and paste the following link into a new tab:</Typography>
				<Typography>
					<span style={{ textDecoration: 'underline' }}>{downloadLink}</span>
				</Typography>

				<Typography>
					The <SwoodEditorTag /> app allows you to modify report settings, such as columns, sorting orders, and output location, as well as change default Swood settings.
				</Typography>
				<Typography>
					The Swood Editor installation manager will also install the <SolidSolutionsLicenseManagerTag /> as a prerequisite. This application is needed to activate the provided license key.
				</Typography>
				<Typography>
					Please note that the <SwoodEditorTag /> app uses the same license as the <SwoodReportTag />, so ensure that your license is active before creating a report.
				</Typography>
			</Section>

			<Section id="License" title="Solid Solutions license manager">
				<Typography>
					To activate the provided license, launch the <SolidSolutionsLicenseManagerTag /> and press the <span className="highlight">Add License</span> button as shown in the image below. <NavLink to="/SwoodLicensing">Learn More.</NavLink>
				</Typography>
				<ImageComponent source="./images/Licensing1.png" size="700px" />
			</Section>

			<Section id="Setup" title="Setup the SwoodReport">
				<Typography>
					All report settings are stored within the <span className="highlight">DAT</span> folder, located in the <SwoodDataDirectoryTag />. <NavLink to="/SwoodDataDirectory">Learn More.</NavLink>
				</Typography>
				<Typography>
					Launch the <SwoodEditorTag /> app and ensure that the <span className="highlight">DAT</span> folder is within your <SwoodDataDirectoryTag /> <span className="red">(1)</span>. The app will automatically search for the <span className="highlight">DAT</span> folder, but you can also manually define it by clicking or dragging and dropping the folder into the specified field <span className="red">(2)</span>.
				</Typography>
				<Typography>
					You can then click the <span className="highlight">Reset Report</span> <span className="red">(3)</span> option to install a fresh instance of the report, or select <span className="highlight">Update Report</span> <span className="red">(4)</span> to keep your previous settings. In both cases, the app will create a backup of your current <span className="highlight">DAT</span> folder.
				</Typography>
				<Typography>
					Please make sure to restart <SolidWorksTag /> for the changes to take effect.
				</Typography>

				<ImageComponent source="./images/ReportQuickStart.png" size="1000px" />
			</Section>
		</>
	)
}

export default SwoodReportQuickStart
