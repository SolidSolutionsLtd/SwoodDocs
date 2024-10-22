import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const BeamSaw = () => {
	return (
		<>
			<PageTitle title="Beam Saw Panels" pro={true} />
			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define a beam saw panel</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					Panels can be tagged as <span className="highlight">Beam Saw</span> panels to distinguish which ones need to be sent for cutting on a <span className="highlight">Beam Saw</span>. Tagging a panel will add a saw icon next to the parts on the <span className="highlight">Panels</span> page, and create a new dropdown option in the <span className="highlight">Stocks</span> tab dedicated to <span className="highlight">Beam Saw</span> parts.
				</Typography>
				<Typography>
					Another benefit of identifying <span className="highlight">Beam Saw</span> panels is that the report will generate a separate set of labels for them.
				</Typography>
				<Typography>
					Note that <span className="highlight">Beam Saw</span> panels will not be displayed on the <span className="highlight">Stocks</span> page.
				</Typography>
			</Section>

			<Section id="Define" title="How to define a beam saw panel">
				<Typography>
					To define a Beam Saw Panel, add the custom property <span className="red">Beam Saw</span> and set the value to <span className="red">Yes</span>.
				</Typography>
			</Section>
		</>
	)
}

export default BeamSaw
