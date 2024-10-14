import { Handle, NodeProps, Position } from '@xyflow/react'
import { memo } from 'react'

interface CustomNodeProps extends NodeProps {
	data: {
		label: string
	}
}

const CustomNode2: React.FC<CustomNodeProps> = ({ data }) => {
	return (
		<div className="react-flow__node-default">
			<Handle type="source" position={Position.Right} id="right" />
			<Handle type="source" position={Position.Left} id="left" />
			<div>{data.label}</div>
		</div>
	)
}

export default memo(CustomNode2)
