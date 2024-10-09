// import React from 'react'
import { Canvas } from 'reaflow'

const nodes = [
	{ id: '1', text: 'SolidWorks' },
	{ id: '2', text: 'Database.js raw', fillColor: 'red' },
	{ id: '3', text: 'DatabasePost.exe' },
	{ id: '4', text: 'License' },
	{ id: '5', text: 'Clean/fix Database' },
	{ id: '6', text: 'Valid license?' },
	{ id: '7', text: 'Write Certificate' },
	{ id: '8', text: 'Process Data' },
	{ id: '9', text: 'Check Tier' },
	{ id: '10', text: 'Remove Pro' },
	{ id: '11', text: 'Add Report to projects page' },
	{ id: '12', text: 'Final Database_<name>.js' },
]

const edges = [
	{ id: '1', from: '1', to: '2' },
	{ id: '2', from: '2', to: '3' },
	{ id: '3', from: '3', to: '4' },
	{ id: '4', from: '4', to: '3' },
	{ id: '5', from: '3', to: '5' },
	{ id: '6', from: '5', to: '6' },
	{ id: '7', from: '6', to: '7' },
	{ id: '8', from: '6', to: '12' },
	{ id: '9', from: '7', to: '8' },
	{ id: '10', from: '8', to: '9' },
	{ id: '11', from: '9', to: '10' },
	{ id: '12', from: '11', to: '12' },
	{ id: '13', from: '10', to: '12' },
	{ id: '14', from: '9', to: '11' },
]

function Sandbox() {
	return <Canvas nodes={nodes} edges={edges} maxWidth={800} maxHeight={1500} />
}

export default Sandbox
