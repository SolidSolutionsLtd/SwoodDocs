import { useCallback } from 'react'
import { ReactFlow, addEdge, useNodesState, useEdgesState, MiniMap, Controls, type Node, type Edge, type OnConnect, Background } from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import CustomBezierEdge from './CustomBezierEdge'
import CustomNode from './CustomNode'
import AnnotationNode from './AnnotationNode'
import CustomNode2 from './CustomNode2'
import { useTheme } from '../providers/MyThemeProvider'

interface FlowDiagramProps {
	initialNodes: Node[]
	initialEdges: Edge[]
	width: string
	height: string
	editMode?: boolean
	fitView?: boolean
	miniMap?: boolean
	controls?: boolean
	disableZoomPan?: boolean
}

const edgeTypes = {
	'custom-bezier-edge': CustomBezierEdge,
}

const FitViewOptions = {
	// minZoom: 1,
	// maxZoom: 5,
	// duration: 1000,
	// nodes?: (Partial<Node> & { id: Node['id'] })[]
}

const initialViewport = { x: 500, y: 100, zoom: 1.5 }

// const styles = {
// 	background: 'rgb(15,18,20)',
// 	width: '100%',
// 	// height: 300,
// }

const nodeTypes = { customNode: CustomNode, customNode2: CustomNode2, annotation: AnnotationNode }

const FlowDiagram: React.FC<FlowDiagramProps> = ({ initialNodes, initialEdges, height, width, editMode, fitView, miniMap = true, controls = true, disableZoomPan = false }) => {
	const [nodes, , onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	const { isDarkMode } = useTheme()

	const onConnect: OnConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges])

	const styles = {
		background: isDarkMode ? 'rgb(15,18,20)' : 'white',
		width: '100%',
		// height: 300,
	}

	const handleCapture = useCallback(() => {
		console.log('Nodes:', nodes)
		console.log('Edges:', edges)
	}, [nodes, edges])

	return (
		<>
			<div style={{ width, height }}>
				<ReactFlow
					style={styles}
					nodes={nodes}
					edges={edges}
					nodeTypes={nodeTypes}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					edgeTypes={edgeTypes}
					onConnect={onConnect}
					colorMode={isDarkMode ? 'dark' : 'light'}
					snapToGrid
					zoomOnScroll={!disableZoomPan}
					zoomOnPinch={!disableZoomPan}
					panOnScroll={!disableZoomPan}
					panOnDrag={!disableZoomPan}
					preventScrolling={!disableZoomPan}
					{...(fitView ? { fitView, fitViewOptions: FitViewOptions } : { defaultViewport: initialViewport })}
				>
					{miniMap && <MiniMap />}
					{controls && <Controls />}
					{editMode && <Background />}
				</ReactFlow>
			</div>
			{editMode && <button onClick={handleCapture}>Capture Nodes and Edges</button>}
		</>
	)
}

export default FlowDiagram
