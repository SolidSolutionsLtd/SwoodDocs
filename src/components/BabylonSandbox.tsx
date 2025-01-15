/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import * as BABYLON from '@babylonjs/core'
import { useTheme } from '../providers/MyThemeProvider'
import BabylonImageLoader from './BabylonImageLoader'

const BabylonSandbox = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [scene, setScene] = useState<BABYLON.Scene | null>(null)
	const [groupNode, setGroupNode] = useState<BABYLON.TransformNode | null>(null)
	const [meshes, setMeshes] = useState<BABYLON.AbstractMesh[] | null>(null)
	const { isDarkMode } = useTheme()

	BabylonImageLoader()

	useEffect(() => {
		if (!canvasRef.current) return

		const engine = new BABYLON.Engine(canvasRef.current, true)
		const scene = new BABYLON.Scene(engine)

		// Set the background color
		scene.clearColor = isDarkMode ? new BABYLON.Color4(15 / 255, 18 / 255, 20 / 255, 1) : new BABYLON.Color4(1, 1, 1, 1)

		// Camera setup
		const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 1000, BABYLON.Vector3.Zero(), scene)
		// Set the camera position for an isometric view
		// camera.position = new BABYLON.Vector3(1300, 1300, -1300) // You can tweak these values for different angles
		camera.position = new BABYLON.Vector3(0, 0, -1500) // You can tweak these values for different angles

		camera.attachControl(canvasRef.current, true)

		// Light setup
		new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene)

		// Create a blue material
		const blueMaterial = new BABYLON.StandardMaterial('blueMaterial', scene)
		blueMaterial.diffuseColor = new BABYLON.Color3(29 / 255, 79 / 255, 145 / 255)

		// Create a utility layer for gizmos
		const utilLayer = new BABYLON.UtilityLayerRenderer(scene)

		// Gizmo instances (reusable for any selected mesh)
		const positionGizmo = new BABYLON.PositionGizmo(utilLayer)
		positionGizmo.scaleRatio = 1.5
		const rotationGizmo = new BABYLON.RotationGizmo(utilLayer)
		const scaleGizmo = new BABYLON.ScaleGizmo(utilLayer)

		// Load the mesh
		// BABYLON.SceneLoader.ImportMeshAsync('', '', 'data:' + babylonString, scene).then(() => {
		// 	console.log('Mesh loaded successfully!')

		// 	// displayNormals(scene.meshes[0] as Mesh, scene)

		// 	// Create a TransformNode to group the meshes
		// 	const groupNode = new BABYLON.TransformNode('groupNode', scene)

		// 	// Apply blue material to each mesh
		// 	scene.meshes.forEach(mesh => {
		// 		mesh.parent = groupNode
		// 		mesh.material = blueMaterial
		// 		// displayNormals(mesh as Mesh, scene)
		// 		// store original position of mesh
		// 		mesh.metadata = { originalPosition: mesh.position.clone() }

		// 		classifyMesh(mesh)
		// 	})

		// 	setMeshes(scene.meshes)

		// 	setGroupNode(groupNode)

		// 	new BABYLON.AxesViewer(scene, 100)

		// 	enableGizmos(scene, positionGizmo, rotationGizmo, scaleGizmo)

		// 	if (groupNode) {
		// 		// Calculate the bounding box for the groupNode
		// 		const { overallMin, overallMax } = getOverallSize(groupNode)

		// 		// Calculate the center of the bounding box
		// 		// const center = overallMin.add(overallMax).scale(0.5)
		// 		// move the groupNode to center it at the origin
		// 		// groupNode.position = center.scale(-1)

		// 		// calculate bottom back center point
		// 		const bottomBackCenter = new BABYLON.Vector3((overallMin.x + overallMax.x) / 2, overallMin.y, overallMax.z)
		// 		// move mesh to bottom back center point
		// 		groupNode.position = bottomBackCenter.scale(-1)
		// 	}
		// })

		// drawRectangle(scene)
		setMeshes([drawRectangle(scene)])

		addClickEvent(scene)

		// Render loop
		engine.runRenderLoop(() => scene.render())

		// Handle window resizing
		const handleResize = () => engine.resize()
		window.addEventListener('resize', handleResize)

		setScene(scene)

		return () => {
			engine.dispose()
			window.removeEventListener('resize', handleResize)
		}
	}, [isDarkMode])

	return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default BabylonSandbox

