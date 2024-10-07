import { SectionDivider } from '../../components/SectionDivider'
import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { MatrixVariables } from '../../data/MatrixVariables'

const columns = [
	{ header: '', property: 'Name', width: '30%' },
	{ header: 'Standard', property: 'Stn', width: '10%' },
	{ header: 'Professional', property: 'Pro', width: '10%' },
	{ header: 'Description', property: 'Description' },
]

const SwoodReportMatrix = () => {
	return (
		<>
			<PageTitle title="SwoodReport Matrix" />
			<SectionDivider />

			<BasicTable columns={columns} data={MatrixVariables} />
		</>
	)
}

export default SwoodReportMatrix
