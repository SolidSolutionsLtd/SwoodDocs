import { SectionDivider } from '../../components/SectionDivider'
import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { SwoodCompatibilityData } from '../../data/compatibility'

const columns = [
	{ header: 'Swood Version', property: 'SwoodVersion', width: '20%' },
	{ header: 'SolidWorks Version', property: 'SolidWorksVersion', width: '60%' },
	{ header: 'Release Date', property: 'ReleaseDate', width: '20%' },
]

const SwoodCompatibility = () => {
	return (
		<>
			<PageTitle title="Swood compatibility" />
			<SectionDivider />

			<BasicTable columns={columns} data={SwoodCompatibilityData} width={700} />
		</>
	)
}

export default SwoodCompatibility
