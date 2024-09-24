import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { EdgebandProperties, FrameProperties, HardwareProperties, LaminateProperties, LayerProperties, NestedPanelsProperties, PanelProperties, ProgramProperties, ProjectProperties, SheetProperties, SummaryProperties, ToolProperties } from '../../data/VariableList'
import { Section } from '../../components/Section'

const columns = [
	{ header: 'Name', property: 'Name', width: '20%' },
	{ header: 'Type', property: 'Type', width: '10%' },
	{ header: 'Source', property: 'Source', width: '10%' },
	{ header: 'Pro', property: 'Pro', width: '1%' },
	{ header: 'Description', property: 'Description', width: '50%' },
]

const SwoodReportProperties = () => {
	return (
		<>
			<PageTitle title="Swood Report Properties" />

			<nav>
				<ul>
					<li>
						<a href="#ProjectProperties">Project Properties</a>
					</li>

					<li>
						<a href="#FrameProperties">Frame Properties</a>
					</li>

					<li>
						<a href="#PanelProperties">Panel Properties</a>
					</li>

					<li>
						<a href="#LaminateProperties">Laminate Properties</a>
					</li>

					<li>
						<a href="#EdgebandProperties">Edgeband Properties</a>
					</li>

					<li>
						<a href="#LayerProperties">Layer Properties</a>
					</li>

					<li>
						<a href="#ProgramProperties">Program Properties</a>
					</li>

					<li>
						<a href="#ToolProperties">Tool Properties</a>
					</li>

					<li>
						<a href="#HardwareProperties">Hardware Properties</a>
					</li>

					<li>
						<a href="#SheetProperties">Sheet Properties</a>
					</li>

					<li>
						<a href="#NestedPanelProperties">Nested Panel Properties</a>
					</li>

					<li>
						<a href="#SummaryProperties">Summary Properties</a>
					</li>
				</ul>
			</nav>

			<Section id="ProjectProperties" title="Project Properties">
				<BasicTable columns={columns} data={ProjectProperties} />
			</Section>

			<Section id="FrameProperties" title="Frame Properties">
				<BasicTable columns={columns} data={FrameProperties} />
			</Section>

			<Section id="PanelProperties" title="Panel Properties">
				<BasicTable columns={columns} data={PanelProperties} />
			</Section>

			<Section id="LaminateProperties" title="Laminate Properties">
				<BasicTable columns={columns} data={LaminateProperties} />
			</Section>

			<Section id="EdgebandProperties" title="Edgeband Properties">
				<BasicTable columns={columns} data={EdgebandProperties} />
			</Section>

			<Section id="LayerProperties" title="Layer Properties">
				<BasicTable columns={columns} data={LayerProperties} />
			</Section>

			<Section id="ProgramProperties" title="Program Properties">
				<BasicTable columns={columns} data={ProgramProperties} />
			</Section>

			<Section id="ToolProperties" title="Tool Properties">
				<BasicTable columns={columns} data={ToolProperties} />
			</Section>

			<Section id="HardwareProperties" title="Hardware Properties">
				<BasicTable columns={columns} data={HardwareProperties} />
			</Section>

			<Section id="SheetProperties" title="Sheet Properties">
				<BasicTable columns={columns} data={SheetProperties} />
			</Section>

			<Section id="NestedPanelProperties" title="Nested Panel Properties">
				<BasicTable columns={columns} data={NestedPanelsProperties} />
			</Section>

			<Section id="SummaryProperties" title="Summary Properties">
				<BasicTable columns={columns} data={SummaryProperties} />
			</Section>
		</>
	)
}

export default SwoodReportProperties
