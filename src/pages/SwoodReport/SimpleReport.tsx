import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const SimpleReport = () => {
	return (
		<>
			<PageTitle title="How to generate a simple report" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#SimpleReportCustomProperty">Adding a the Simple Report property</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Generating a report can take several minutes, depending on the complexity of the model and the modules enabled (e.g., Design, CAM). In cases where a draft report is needed quickly, a Simple Report may be the ideal solution.</Typography>
				<Typography>One of the longest stages in report generation is the creation of images, such as panels, programs, and frames. To address this, we have introduced a custom property that disables image generation, significantly reducing report creation times.</Typography>
			</Section>

			<Section id="SimpleReportCustomProperty" title="Adding a the Simple Report property">
				<Typography>
					To create a Simple Report, add a custom property named <span className="highlight">Simple Report</span> to the top-level assembly (the one used to generate the report) and set its value to <span className="red">Yes</span>.
				</Typography>
				<Typography>
					To disable the Simple Report, either delete the property or set its value to <span className="red">No</span>.
				</Typography>
			</Section>
		</>
	)
}

export default SimpleReport
