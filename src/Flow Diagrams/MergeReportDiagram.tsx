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
	// {
	// 	id: 'annotation-1',
	// 	type: 'annotation',
	// 	draggable: false,
	// 	selectable: false,
	// 	data: {
	// 		level: 1,
	// 		label: 'Built-in node and edge types. Draggable, deletable and connectable!',
	// 	},
	// 	position: { x: -80, y: -30 },
	// },
	{
		id: 'A',
		// type: 'input',
		type: 'customNode2',
		position: {
			x: -135,
			y: -165,
		},
		data: {
			label: 'Design Project A',
		},
		...nodeDefaults,
	},
	{
		id: 'B',
		// type: 'input',
		type: 'customNode2',
		position: {
			x: 165,
			y: -165,
		},
		data: {
			label: 'Design Project B',
		},
		...nodeDefaults,
	},
	{
		id: 'C',
		position: {
			x: -285,
			y: -45,
		},
		data: {
			label: 'Design Report A',
		},
		...nodeDefaults,
	},
	{
		id: 'D',
		position: {
			x: 315,
			y: -45,
		},
		data: {
			label: 'Design Report B',
		},
		...nodeDefaults,
	},
	{
		id: 'F',
		position: {
			x: 15,
			y: 45,
		},
		data: {
			label: 'Nest Project AB',
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
			label: 'Nest Report AB',
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
			label: 'MergeApplication',
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
			label: 'Merged Report AB',
		},
		...nodeDefaults,
	},
]

const initialEdges: Edge[] = [
	{
		source: 'A',
		sourceHandle: 'left',
		target: 'C',
		id: 'xy-edge__A-C',
		label: 'User runs report',
		...edgeDefaults,
	},
	{
		source: 'A',
		sourceHandle: 'right',
		target: 'F',
		id: 'xy-edge__A-F',
		...edgeDefaults,
	},
	{
		source: 'B',
		sourceHandle: 'right',
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
		label: 'Merge application runs automatically',
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

const MergeReportDiagram: React.FC = () => {
	return <FlowDiagram initialNodes={initialNodes} initialEdges={initialEdges} height="80vh" width="100%" editMode={false} fitView controls={false} miniMap={false} disableZoomPan={true} />
}

export default MergeReportDiagram
