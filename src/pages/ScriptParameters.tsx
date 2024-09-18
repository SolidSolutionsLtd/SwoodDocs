import { SectionDivider } from '../components/SectionDivider'
import { PageTitle } from '../components/PageTitle'
import { BasicTable } from '../components/BasicTable'
import { SwoodScriptParameters, ListOfIFStatements, ListOfConditions, MiscellaneousParameters } from '../data/ScriptData'
import { Section } from '../components/Section'

const columns = [
	{ header: 'Function', property: 'function', width: '20%' },
	{ header: 'Description', property: 'description', width: '40%' },
	{ header: '	Example of Use', property: 'example', width: '40%' },
]

const columnsIF = [
	{ header: 'IF Statements', property: 'statements', width: '20%' },
	{ header: 'Description', property: 'description', width: '40%' },
	{ header: '	Example of Use', property: 'example', width: '40%' },
]

const columnsConditions = [
	{ header: 'Condition', property: 'condition', width: '20%' },
	{ header: 'Description', property: 'description', width: '40%' },
	{ header: '	Example of Use', property: 'example', width: '40%' },
]
export const ScriptParameters = () => {
	return (
		<>
			<PageTitle title="List of Swood Script Parameters" />

			<SectionDivider />

			<BasicTable columns={columns} data={SwoodScriptParameters} />

			<Section id="#" title="List of IF Statements">
				<BasicTable columns={columnsIF} data={ListOfIFStatements} />
			</Section>

			<Section id="#" title="List of Conditions">
				<BasicTable columns={columnsConditions} data={ListOfConditions} />
			</Section>

			<Section id="#" title="Miscellaneous">
				<BasicTable columns={columnsConditions} data={MiscellaneousParameters} />
			</Section>
		</>
	)
}
