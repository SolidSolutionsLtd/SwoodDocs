// import { Tooltip, Zoom } from '@mui/material'

import { ProChip } from './ProChip'

// export const EficadTag = () => <ToolTipElement text="Eficad" tooltip="Eficad" />
export const EficadTag = () => <span className="highlight">Eficad</span>

export const SwoodTag = () => <span className="highlight">Swood</span>

export const SolidWorksTag = () => <span className="highlight">SolidWorks</span>

export const SwoodReportTag = () => <span className="highlight">SwoodReport</span>

export const SwoodReportProTag = () => (
	<>
		<SwoodReportTag />
		<ProChip />
	</>
)

export const SwoodDesignTag = () => <span className="highlight">Swood Design</span>

export const SwoodCAMTag = () => <span className="highlight">Swood CAM</span>

export const SwoodNestingTag = () => <span className="highlight">Swood Nesting</span>

export const SwoodCenterServicesTag = () => <span className="highlight">Swood Center Services</span>

export const SwoodEditorTag = () => <span className="highlight">SwoodEditor</span>

export const SwoodRXTag = () => <span className="highlight">Swood RX</span>

export const SwoodDataDirectoryTag = () => <span className="highlight">Swood Data Directory</span>

export const SwoodUtilsTag = () => <span className="highlight">SwoodUtils</span>

export const SolidSolutionsTag = () => <span className="highlight">Solid Solutions</span>

export const SolidSolutionsLicenseManagerTag = () => <span className="highlight">Solid Solutions License Manager</span>

export const SolidWorksRXTag = () => <span className="highlight">SolidWorks RX</span>

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
