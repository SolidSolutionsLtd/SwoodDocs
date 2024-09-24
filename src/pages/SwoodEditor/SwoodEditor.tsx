import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { SectionDivider } from '../../components/SectionDivider'

const SwoodEditor = () => {
	return (
		<>
			<PageTitle title="Swood Editor" />
			<SectionDivider />

			<Typography>
				The <span className="highlight">SWOOD Editor</span> app, developed by <span className="highlight">Solid Solutions</span>, offers a powerful tool for customizing and managing SWOOD report settings. It allows users to modify various aspects of report generation, such as adjusting columns, setting sorting orders, and specifying the output location for reports.
			</Typography>

			<Typography>
				Additionally, the <span className="highlight">SWOOD Editor</span> provides the ability to change default SWOOD settings, giving users greater flexibility and control over their woodworking design workflow. The app also keeps users up to date with the latest features and improvements through regular updates. Whether you're working on detailed design reports or optimizing your SWOOD environment, the <span className="highlight">SWOOD Editor</span> is an essential tool for enhancing
				productivity and customization.
			</Typography>
		</>
	)
}

export default SwoodEditor
