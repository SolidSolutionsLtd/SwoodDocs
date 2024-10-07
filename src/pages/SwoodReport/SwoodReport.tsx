import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ProChip } from '../../components/ProChip'
import { SectionDivider } from '../../components/SectionDivider'
import { NavLink } from 'react-router-dom'
import { SolidSolutionsTag, SwoodCAMTag, SwoodDesignTag, SwoodReportTag, SwoodTag } from '../../components/NameTags'

const SwoodReport = () => {
	return (
		<>
			<PageTitle title="SwoodReport" />

			<SectionDivider />

			<Typography>
				The <SwoodReportTag /> is a powerful module within the <SwoodTag /> suite that enables woodworking professionals to generate detailed, customizable production reports from their <SwoodDesignTag /> and <SwoodCAMTag /> projects. These reports streamline communication between design and manufacturing, ensuring efficiency on the shop floor.
			</Typography>

			<Typography>
				<SolidSolutionsTag /> has enhanced this module, now offering two distinct versions: the <span className="highlight">Standard</span> and <span className="highlight">Professional</span> report. Throughout this documentation, features exclusive to the Professional version will be marked with the <ProChip /> indicator. For a detailed comparison of both versions, please visit the{' '}
				<NavLink to="/SwoodReportMatrix">
					<SwoodReportTag /> Matrix
				</NavLink>
				.
			</Typography>
		</>
	)
}

export default SwoodReport
