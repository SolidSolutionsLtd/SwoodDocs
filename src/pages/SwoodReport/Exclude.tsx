import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const Exclude = () => {
	return (
		<>
			<PageTitle title="Exclude components from report" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Define">How to define an excluded component</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>Users are able to exclude components from the report.</Typography>
				<Typography>
					When one or more components are excluded, the <span className="highlight">Panels</span> tab will display a yellow dot next to it.
				</Typography>
				<Typography>
					You are also able to see all excluded components by selecting the <span className="highlight">Excluded Items</span> tab within the <span className="highlight">Panels</span> tab.
				</Typography>
			</Section>

			<Section id="Define" title="How to define an excluded component">
				<Typography>
					To exclude a component from the report, add the custom property <span className="red">Exclude</span> and set the value to <span className="red">Yes</span>.
				</Typography>
			</Section>
		</>
	)
}

export default Exclude