const getMeshLocalOrientation = (mesh: BABYLON.Mesh): BABYLON.Vector3 | null => {
	if (!mesh) {
		console.error('No mesh provided')
		return null
	}

	// Ensure the mesh is not null and has a valid world matrix
	const worldMatrix = mesh.getWorldMatrix()
	if (!worldMatrix) {
		console.error('Mesh does not have a valid world matrix')
		return null
	}

	// Get the mesh's local rotation using Euler angles (mesh.rotation gives the local rotation in Euler angles)
	const localRotation = mesh.rotation

	const localRotationInDegrees = new BABYLON.Vector3(roundToNearest(BABYLON.Tools.ToDegrees(localRotation.x)), roundToNearest(BABYLON.Tools.ToDegrees(localRotation.y)), roundToNearest(BABYLON.Tools.ToDegrees(localRotation.z)))
	return localRotationInDegrees
}

const roundToNearest = (value: number, precision: number = 1) => {
	const factor = Math.pow(10, precision)
	return Math.round(value * factor) / factor
}

const enableGizmos = (scene: BABYLON.Scene, positionGizmo: BABYLON.PositionGizmo, rotationGizmo: BABYLON.RotationGizmo, scaleGizmo: BABYLON.ScaleGizmo) => {
	// Keep track of the currently selected mesh and its original material
	let selectedMesh: BABYLON.Mesh | null = null
	let originalMaterial: BABYLON.StandardMaterial | null = null

	// Create a red material for highlighting
	const redMaterial = new BABYLON.StandardMaterial('redMaterial', scene)
	redMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0) // Red color

	// Add pointer event for mesh selection
	scene.onPointerObservable.add(pointerInfo => {
		if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERPICK) {
			const pickResult = pointerInfo.pickInfo

			// Ensure pickInfo is valid
			if (pickResult?.hit && pickResult.pickedMesh) {
				const pickedMesh = pickResult.pickedMesh

				// If the picked mesh is different from the currently selected one
				if (pickedMesh !== selectedMesh) {
					// Revert the color of the previously selected mesh
					if (selectedMesh && originalMaterial) {
						selectedMesh.material = originalMaterial
					}

					// Store the original material of the newly selected mesh
					selectedMesh = pickedMesh as BABYLON.Mesh
					originalMaterial = selectedMesh.material as BABYLON.StandardMaterial

					// Apply the red material to the selected mesh
					selectedMesh.material = redMaterial

					// Attach gizmos to the selected mesh
					positionGizmo.attachedMesh = selectedMesh
					rotationGizmo.attachedMesh = selectedMesh
					scaleGizmo.attachedMesh = selectedMesh

					// const localRotationInDegrees = getMeshLocalOrientation(selectedMesh)
					// console.log(`Rotation - X: ${localRotationInDegrees?.x}, Y: ${localRotationInDegrees?.y}, Z: ${localRotationInDegrees?.z}`)
				}
			} else {
				// Clear gizmos if no valid mesh is picked
				if (selectedMesh && originalMaterial) {
					// Revert the color of the previously selected mesh
					selectedMesh.material = originalMaterial
				}

				// Clear selection and gizmos
				selectedMesh = null
				originalMaterial = null
				positionGizmo.attachedMesh = null
				rotationGizmo.attachedMesh = null
				scaleGizmo.attachedMesh = null
			}
		}
	})
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const displayNormals = (mesh: BABYLON.Mesh, scene: BABYLON.Scene) => {
	if (!mesh) return

	// Get the vertex normals and positions of the mesh
	const vertexData = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind)
	const positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind)

	if (!vertexData || !positions) return

	// Create a line for each normal
	const lines = []
	for (let i = 0; i < positions.length; i += 3) {
		const position = new BABYLON.Vector3(positions[i], positions[i + 1], positions[i + 2])
		const normal = new BABYLON.Vector3(vertexData[i], vertexData[i + 1], vertexData[i + 2])

		// Create a line that shows the normal vector starting from the vertex position
		const normalStart = position
		const normalEnd = position.add(normal.scale(100)) // Adjust scale for visibility

		lines.push([normalStart, normalEnd])
	}

	// Create a LinesMesh to represent the normal vectors
	const normalMesh = BABYLON.MeshBuilder.CreateLineSystem('normalLines', { lines: lines }, scene)
	normalMesh.color = new BABYLON.Color3(1, 0, 0) // Set color to red for visibility
}

const getOverallSize = (groupNode: BABYLON.TransformNode) => {
	let overallMin = new BABYLON.Vector3(Infinity, Infinity, Infinity)
	let overallMax = new BABYLON.Vector3(-Infinity, -Infinity, -Infinity)

	groupNode.getChildMeshes().forEach(mesh => {
		const boundingInfo = mesh.getBoundingInfo()
		const { minimumWorld, maximumWorld } = boundingInfo.boundingBox

		// Update the overall min and max
		overallMin = BABYLON.Vector3.Minimize(overallMin, minimumWorld)
		overallMax = BABYLON.Vector3.Maximize(overallMax, maximumWorld)
	})

	// calculate height, width, depth
	const result = overallMax.subtract(overallMin)
	console.log(`Overall size - Width: ${roundToNearest(result?.x)}, Height: ${roundToNearest(result?.y)}, Depth: ${roundToNearest(result?.z)}`)
	return { overallMin, overallMax }
}

