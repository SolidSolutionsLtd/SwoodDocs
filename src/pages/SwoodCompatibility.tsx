import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { BasicTable } from '../components/BasicTable'
import { SwoodCompatibilityData } from '../data/Compatibility'

const columns = [
	{ header: 'Swood Version', property: 'SwoodVersion', width: '30%' },
	{ header: 'SolidWorks Version', property: 'SolidWorksVersion', width: '30%' },
	{ header: 'Release Date', property: 'ReleaseDate', width: '30%' },
]

export const SwoodCompatibility = () => {
	return (
		<>
			<PageTitle title="Swood Compatibility" />
			<SectionDivider />

			<BasicTable columns={columns} data={SwoodCompatibilityData} />
		</>
	)
}
