import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { ArithmeticalFunctions, BooleanFunctions, ScriptVariableTypes, SwoodFunctions, TextFunctions } from '../../data/ScriptData'
import { Section } from '../../components/Section'
import { Typography } from '@mui/material'

const columnsConditions = [
	{ header: 'Name', property: 'name', width: '20%' },
	{ header: 'Description', property: 'description', width: '40%' },
	{ header: 'Example', property: 'example', width: '40%' },
]

const ScriptParameters = () => {
	return (
		<>
			<PageTitle title="List of Swood Script Parameters" />

			<nav>
				<ul>
					<li>
						<a href="#ArithmeticalFunctions">Arithmetical Functions</a>
					</li>
					<li>
						<a href="#BooleanFunctions">Boolean Functions</a>
					</li>
					<li>
						<a href="#TextFunctions">Text Functions</a>
					</li>
					<li>
						<a href="#SwoodFunctions">Swood Functions</a>
					</li>
					<li>
						<a href="#ScriptVariables">Script Variables</a>
					</li>
				</ul>
			</nav>

			<Section id="ArithmeticalFunctions" title="Arithmetical Functions">
				<BasicTable columns={columnsConditions} data={ArithmeticalFunctions} />
			</Section>
			<Section id="BooleanFunctions" title="Boolean Functions">
				<BasicTable columns={columnsConditions} data={BooleanFunctions} />
			</Section>
			<Section id="TextFunctions" title="Text Functions">
				<BasicTable columns={columnsConditions} data={TextFunctions} />
			</Section>
			<Section id="SwoodFunctions" title="Swood Functions">
				<BasicTable columns={columnsConditions} data={SwoodFunctions} />
			</Section>
			<Section id="ScriptVariables" title="Script Variables">
				<Typography>It is possible to define variables that are only used in the script, for example for calculations or intermediate steps. The variable declaration is written as follows:</Typography>
				<Typography>
					DIM <span className="highlight">(variable name)</span> AS <span className="highlight">(variable type)</span>
				</Typography>
				<BasicTable columns={columnsConditions} data={ScriptVariableTypes} />
			</Section>
		</>
	)
}

export default ScriptParameters
