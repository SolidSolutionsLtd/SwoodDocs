import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Release } from '../../components/Release'

const SwoodUtilsReleaseNotes = () => {
	return (
		<>
			<PageTitle title="SwoodUtils release notes" />

			<Release version="0.1.5.0" ReleaseDate="13/12/2024">
				<ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed combine issue when assemblies contained suppressed and unsuppressed instances</li>
					</ul>
				</ul>
			</Release>

			<Release version="0.1.4.0" ReleaseDate="09/10/2024">
				<ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed inability to change Panel Id format setting</li>
					</ul>
				</ul>
			</Release>

			<Release version="0.1.3.0" ReleaseDate="13/09/2024">
				<ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed issue where it would combine mirrored components</li>
					</ul>
				</ul>
			</Release>

			<Release version="0.1.2.0" ReleaseDate="02/09/2024">
				<ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>Commands disabled if model is not loaded</li>
						<li>Added Update Available indicator</li>
						<li>Added link to "Known bugs" page</li>
					</ul>
					<Typography variant="h6">Bug fixes</Typography>
					<ul>
						<li>Fixed issue where it would not recognize panels due to Swood library name</li>
						<li>Fixed issue where status message would display "Combining Data..." when no data was available</li>
					</ul>
					<Typography variant="h6">Known bugs</Typography>
					<ul>
						<li>Unable to manually change the feature tree order by dragging and dropping the rows</li>
						<li>Changing the Frame Id Format also changes the Panel Id Format</li>
					</ul>
				</ul>
			</Release>
			<Release version="0.1.1.0" ReleaseDate="28/08/2024">
				<ul>
					<li>Beta release</li>
				</ul>
			</Release>
		</>
	)
}

export default SwoodUtilsReleaseNotes
