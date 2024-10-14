import { memo } from 'react'
import { NodeProps } from '@xyflow/react'

interface AnnotationNodeProps extends NodeProps {
	data: {
		label: string
		level: number
	}
}
const AnnotationNode: React.FC<AnnotationNodeProps> = ({ data }) => {
	return (
		<>
			<div style={{ padding: 10, display: 'flex' }}>
				<div style={{ marginRight: 4 }}>{data.level}.</div>
				<div>{data.label}</div>
			</div>
		</>
	)
}

export default memo(AnnotationNode)
