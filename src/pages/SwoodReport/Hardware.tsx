import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SwoodTag } from '../../components/NameTags'

const Hardware = () => {
	return (
		<>
			<PageTitle title="Define component as hardware" />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define hardware</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					The report allows users to classify Parts or Assemblies as <span className="highlight">Hardware</span>.
				</Typography>
				<Typography>The Hardware tab will appear if there are one or more hardware components in a project.</Typography>
			</Section>

			<Section id="Define" title="How to define hardware">
				<Typography>
					A component will be classified as <span className="highlight">Hardware</span> if its filepath contains <span className="red">/Hardwares/</span>. This means that a component will be defined as <span className="highlight">Hardware</span> if it is saved inside a folder (or any of its subfolders) called <span className="red">Hardwares</span>. Note that by default, <SwoodTag /> saves all hardware components in ".../Swood Data Directory/SWOODDesign
					<span className="red">/Hardwares/</span>
					".
				</Typography>
				<Typography>
					The <span className="highlight">Hardware</span> classification will also be assigned if a component's filepath contains <span className="red">\SOLIDWORKS DATA</span>. This ensures that all Toolbox components are classified as <span className="highlight">Hardware</span>.
				</Typography>
				<Typography>
					To manually define a <span className="highlight">Hardware</span> component, add the custom property <span className="red">Hardware</span> and set the value to <span className="red">Yes</span>.
				</Typography>
			</Section>
		</>
	)
}

export default Hardware
