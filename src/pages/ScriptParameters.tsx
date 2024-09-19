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

const ScriptParameters = () => {
	return (
		<>
			<PageTitle title="List of Swood Script Parameters" />

			<nav>
				<ul>
					<li>
						<a href="#Functions">Functions</a>
					</li>

					<li>
						<a href="#IFStatements">IF Statements</a>
					</li>

					<li>
						<a href="#Conditions">List of Conditions</a>
					</li>

					<li>
						<a href="#Miscellaneous">Miscellaneous</a>
					</li>
				</ul>
			</nav>

			<Section id="Functions" title="Functions">
				<BasicTable columns={columns} data={SwoodScriptParameters} />
			</Section>
			<Section id="IFStatements" title="List of IF Statements">
				<BasicTable columns={columnsIF} data={ListOfIFStatements} />
			</Section>

			<Section id="Conditions" title="List of Conditions">
				<BasicTable columns={columnsConditions} data={ListOfConditions} />
			</Section>

			<Section id="Miscellaneous" title="Miscellaneous">
				<BasicTable columns={columnsConditions} data={MiscellaneousParameters} />
			</Section>
		</>
	)
}

export default ScriptParameters
