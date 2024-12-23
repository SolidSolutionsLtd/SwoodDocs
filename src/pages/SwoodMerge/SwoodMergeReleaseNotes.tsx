// import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Release } from '../../components/Release'

const SwoodMergeReleaseNotes = () => {
	return (
		<>
			<PageTitle title="SwoodMerge release notes" />

			<Release version="0.1.1.0" ReleaseDate="28/08/2024">
				<ul>
					<li>Beta release</li>
				</ul>
			</Release>
		</>
	)
}

export default SwoodMergeReleaseNotes
