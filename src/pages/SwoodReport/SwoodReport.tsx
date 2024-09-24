import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { ProChip } from '../../components/ProChip'
import { SectionDivider } from '../../components/SectionDivider'
import { NavLink } from 'react-router-dom'

const SwoodReport = () => {
	return (
		<>
			<PageTitle title="Swood Report" />

			<SectionDivider />

			<Typography>
				The <span className="highlight">SWOOD Report</span> is a powerful module within the SWOOD suite that enables woodworking professionals to generate detailed, customizable production reports from their SWOOD Design and SWOOD CAM projects. These reports streamline communication between design and manufacturing, ensuring efficiency on the shop floor.
			</Typography>

			<Typography>
				<span className="highlight">Solid Solutions</span> has enhanced this module, now offering two distinct versions: the <span className="highlight">Standard</span> and <span className="highlight">Professional</span> SWOOD Report. Throughout this documentation, features exclusive to the Professional version will be marked with the <ProChip /> indicator. For a detailed comparison of both versions, please visit the <NavLink to="/SwoodReportMatrix">SWOOD Report Matrix</NavLink>.
			</Typography>
		</>
	)
}

export default SwoodReport
