import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const Frames = () => {
	return (
		<>
			<PageTitle title="Frames" pro={true} />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define a frame</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The Report allows users to classify Assemblies or Multiple Stock Parts as a <span className="highlight">Frame</span>. The Report will list all frames in an assembly and provide detailed information on the panels, hardware, and programs within the <span className="highlight">Frame</span>.
				</Typography>
				<Typography>The Frames tab will appear if there are one or more frames in a project.</Typography>
			</Section>

			<Section id="Define" title="How to define a frame">
				<Typography>
					To define a <span className="highlight">Frame</span>, add the custom property <span className="red">Frame</span> and set the value to <span className="red">Yes</span>.
				</Typography>
			</Section>
		</>
	)
}

export default Frames
