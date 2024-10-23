import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { ArithmeticalFunctions, BooleanFunctions, ScriptVariableTypes, SwoodFunctions, TextFunctions } from '../../data/scriptParameters'
import { Section } from '../../components/Section'
import { debounce, Typography } from '@mui/material'
import { SearchInput } from '../../components/SearchInput'
import { useState, useCallback, useMemo } from 'react'

const columns = [
	{ header: 'Name', property: 'name', width: '20%' },
	{ header: 'Description', property: 'description', width: '40%' },
	{ header: 'Example', property: 'example', width: '40%' },
]

interface Filterable {
	name?: string
	description?: string
	example?: string
}

const filterItems = <T extends Filterable>(items: T[], filter: string): T[] => {
	return items
		.map(item => {
			if (item.name?.toLowerCase().includes(filter.toLowerCase()) || item.description?.toLowerCase().includes(filter.toLowerCase())) {
				return item
			}
			return null
		})
		.filter((item): item is T => item !== null)
}

const ScriptParameters = () => {
	const [filter, setFilter] = useState<string>('')

	const debouncedSetFilter = useCallback(debounce(setFilter, 300), [])

	const filteredArithmeticalFunctions = useMemo(() => filterItems(ArithmeticalFunctions, filter), [filter])
	const filteredBooleanFunctions = useMemo(() => filterItems(BooleanFunctions, filter), [filter])
	const filteredTextFunctions = useMemo(() => filterItems(TextFunctions, filter), [filter])
	const filteredSwoodFunctions = useMemo(() => filterItems(SwoodFunctions, filter), [filter])
	const filteredScriptVariableTypes = useMemo(() => filterItems(ScriptVariableTypes, filter), [filter])

	return (
		<>
			<PageTitle title="List of Swood script parameters" />

			<nav>
				<ul>
					<li>
						<a href="#Search">Search</a>
					</li>
					<li>
						<a href="#ArithmeticalFunctions">Arithmetical functions</a>
					</li>
					<li>
						<a href="#BooleanFunctions">Boolean functions</a>
					</li>
					<li>
						<a href="#TextFunctions">Text functions</a>
					</li>
					<li>
						<a href="#SwoodFunctions">Swood functions</a>
					</li>
					<li>
						<a href="#ScriptVariables">Script Variables</a>
					</li>
				</ul>
			</nav>

			<Section id="Search" title="Search">
				<Typography>Use the search box below to filter all tables by typing keywords found in the Name or Description columns.</Typography>
				<br />
				<SearchInput setFilter={debouncedSetFilter} />
			</Section>

			{filteredArithmeticalFunctions.length === 0 && filteredBooleanFunctions.length === 0 && filteredTextFunctions.length === 0 && filteredSwoodFunctions.length === 0 && filteredScriptVariableTypes.length === 0 && <Typography color="textDisabled">No matches found.</Typography>}

			{filteredArithmeticalFunctions.length > 0 && (
				<Section id="ArithmeticalFunctions" title="Arithmetical functions">
					<BasicTable columns={columns} data={filteredArithmeticalFunctions} />
				</Section>
			)}

			{filteredBooleanFunctions.length > 0 && (
				<Section id="BooleanFunctions" title="Boolean functions">
					<BasicTable columns={columns} data={filteredBooleanFunctions} />
				</Section>
			)}

			{filteredTextFunctions.length > 0 && (
				<Section id="TextFunctions" title="Text functions">
					<BasicTable columns={columns} data={filteredTextFunctions} />
				</Section>
			)}

			{filteredSwoodFunctions.length > 0 && (
				<Section id="SwoodFunctions" title="Swood functions">
					<BasicTable columns={columns} data={filteredSwoodFunctions} />
				</Section>
			)}

			{filteredScriptVariableTypes.length > 0 && (
				<Section id="ScriptVariables" title="Script Variables">
					<Typography>It is possible to define variables that are only used in the script, for example for calculations or intermediate steps. The variable declaration is written as follows:</Typography>
					<Typography>
						DIM <span className="highlight">(variable name)</span> AS <span className="highlight">(variable type)</span>
					</Typography>
					<BasicTable columns={columns} data={filteredScriptVariableTypes} />
				</Section>
			)}
		</>
	)
}

export default ScriptParameters
