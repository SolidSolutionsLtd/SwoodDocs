import { type Node, type Edge, MarkerType } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import FlowDiagram from './FlowDiagram'

const nodeDefaults = {
	// sourcePosition: Position.Right,
	// targetPosition: Position.Left,
	draggable: true, // Disable dragging
}

const edgeDefaults = {
	animated: true,
	connectable: false, // Disable dragging
	style: {
		strokeWidth: 1.5,
		stroke: 'rgb(18,85,210)',
	},
	markerEnd: {
		type: MarkerType.ArrowClosed,
		color: 'rgb(18,85,210)',
	},
}

const initialNodes: Node[] = [
	{
		id: 'A',
		type: 'input',
		position: {
			x: -235,
			y: 45,
		},
		data: {
			label: 'Project A',
		},
		...nodeDefaults,
	},
	{
		id: 'F',
		type: 'input',
		position: {
			x: 15,
			y: 45,
		},
		data: {
			label: 'Project B',
		},
		...nodeDefaults,
	},
	{
		id: 'B',
		type: 'input',
		position: {
			x: 265,
			y: 45,
		},
		data: {
			label: 'Project C',
		},
		...nodeDefaults,
	},
	{
		id: 'C',
		position: {
			x: -235,
			y: 150,
		},
		data: {
			label: 'Report A',
		},
		...nodeDefaults,
	},
	{
		id: 'D',
		position: {
			x: 265,
			y: 150,
		},
		data: {
			label: 'Report C',
		},
		...nodeDefaults,
	},
	{
		id: 'G',
		position: {
			x: 15,
			y: 150,
		},
		data: {
			label: 'Report B',
		},
		...nodeDefaults,
	},
	{
		id: 'H',
		type: 'customNode',
		position: {
			x: 15,
			y: 250,
		},
		data: {
			label: 'SwoodMerge',
		},
		...nodeDefaults,
	},
	{
		id: 'I',
		type: 'output',
		position: {
			x: 15,
			y: 350,
		},
		data: {
			label: 'Merged Report ABC',
		},
		...nodeDefaults,
	},
]

const initialEdges: Edge[] = [
	{
		source: 'A',
		target: 'C',
		id: 'xy-edge__A-C',
		label: 'User runs report',
		...edgeDefaults,
	},

	{
		source: 'B',
		target: 'D',
		id: 'xy-edge__B-D',
		label: 'User runs report',
		...edgeDefaults,
	},
	{
		source: 'B',
		sourceHandle: 'left',
		target: 'F',
		id: 'xy-edge__B-F',
		...edgeDefaults,
	},
	{
		source: 'C',
		target: 'H',
		targetHandle: 'left',
		id: 'xy-edge__C-H',
		...edgeDefaults,
	},
	{
		source: 'D',
		target: 'H',
		targetHandle: 'right',
		id: 'xy-edge__D-H',
		...edgeDefaults,
	},
	{
		source: 'F',
		target: 'G',
		id: 'xy-edge__F-G',
		...edgeDefaults,
		label: 'User runs report',
	},
	{
		source: 'G',
		target: 'H',
		id: 'xy-edge__G-H',
		...edgeDefaults,
	},
	{
		source: 'H',
		target: 'I',
		// label: 'Merge Report is generated automatically',
		id: 'xy-edge__H-I',
		...edgeDefaults,
	},
]

const SwoodMergeDiagram: React.FC = () => {
	return <FlowDiagram initialNodes={initialNodes} initialEdges={initialEdges} height="80vh" width="100%" editMode={false} fitView controls={false} miniMap={false} disableZoomPan={true} />
}

export default SwoodMergeDiagram
