import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { ImageComponent } from '../components/ImageComponent'
import { Section } from '../components/Section'

export const CreatingDATBackups = () => {
	return (
		<>
			<PageTitle title="Creating Backups" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Create">How to Create a Backup</a>
					</li>
					<li>
						<a href="#Restore">How to Restore a Backup</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The <span className="highlight">Swood Editor</span> allows you to create backups of your <span className="highlight">DAT</span> folder, which contains all the settings used by the report.
				</Typography>
			</Section>

			<Section id="Create" title="How to Create a Backup">
				<Typography>
					To create a backup of your current <span className="highlight">DAT</span> folder, click the button shown below. This button is located in the Main section of the app.
				</Typography>
				<ImageComponent source="./images/CreateBackup.png" />
			</Section>

			<Section id="Restore" title="How to Restore a Backup">
				<Typography>
					To restore a backed-up <span className="highlight">DAT</span> folder, go to the <span className="highlight">DAT Backups</span> section of the app and click the button shown below to restore the specified backup.
				</Typography>
				<Typography>Please make sure to restart SolidWorks after restoring a backup.</Typography>
				<ImageComponent source="./images/RestoreBackup.png" />
			</Section>
		</>
	)
}
