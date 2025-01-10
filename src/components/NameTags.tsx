// import { Tooltip, Zoom } from '@mui/material'

import { LinkElement } from './LinkElement'
import { ProChip } from './ProChip'

// export const EficadTag = () => <ToolTipElement text="Eficad" tooltip="Eficad" />
export const EficadTag = () => <span className="highlight">Eficad</span>

export const SwoodTag = () => <span className="highlight">Swood</span>

export const SolidWorksTag = () => <span className="highlight">SolidWorks</span>

export const SwoodReportTag = () => <span className="highlight">SwoodReport</span>

export const SwoodReportsTag = () => <span className="highlight">SwoodReports</span>

export const SwoodReportProTag = () => (
	<>
		<SwoodReportTag />
		<ProChip />
	</>
)

export const SwoodDesignTag = () => <span className="highlight">Swood Design</span>

export const SwoodCAMTag = () => <span className="highlight">Swood CAM</span>

export const SwoodNestingTag = () => <span className="highlight">Swood Nesting</span>

export const SwoodCenterServicesTag = ({ link = true }: { link?: boolean }) => (
	<>
		{link ? (
			<LinkElement to="https://www.solidsolutions.co.uk/manufacturing/swood-center.aspx">
				<span className="highlight">Swood Center Services</span>
			</LinkElement>
		) : (
			<span>Swood Center Services</span>
		)}
	</>
)

export const SwoodEditorTag = () => <span className="highlight">SwoodEditor</span>

export const SwoodRXTag = () => <span className="highlight">Swood RX</span>

export const SwoodDataDirectoryTag = ({ link = true }: { link?: boolean }) => (
	<>
		{link ? (
			<LinkElement to="/SwoodDataDirectory">
				<span className="highlight">Swood Data Directory</span>
			</LinkElement>
		) : (
			<span className="highlight">Swood Data Directory</span>
		)}
	</>
)

export const SwoodUtilsTag = () => <span className="highlight">SwoodUtils</span>

export const SolidSolutionsTag = () => <span className="highlight">Solid Solutions</span>

export const SolidSolutionsLicenseManagerTag = () => <span className="highlight">Solid Solutions License Manager</span>

export const SolidWorksRXTag = () => <span className="highlight">SolidWorks RX</span>

export const SwoodMergeTag = ({ link = true }: { link?: boolean }) => (
	<>
		{link ? (
			<LinkElement to="/SwoodMerge">
				<span className="highlight">SwoodMerge</span>
			</LinkElement>
		) : (
			<span className="highlight">SwoodMerge</span>
		)}
	</>
)

export const SwoodMaterialsTag = () => <span className="highlight">SwoodMaterials</span>

export const SwoodMergePostTag = ({ link = true }: { link?: boolean }) => (
	<>
		{link ? (
			<LinkElement to="/SwoodMergePost">
				<span className="highlight">SwoodMergePost</span>
			</LinkElement>
		) : (
			<span className="highlight">SwoodMergePost</span>
		)}
	</>
)

// const ToolTipElement = ({ text, tooltip }: { text: string; tooltip: string }) => (
// 	<Tooltip
// 		title={tooltip}
// 		placement="top-end"
// 		TransitionComponent={Zoom}
// 		PopperProps={{
// 			modifiers: [
// 				{
// 					name: 'offset',
// 					options: {
// 						offset: [175, 0], // Adjust the offset as needed
// 					},
// 				},
// 			],
// 		}}
// 	>
// 		<span className="highlight">{text}</span>
// 	</Tooltip>
// )
