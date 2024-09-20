import { Typography } from '@mui/material'
import { PageTitle } from '../components/PageTitle'
import { Section } from '../components/Section'
import { ProChip } from '../components/ProChip'
import { ImageComponent } from '../components/ImageComponent'

const PanelsAndStocks = () => {
	return (
		<>
			<PageTitle title="Difference Between Panels and Stocks List" />

			<nav>
				<ul>
					<li>
						<a href="#Overview">Overview</a>
					</li>
					<li>
						<a href="#Stocks">Stocks List</a>
					</li>
					<li>
						<a href="#StocksCombined">
							Combining the Stocks List <ProChip />
						</a>
					</li>
					<li>
						<a href="#Panels">Panels List</a>
					</li>
					<li>
						<a href="#PanelsCombined">
							Combining the Panels List <ProChip />
						</a>
					</li>
				</ul>
			</nav>

			<Section id="Overview" title="Overview">
				<Typography>
					By default, the Swood Report displays a <span className="highlight">Panels</span> and a <span className="highlight">Stocks</span> list. These lists present panels in different ways, which can be advantageous depending on your workflow.
				</Typography>
			</Section>

			<Section id="Stocks" title="Stocks List">
				<Typography>The purpose of the stocks list is to display the rough sizes of the panels. This list serves as a quick reference for the initial cuts needed, though secondary operations may also be required.</Typography>
			</Section>

			<Section id="StocksCombined" title="Combining the Stocks List" pro={true}>
				<Typography>Panels with the same rough sizes and materials (considering grain) can be combined into a single stock. The intention is to group identical stocks and obtain a total quantity and reduce the number of items displayed. Note that this grouping only considers the rough size of the panel, not any operations it may have undergone like pockets or holes.</Typography>
				<Typography>
					To enable combined stocks, use the <span className="highlight">SwoodEditor</span> and navigate to <span className="param">Tables &gt; Stocks</span>, and enable the <span className="highlight">Combine Stocks</span> option.
				</Typography>
				<ImageComponent source="./images/CombinedStock.png" size="150px" />
			</Section>

			<Section id="Panels" title="Panels List">
				<Typography>The purpose of the panels list is to display the finished sizes of the panels. This list will include the overall size of the panel with edgebands and laminates.</Typography>
			</Section>

			<Section id="PanelsCombined" title="Combining the Panels List" pro={true}>
				<Typography>Identical panels, considering geometry, material (including grain), edgeband position and material, and laminate material (including grain), can be combined into a single panel. The goal is to group identical panels to obtain a total quantity and reduce the number of items displayed.</Typography>
				<Typography>
					To achieve this, a macro must be run to identify identical panels. For further information, please contact <a href="mailto:SwoodApps@solidsolutions.co.uk">SwoodApps@solidsolutions.co.uk</a>.
				</Typography>

				<ImageComponent source="./images/CombinedPanel.png" size="250px" />
			</Section>
		</>
	)
}

export default PanelsAndStocks
