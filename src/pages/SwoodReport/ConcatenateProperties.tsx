import { Typography } from '@mui/material'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const ConcatenateProperties = () => {
	return (
		<>
			<PageTitle title="Concatenate/evaluate properties" pro={true} />

			<ul>
				<li>
					<a href="#Overview">Overview</a>
				</li>
				<li>
					<a href="#Concatenate">How to concatenate properties</a>
				</li>
				<li>
					<a href="#Evaluate">How to evaluate properties</a>
				</li>
				<li>
					<a href="#ConcatenateEvaluate">How to Concatenate and evaluate properties</a>
				</li>
			</ul>

			<Section id="Overview" title="Overview">
				<Typography>Properties can be concatenated or evaluated when displayed in a table. This allows users to create custom properties for better visualization.</Typography>
			</Section>

			<Section id="Concatenate" title="How to concatenate properties">
				<Typography>
					To concatenate properties, define a new property in the SwoodEditor and wrap the properties to be concatenated between chevron characters. For example, <span className="highlight">Panel Dimensions: «Length» x «Width»</span>. For a 1000x500 panel, the table will display <span className="highlight">Panel Dimensions: 1000 x 500</span>.
				</Typography>
				<Typography>
					To add the opening chevron character, use <span className="highlight">Alt+174</span>.
				</Typography>
				<Typography>
					To add the closing chevron character, use <span className="highlight">Alt+175</span>.
				</Typography>
			</Section>

			<Section id="Evaluate" title="How to evaluate properties">
				<Typography>
					To evaluate properties, define a new property in the SwoodEditor and wrap the properties with <span className="highlight">«EVAL("PropertiesToEvaluate")»</span>. For example, <span className="highlight">Panel Area: «EVAL(«Length»*«Width»)»</span>. For a 1000x500 panel, the table will display <span className="highlight">Panel Area: 500000</span>.
				</Typography>
			</Section>

			<Section id="ConcatenateEvaluate" title="How to concatenate and evaluate properties">
				<Typography>
					Users can combine concatenation and evaluation. For example, <span className="highlight">Panel Dimensions: «Length» x «Width», Panel Area: «EVAL(«Length»*«Width»)»</span>. For a 1000x500 panel, the table will display <span className="highlight">Panel Dimensions: 1000 x 500, Panel Area: 500000</span>.
				</Typography>
			</Section>
		</>
	)
}

export default ConcatenateProperties
