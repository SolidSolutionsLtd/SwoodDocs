import { Handle, NodeProps, Position } from '@xyflow/react'
import { memo } from 'react'

interface CustomNodeProps extends NodeProps {
	data: {
		label: string
	}
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
	return (
		<div className="react-flow__node-default">
			<Handle type="target" position={Position.Top} />
			<Handle type="target" position={Position.Right} id="right" />
			<Handle type="source" position={Position.Bottom} />
			<Handle type="target" position={Position.Left} id="left" />
			<div>{data.label}</div>
		</div>
	)
}

export default memo(CustomNode)
