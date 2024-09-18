import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { BasicTable } from '../components/BasicTable'
import { MatrixVariables } from '../data/MatrixVariables'

const columns = [
	{ header: 'Name', property: 'Name', width: '30%' },
	{ header: 'Stn', property: 'Stn', width: '10%' },
	{ header: 'Pro', property: 'Pro', width: '10%' },
	{ header: 'Description', property: 'Description' },
]

export const Matrix = () => {
	return (
		<>
			<PageTitle title="Matrix" />
			<SectionDivider />

			<BasicTable columns={columns} data={MatrixVariables} />
		</>
	)
}
