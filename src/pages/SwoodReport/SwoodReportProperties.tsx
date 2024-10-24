import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { Section } from '../../components/Section'
import { useCallback, useMemo, useState } from 'react'
import { SearchInput } from '../../components/SearchInput'
import { debounce, Typography } from '@mui/material'
import { ProjectProperties, FrameProperties, EdgebandProperties, PanelProperties, LaminateProperties, LayerProperties, ProgramProperties, ToolProperties, HardwareProperties, SheetProperties, NestedPanelsProperties, SummaryProperties } from '../../data/variableList'

const columns = [
	{ header: 'Name', property: 'Name', width: '20%' },
	{ header: 'Type', property: 'Type', width: '10%' },
	{ header: 'Source', property: 'Source', width: '10%' },
	{ header: 'Pro', property: 'Pro', width: '1%' },
	{ header: 'Description', property: 'Description', width: '50%' },
]

interface Filterable {
	Name?: string
	Description?: string
}

const filterItems = <T extends Filterable>(items: T[], filter: string): T[] => {
	return items
		.map(item => {
			if (item.Name?.toLowerCase().includes(filter.toLowerCase()) || item.Description?.toLowerCase().includes(filter.toLowerCase())) {
				return item
			}
			return null
		})
		.filter((item): item is T => item !== null)
}

const SwoodReportProperties = () => {
	const [filter, setFilter] = useState<string>('')

	const debouncedSetFilter = useCallback(debounce(setFilter, 300), [])

	const filteredProjectProperties = useMemo(() => filterItems(ProjectProperties, filter), [filter])
	const filteredFrameProperties = useMemo(() => filterItems(FrameProperties, filter), [filter])
	const filteredPanelProperties = useMemo(() => filterItems(PanelProperties, filter), [filter])
	const filteredLaminateProperties = useMemo(() => filterItems(LaminateProperties, filter), [filter])
	const filteredEdgebandProperties = useMemo(() => filterItems(EdgebandProperties, filter), [filter])
	const filteredLayerProperties = useMemo(() => filterItems(LayerProperties, filter), [filter])
	const filteredProgramProperties = useMemo(() => filterItems(ProgramProperties, filter), [filter])
	const filteredToolProperties = useMemo(() => filterItems(ToolProperties, filter), [filter])
	const filteredHardwareProperties = useMemo(() => filterItems(HardwareProperties, filter), [filter])
	const filteredSheetProperties = useMemo(() => filterItems(SheetProperties, filter), [filter])
	const filteredNestedPanelsProperties = useMemo(() => filterItems(NestedPanelsProperties, filter), [filter])
	const filteredSummaryProperties = useMemo(() => filterItems(SummaryProperties, filter), [filter])

	return (
		<>
			<PageTitle title="SwoodReport properties" />

			<nav>
				<ul>
					<li>
						<a href="#Search">Search</a>
					</li>
					<li>
						<a href="#ProjectProperties">Project properties</a>
					</li>
					<li>
						<a href="#FrameProperties">Frame properties</a>
					</li>
					<li>
						<a href="#PanelProperties">Panel properties</a>
					</li>
					<li>
						<a href="#LaminateProperties">Laminate properties</a>
					</li>
					<li>
						<a href="#EdgebandProperties">Edgeband properties</a>
					</li>
					<li>
						<a href="#LayerProperties">Layer properties</a>
					</li>
					<li>
						<a href="#ProgramProperties">Program properties</a>
					</li>
					<li>
						<a href="#ToolProperties">Tool properties</a>
					</li>
					<li>
						<a href="#HardwareProperties">Hardware properties</a>
					</li>
					<li>
						<a href="#SheetProperties">Sheet properties</a>
					</li>
					<li>
						<a href="#NestedPanelProperties">Nested panel properties</a>
					</li>
					<li>
						<a href="#SummaryProperties">Summary properties</a>
					</li>
				</ul>
			</nav>

			<Section id="Search" title="Search">
				<Typography>Use the search box below to filter all tables by typing keywords found in the Name or Description columns.</Typography>
				<br />
				<SearchInput setFilter={debouncedSetFilter} />
			</Section>

			{filteredProjectProperties.length === 0 &&
				filteredFrameProperties.length === 0 &&
				filteredPanelProperties.length === 0 &&
				filteredLaminateProperties.length === 0 &&
				filteredEdgebandProperties.length === 0 &&
				filteredLayerProperties.length === 0 &&
				filteredProgramProperties.length === 0 &&
				filteredToolProperties.length === 0 &&
				filteredHardwareProperties.length === 0 &&
				filteredSheetProperties.length === 0 &&
				filteredNestedPanelsProperties.length === 0 &&
				filteredSummaryProperties.length === 0 && <Typography color="textDisabled">No matches found.</Typography>}

			{filteredProjectProperties.length > 0 && (
				<Section id="ProjectProperties" title="Project properties">
					<BasicTable columns={columns} data={filteredProjectProperties} />
				</Section>
			)}
			{filteredFrameProperties.length > 0 && (
				<Section id="FrameProperties" title="Frame properties">
					<BasicTable columns={columns} data={filteredFrameProperties} />
				</Section>
			)}
			{filteredPanelProperties.length > 0 && (
				<Section id="PanelProperties" title="Panel properties">
					<BasicTable columns={columns} data={filteredPanelProperties} />
				</Section>
			)}
			{filteredLaminateProperties.length > 0 && (
				<Section id="LaminateProperties" title="Laminate properties">
					<BasicTable columns={columns} data={filteredLaminateProperties} />
				</Section>
			)}
			{filteredEdgebandProperties.length > 0 && (
				<Section id="EdgebandProperties" title="Edgeband properties">
					<BasicTable columns={columns} data={filteredEdgebandProperties} />
				</Section>
			)}
			{filteredLayerProperties.length > 0 && (
				<Section id="LayerProperties" title="Layer properties">
					<BasicTable columns={columns} data={filteredLayerProperties} />
				</Section>
			)}
			{filteredProgramProperties.length > 0 && (
				<Section id="ProgramProperties" title="Program properties">
					<BasicTable columns={columns} data={filteredProgramProperties} />
				</Section>
			)}
			{filteredToolProperties.length > 0 && (
				<Section id="ToolProperties" title="Tool properties">
					<BasicTable columns={columns} data={filteredToolProperties} />
				</Section>
			)}
			{filteredHardwareProperties.length > 0 && (
				<Section id="HardwareProperties" title="Hardware properties">
					<BasicTable columns={columns} data={filteredHardwareProperties} />
				</Section>
			)}
			{filteredSheetProperties.length > 0 && (
				<Section id="SheetProperties" title="Sheet properties">
					<BasicTable columns={columns} data={filteredSheetProperties} />
				</Section>
			)}
			{filteredNestedPanelsProperties.length > 0 && (
				<Section id="NestedPanelProperties" title="Nested panel properties">
					<BasicTable columns={columns} data={filteredNestedPanelsProperties} />
				</Section>
			)}
			{filteredSummaryProperties.length > 0 && (
				<Section id="SummaryProperties" title="Summary properties">
					<BasicTable columns={columns} data={filteredSummaryProperties} />
				</Section>
			)}
		</>
	)
}

export default SwoodReportProperties
