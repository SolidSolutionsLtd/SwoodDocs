import { Link, Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'

export const SwoodLicensing = () => {
	return (
		<>
			<PageTitle title="Swood Report & Editor Licensing" />

			<nav>
				<ul>
					<li>
						<a href="#Licensing">Licensing</a>
					</li>
					<li>
						<a href="#Download">Install Solid Solutions License Manager</a>
					</li>
					<li>
						<a href="#Activation">Activation</a>
					</li>
					<li>
						<a href="#Transfer">Transfer License</a>
					</li>
					<li>
						<a href="#Refresh">Refresh License</a>
					</li>
					<li>
						<a href="#Troubleshooting">Troubleshooting</a>
					</li>
				</ul>
			</nav>

			<Section id="Licensing" title="Licensing">
				<Typography>
					All versions of the <span className="highlight">Swood Report</span> and <span className="highlight">Swood Editor</span> are licensed. Both <span className="highlight">Swood Report</span> and <span className="highlight">Swood Editor</span> use the same license. Please note that only one license of the Swood Report can be activated on a machine at any time. See{' '}
					<a href="#Transfer">
						<span className="highlight">Transfer License</span>
					</a>{' '}
					below to return a license before activating another.
				</Typography>
			</Section>

			<Section id="Download" title="Install Solid Solutions License Manager">
				<Typography>
					The <span className="highlight">Swood Report</span> and <span className="highlight">Swood Editor</span> licenses are managed by the <span className="highlight">Solid Solutions License Manager</span>. Please download and install the <span className="highlight">Solid Solutions License Manager</span> by clicking{' '}
					<Link href="https://development.solidsolutions.co.uk/solidsolutionslicensing/downloads/Solid Solutions Licensing-3.0.6649.0.exe" target="_blank">
						here
					</Link>
					.
				</Typography>
			</Section>
			<Section id="Activation" title="Activation">
				<Typography>
					Open the Solid Solutions Licensing app and click <span className="highlight">Add License</span>.
				</Typography>
				<ImageComponent source="./images/Licensing1.png" size="400px" />
				<Typography>
					You will be prompted for your license key, which should have been provided. Click <span className="highlight">Add</span> after pasting your license key.
				</Typography>
				<ImageComponent source="./images/Licensing2.png" />

				<Typography>Your license key should now appear in the list of licenses.</Typography>
				<ImageComponent source="./images/Licensing3.png" size="400px" />
			</Section>
			<Section id="Transfer" title="Transfer License">
				<Typography>Licenses are linked to a machine when activated. Therefore, it is necessary to return a license if you wish to activate it on another machine.</Typography>
				<Typography>
					To transfer a license, launch the <span className="highlight">Solid Solutions Licensing</span> app. The licenses on your machine will be displayed. Click <span className="highlight">View</span> on a license, or double-click it to view more information. You can return a license by clicking <span className="highlight">Return</span>.
				</Typography>
				<ImageComponent source="./images/Licensing4.png" size="400px" />
			</Section>
			<Section id="Refresh" title="Refresh License">
				<Typography>
					Typically, it should not be necessary to manually <span className="highlight">Refresh</span> a license. However, it may be needed if a license has been modified and those changes are not reflected on your machine. For example, if you have upgraded a Standard license to a Professional license, a manual Refresh will be necessary to update the license.
				</Typography>
				<Typography>
					To <span className="highlight">Refresh</span> the license, first launch <span className="highlight">Solid Solutions Licensing</span> on your machine, then click <span className="highlight">View</span> on the Swood Report license, followed by <span className="highlight">Refresh</span> in the license details window.
				</Typography>
			</Section>
			<Section id="Troubleshooting" title="Troubleshooting">
				<Typography>Licenses are linked to a machine using a machine identifier. This identifier can change under certain circumstances, typically due to a hardware change.</Typography>
				<Typography>If the machine identifier changes, the license will no longer be considered active on your machine. Attempting to re-activate the license will result in an error message stating the activation count has been exceeded. Please contact SWOODApps@solidsolutions.co.uk for assistance in such cases.</Typography>
			</Section>
		</>
	)
}
