import { PageTitle } from '../../components/PageTitle'
import { BasicTable } from '../../components/BasicTable'
import { PanelLaminateProperties, EdgebandProperties } from '../../data/materialExtendedProperties'
import { Section } from '../../components/Section'
import { Typography } from '@mui/material'

const columns = [
	{ header: 'Name', property: 'name', width: '20%' },
	{ header: 'Type', property: 'type', width: '10%' },
	{ header: 'Pro', property: 'pro', width: '1%' },
	{ header: 'Description', property: 'description', width: '50%' },
]

const MaterialExtendedProperties = () => {
	return (
		<>
			<PageTitle title="Swood material extended properties" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#PanelProperties">Panel/laminate extended properties</a>
					</li>
					<li>
						<a href="#EdgebandProperties">Edgeband extended properties</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>material extended properties refer to additional attributes assigned to materials used within the Report. These extended properties allow users to define specific characteristics for materials beyond the basic properties.</Typography>
			</Section>

			<Section id="PanelProperties" title="Panel/laminate extended properties">
				<BasicTable columns={columns} data={PanelLaminateProperties} />
			</Section>

			<Section id="EdgebandProperties" title="Edgeband extended properties">
				<BasicTable columns={columns} data={EdgebandProperties} />
			</Section>
		</>
	)
}

export default MaterialExtendedProperties
