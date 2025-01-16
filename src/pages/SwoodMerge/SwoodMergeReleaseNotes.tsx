// import { Typography } from '@mui/material'
import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Release } from '../../components/Release'

const SwoodMergeReleaseNotes = () => {
	return (
		<>
			<PageTitle title="SwoodMerge release notes" />

			<Release version="0.0.2" ReleaseDate="16/01/2025">
				<ul>
					<Typography variant="h6">Bug Fixes</Typography>
					<ul>
						<li>Fixed update link</li>
					</ul>
				</ul>
			</Release>

			<Release version="0.0.1" ReleaseDate="13/01/2025">
				<ul>
					<Typography variant="h6">Improvements</Typography>
					<ul>
						<li>Ability to backup projects database</li>
						<li>Added "open report" button after merging reports</li>
					</ul>
					<Typography variant="h6">Bug Fixes</Typography>
					<ul>
						<li>Fixed bug where nested projects were not selectable</li>
					</ul>
				</ul>
			</Release>

			<Release version="0.0.0" ReleaseDate="10/01/2025">
				<ul>
					<li>Beta release</li>
				</ul>
			</Release>
		</>
	)
}

export default SwoodMergeReleaseNotes
