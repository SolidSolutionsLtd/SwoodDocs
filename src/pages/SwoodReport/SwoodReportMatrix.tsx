import { SectionDivider } from '../../components/SectionDivider'
import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { MatrixVariables } from '../../data/matrixVariables'
import { ReportPreviewLinks } from '../../components/ReportPreviewLinks'

const columns = [
	{ header: 'Item', property: 'Name', width: '30%' },
	{ header: 'Standard', property: 'Stn', width: '5%' },
	{ header: 'Professional', property: 'Pro', width: '5%' },
	{ header: 'Consultancy', property: 'Consultancy', width: '5%' },
	{ header: 'Requirements', property: 'requirements', width: '5%' },
	{ header: 'Description', property: 'Description' },
]

const SwoodReportMatrix = () => {
	return (
		<>
			<PageTitle title="SwoodReport matrix" />
			<SectionDivider />
			<ReportPreviewLinks />
			<SectionDivider />

			<BasicTable columns={columns} data={MatrixVariables} />
		</>
	)
}

export default SwoodReportMatrix
