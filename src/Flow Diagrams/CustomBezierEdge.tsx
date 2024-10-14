import React from 'react'
import { BaseEdge, EdgeProps } from '@xyflow/react'

interface CustomBezierEdgeProps extends EdgeProps {
	data: {
		controlPoints: { x: number; y: number }[]
	}
}

const CustomBezierEdge: React.FC<CustomBezierEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, data }) => {
	const { controlPoints } = data

	// Start with the source point
	let path = `M${sourceX},${sourceY}`

	const extension = 10
	// Add starting point extension
	controlPoints.unshift({ x: sourceX, y: sourceY + extension })
	// Add endpoint extension
	controlPoints.push({ x: targetX, y: targetY - extension })

	// Add the control points and the target point
	const points = [{ x: sourceX, y: sourceY }, ...controlPoints, { x: targetX, y: targetY }]

	// Loop through the points, creating a quadratic curve between each pair
	for (let i = 1; i < points.length - 1; i++) {
		const curr = points[i]
		const next = points[i + 1]

		// Control point is halfway between the current and next point
		const controlPoint = { x: (curr.x + next.x) / 2, y: (curr.y + next.y) / 2 }

		// Add quadratic curve to the path
		path += ` Q${curr.x},${curr.y} ${controlPoint.x},${controlPoint.y}`
	}

	// Add the final curve to the target point
	path += ` T${targetX},${targetY}`

	return <BaseEdge id={id} path={path} />
}

export default CustomBezierEdge
