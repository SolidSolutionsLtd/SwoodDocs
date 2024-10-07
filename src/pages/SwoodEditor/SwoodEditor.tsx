import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { SectionDivider } from '../../components/SectionDivider'
import { SolidSolutionsTag, SwoodEditorTag, SwoodReportTag, SwoodTag } from '../../components/NameTags'

const SwoodEditor = () => {
	return (
		<>
			<PageTitle title="Swood Editor" />
			<SectionDivider />

			<Typography>
				The <SwoodEditorTag /> app, developed by <SolidSolutionsTag />, offers a powerful tool for customizing and managing <SwoodReportTag /> settings. It allows users to modify various aspects of report generation, such as adjusting columns, setting sorting orders, and specifying the output location for reports.
			</Typography>

			<Typography>
				Additionally, the <SwoodEditorTag /> provides the ability to change default <SwoodTag /> settings, giving users greater flexibility and control over their woodworking design workflow. The app also keeps users up to date with the latest features and improvements through regular updates. Whether you're working on detailed design reports or optimizing your <SwoodTag /> environment, the <SwoodEditorTag /> is an essential tool for enhancing productivity and customization.
			</Typography>
		</>
	)
}

export default SwoodEditor
