import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { SectionDivider } from '../../components/SectionDivider'
import { EficadTag, SolidWorksTag, SwoodTag } from '../../components/NameTags'

const Swood = () => {
	return (
		<>
			<PageTitle title="Swood" />
			<SectionDivider />

			<Typography>
				<SwoodTag /> is a suite of software solutions developed by <EficadTag /> and fully integrated into{' '}
				<span className="highlight">
					<SolidWorksTag />
				</span>
				. It is designed for woodworking professionals, offering tools to streamline the design, manufacturing, and production of furniture and wood-based products. <SwoodTag /> includes modules for cabinet design, panel processing, woodworking machining, and managing CNC operations.
			</Typography>

			<List>
				<ListItem>
					<ListItemText primary="Swood Design" secondary="Helps in the creation and assembly of complex woodworking projects like cabinets, doors, and panels, with parametric components and libraries for common woodworking parts." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Swood CAM" secondary="Generates CNC programs directly from the 3D model, allowing users to plan machining operations, including drilling, cutting, and grooving." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Swood Nesting" secondary="Optimizes material usage by efficiently arranging parts on wood panels for cutting." />
				</ListItem>
			</List>
		</>
	)
}

export default Swood
