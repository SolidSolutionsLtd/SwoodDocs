import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { Release } from '../components/Release'

export const SwoodUtilsReleaseNotes = () => {
	return (
		<>
			<PageTitle title="SwoodUtils Release Notes" />

			<Release version="0.1.3.0" ReleaseDate="13/09/2024">
				<ul>
					<Typography variant="h6">Bug Fixes</Typography>
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
						<li>Added link to "Known Bugs" page</li>
					</ul>
					<Typography variant="h6">Bug Fixes</Typography>
					<ul>
						<li>Fixed issue where it would not recognize panels due to Swood library name</li>
						<li>Fixed issue where status message would display "Combining Data..." when no data was available</li>
					</ul>
				</ul>
			</Release>
			<Release version="0.1.1.0" ReleaseDate="28/08/2024">
				<ul>
					<li>Beta Release</li>
				</ul>
			</Release>
		</>
	)
}