const getOverallSize2 = (meshes: BABYLON.AbstractMesh[]) => {
	let overallMin = new BABYLON.Vector3(Infinity, Infinity, Infinity)
	let overallMax = new BABYLON.Vector3(-Infinity, -Infinity, -Infinity)

	meshes.forEach(mesh => {
		const boundingInfo = mesh.getBoundingInfo()
		const { minimumWorld, maximumWorld } = boundingInfo.boundingBox

		// Update the overall min and max
		overallMin = BABYLON.Vector3.Minimize(overallMin, minimumWorld)
		overallMax = BABYLON.Vector3.Maximize(overallMax, maximumWorld)
	})

	// calculate height, width, depth
	const result = overallMax.subtract(overallMin)
	console.log(`Overall size - Width: ${roundToNearest(result?.x)}, Height: ${roundToNearest(result?.y)}, Depth: ${roundToNearest(result?.z)}`)
	return { overallMin, overallMax }
}

const addClickEvent = (scene: BABYLON.Scene) => {
	scene.onPointerDown = (_e: BABYLON.IPointerEvent, pickInfo: BABYLON.PickingInfo) => {
		// Check if a mesh was clicked
		if (pickInfo.hit) {
			// Get the name of the picked mesh
			const mesh = pickInfo?.pickedMesh

			console.log(`Clicked mesh: ${mesh?.name}`)
			console.log(`originalPosition: ${mesh?.metadata.originalPosition}`)
		}
	}
}

const drawPoint = (
	scene: BABYLON.Scene | null,
	location: BABYLON.Vector3,
	color: BABYLON.Color3 = BABYLON.Color3.Red() // Default to red
) => {
	if (!scene) return

	console.log(`point=> x:${location.x}, y: ${location.y}, z: ${location.z}`)

	// Create the helper sphere
	const pivotHelper = BABYLON.MeshBuilder.CreateSphere('pivotHelper', { diameter: 50 }, scene)

	// Create and set a material with the specified color
	const material = new BABYLON.StandardMaterial('pivotHelperMat', scene)
	material.diffuseColor = color // Set the color
	pivotHelper.material = material

	// Set the position of the helper sphere
	pivotHelper.position = location
}

const scaleFromPivot = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	const _sy = sy / mesh.scaling.y
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)
	mesh.position = new BABYLON.Vector3(pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x), pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y), pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z))
}

const drawRectangle = (scene: BABYLON.Scene) => {
	// Create a 3D rectangle (box)
	const rectangle: BABYLON.AbstractMesh = BABYLON.MeshBuilder.CreateBox(
		'rectangle',
		{
			width: 500, // X-axis length
			height: 500, // Y-axis length
			depth: 5, // Z-axis thickness
		},
		scene
	)

	// Optional: Apply a material for color or texture
	const material = new BABYLON.StandardMaterial('rectMaterial', scene)
	material.diffuseColor = BABYLON.Color3.Blue() // Blue color
	rectangle.material = material

	// Add axis viewer for debugging
	new BABYLON.AxesViewer(scene, 100)

	if (!rectangle.metadata) {
		rectangle.metadata = {}
		rectangle.metadata.scalable = { x: false, y: true, z: false }
	}

	rectangle.position = new BABYLON.Vector3(500, 500, 0)

	// // Set the pivot point to the desired location
	// const pivotPoint = new BABYLON.Vector3(250, 250, 0) // Set the pivot at the edge of the rectangle
	// rectangle.setPivotPoint(pivotPoint)

	// // Adjust the mesh position to maintain its visual location
	// const pivotDelta = rectangle.getPivotPoint().scale(-1) // Correct for pivot point adjustment
	// rectangle.position.addInPlace(pivotDelta)

	// scaleFromPivot(rectangle, new BABYLON.Vector3(-250, 0, 0), 2, 1, 1)
	// let alpha = 0

	const pivotPoint = new BABYLON.Vector3(250, 250, 0)

	drawPoint(scene, pivotPoint)

	scene.onBeforeRenderObservable.add(() => {
		// alpha += 0.05
		// scaleFromPivot(rectangle, new BABYLON.Vector3(250, 0, 0), 2, 1, 1)
		// rectangle.scaling.y += 0.003 // Example: scale along Y-axis
		// rectangle.scaling.x += Math.sin(alpha) / 64 // Example: scale along Y-axis

		const currentScale = rectangle.scaling.y

		scaleFromPivot(rectangle, pivotPoint, 1, currentScale + 0.002, 1)
	})

	return rectangle
}
