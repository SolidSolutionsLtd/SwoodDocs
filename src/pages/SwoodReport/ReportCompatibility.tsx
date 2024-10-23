import { SectionDivider } from '../../components/SectionDivider'
import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { ReportCompatibilityData } from '../../data/compatibility'

const columns = [
	{ header: 'Report Version', property: 'ReportVersion', width: '30%' },
	{ header: 'Swood Version', property: 'SwoodVersion', width: '30%' },
	{ header: 'Release Date', property: 'ReleaseDate', width: '30%' },
]

const ReportCompatibility = () => {
	return (
		<>
			<PageTitle title="Report compatibility" />
			<SectionDivider />

			<BasicTable columns={columns} data={ReportCompatibilityData} width={700} />
		</>
	)
}

export default ReportCompatibility
