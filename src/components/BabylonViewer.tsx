/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import * as BABYLON from '@babylonjs/core'
import { useTheme } from '../providers/MyThemeProvider'
import BabylonImageLoader from './BabylonImageLoader'

interface IProps {
	babylonString: string
	babylonassets?: string
	height: number
	width: number
	depth: number
	radial: number
}

// const BabylonViewer: React.FC<IProps> = ({ babylonString, babylonassets, height, width, depth }) => {
const BabylonViewer: React.FC<IProps> = ({ babylonString, height, width, depth, radial }) => {
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
		// const cameraFocus = BABYLON.Vector3.Zero()
		const cameraFocus = new BABYLON.Vector3(300, 300, 0)
		const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 1000, cameraFocus, scene)
		// Set the camera position for an isometric view
		camera.position = new BABYLON.Vector3(1300, 1300, -1300) // You can tweak these values for different angles
		// camera.position = new BABYLON.Vector3(0, 0, -1500) // You can tweak these values for different angles

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
		BABYLON.SceneLoader.ImportMeshAsync('', '', 'data:' + babylonString, scene).then(() => {
			console.log('Mesh loaded successfully!')

			// displayNormals(scene.meshes[0] as Mesh, scene)

			// Create a TransformNode to group the meshes
			const groupNode = new BABYLON.TransformNode('groupNode', scene)

			// Apply blue material to each mesh
			scene.meshes.forEach(mesh => {
				mesh.parent = groupNode
				mesh.material = blueMaterial
				// displayNormals(mesh as Mesh, scene)
				// store original position of mesh
				mesh.metadata = { originalPosition: mesh.position.clone() }

				classifyMesh(mesh, scene)
			})

			setMeshes(scene.meshes)

			setGroupNode(groupNode)

			new BABYLON.AxesViewer(scene, 100)

			enableGizmos(scene, positionGizmo, rotationGizmo, scaleGizmo)

			// if (groupNode) {
			// 	// Calculate the bounding box for the groupNode
			// 	const { overallMin, overallMax } = getOverallSize(groupNode)

			// 	// Calculate the center of the bounding box
			// 	// const center = overallMin.add(overallMax).scale(0.5)
			// 	// move the groupNode to center it at the origin
			// 	// groupNode.position = center.scale(-1)

			// 	// calculate bottom back center point
			// 	const bottomBackCenter = new BABYLON.Vector3((overallMin.x + overallMax.x) / 2, overallMin.y, overallMax.z)
			// 	// move mesh to bottom back center point
			// 	groupNode.position = bottomBackCenter.scale(-1)
			// }
		})

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
	}, [babylonString, isDarkMode])

	useEffect(() => {
		// if (groupNode) groupNode.scaling = new BABYLON.Vector3(width, height, depth)
	}, [height, width, depth, groupNode])

	useEffect(() => {
		ScaleModelHeight(meshes, height, scene)
	}, [height, meshes])

	useEffect(() => {
		// ScaleModelWidth(meshes, width)
		// }, [meshes, width, initialPositionsRef])
	}, [width, meshes])

	useEffect(() => {
		// moveMeshesRadially(meshes, radial)
	}, [radial, meshes])

	return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default BabylonViewer

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

const moveMeshesRadially = (meshes: BABYLON.AbstractMesh[] | null, distance: number) => {
	if (!meshes) return

	// TODO not working properly
	meshes.forEach(mesh => {
		// Calculate the direction vector from the origin to the mesh's position
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const direction = mesh.position.clone().normalize()

		// Move the mesh along this direction
		mesh.position.addInPlace(direction.scale(distance))
	})
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

const ScaleModelHeight = (meshes: BABYLON.AbstractMesh[] | null, height: number, scene: BABYLON.Scene | null) => {
	// height = 1000
	const initialHeight = 800
	const scaleValue = height / initialHeight
	const distance = height - initialHeight

	if (meshes) {
		meshes.forEach(mesh => {
			const orientation = getMeshLocalOrientation(mesh as BABYLON.Mesh)
			if (!orientation) return
			if (!mesh.metadata?.scalable) return

			// if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new BABYLON.Vector3(1, 1, scaleValue)
			// if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) mesh.position.x += 40
			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) mesh.position.x += -40

			if (mesh.metadata.scalable.y && mesh.metadata.scalable.x) {
				const pivotPoint = new BABYLON.Vector3(300, 0, -100)
				drawPoint(scene, pivotPoint, BABYLON.Color3.Green())
				scaleFromPivot3(mesh, pivotPoint, 1, 1, scaleValue)
			} else if (mesh.metadata.scalable.y) {
				const pivotPoint = new BABYLON.Vector3(600, 0, 0)
				drawPoint(scene, pivotPoint)
				scaleFromPivot2(mesh, pivotPoint, scaleValue, 1, 1)

				// // Works for depth
				// const pivotPoint = new BABYLON.Vector3(300, 0, 0)
				// drawPoint(scene, pivotPoint)
				// scaleFromPivot(mesh, pivotPoint, 1, 1, scaleValue)

				// mesh.scaling.z = scaleValue
			}

			if (!mesh.metadata.scalable.y) {
				const { y } = mesh.metadata.originalPosition
				const scaledDistance = y / initialHeight
				const newPosition = y + distance * scaledDistance
				mesh.position.y = newPosition
			}

			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) {
			// 	const initialPos = mesh.metadata.originalPosition

			// 	// Update the mesh's position if an initial position was found
			// 	if (initialPos) {
			// 		if (mesh.name === 'body0054') {
			// 			console.log('found body0054', initialPos.x)
			// 		}
			// 		const newPosition = initialPos.x - distance
			// 		mesh.position.x = newPosition
			// 	}
			// }
		})
	}
}

const ScaleModelWidth = (meshes: BABYLON.AbstractMesh[] | null, width: number) => {
	const initialWidth = 600
	const scaleValue = width / initialWidth
	const distance = (width - initialWidth) / 2

	console.log('distance', distance)

	if (meshes) {
		meshes.forEach(mesh => {
			const orientation = getMeshLocalOrientation(mesh as BABYLON.Mesh)
			if (!orientation) return

			// scaled elements
			if (orientation.x === 0 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			else if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) mesh.scaling = new BABYLON.Vector3(1, 1, scaleValue)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// moved elements
			// else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) mesh.position.x += distance
			// else if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) mesh.position.x += -distance

			if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) {
				const initialPos = mesh.metadata.originalPosition

				// Update the mesh's position if an initial position was found
				if (initialPos) {
					if (mesh.name === 'body0054') {
						console.log('found body0054', initialPos.x)
					}
					const newPosition = initialPos.x + distance
					mesh.position.x = newPosition
				}
			}
			if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) {
				const initialPos = mesh.metadata.originalPosition

				// Update the mesh's position if an initial position was found
				if (initialPos) {
					if (mesh.name === 'body0054') {
						console.log('found body0054', initialPos.x)
					}
					const newPosition = initialPos.x - distance
					mesh.position.x = newPosition
				}
			}
		})

		getOverallSize2(meshes)
	}
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

const classifyMesh = (mesh: BABYLON.AbstractMesh, scene: BABYLON.Scene) => {
	if (mesh.name === 'body0047') mesh.metadata.scalable = { x: false, y: true, z: true }
	if (mesh.name === 'body0046') mesh.metadata.scalable = { x: false, y: true, z: true }
	if (mesh.name === 'body0000') mesh.metadata.scalable = { x: false, y: true, z: true }

	if (mesh.name === 'body0048') mesh.metadata.scalable = { x: true, y: false, z: true }
	if (mesh.name === 'body0001') mesh.metadata.scalable = { x: true, y: false, z: true }

	if (mesh.name === 'body0041') mesh.metadata.scalable = { x: true, y: true, z: false }
	if (mesh.name === 'body0042') mesh.metadata.scalable = { x: true, y: true, z: false }
	if (mesh.name === 'body0043') mesh.metadata.scalable = { x: true, y: true, z: false }
	if (mesh.name === 'body0044') mesh.metadata.scalable = { x: true, y: true, z: false }
	if (mesh.name === 'body0045') mesh.metadata.scalable = { x: true, y: true, z: false }

	// if (mesh.name === 'body0048') mesh.visibility = 0
	// if (mesh.name === 'body0046') mesh.visibility = 0
	// if (mesh.name === 'body0044') mesh.visibility = 0
	// if (mesh.name === 'body0043') mesh.visibility = 0
	// if (mesh.name === 'body0042') mesh.visibility = 0
	// if (mesh.name === 'body0041') mesh.visibility = 0

	// if (mesh.name === 'body0004') mesh.visibility = 0
	// if (mesh.name === 'body0003') mesh.visibility = 0
	// if (mesh.name === 'body0002') mesh.visibility = 0

	const hardwareMaterial = new BABYLON.StandardMaterial('hardwareMaterial', scene)
	hardwareMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0) // Red color

	// hardware
	if (mesh.name === 'body0002') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0003') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0004') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0005') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0006') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0007') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0008') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0009') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0010') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0011') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0012') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0013') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0014') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0015') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0016') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0017') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0018') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0019') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0020') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0021') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0022') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0023') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0024') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0025') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0026') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0027') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0028') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0029') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0030') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0031') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0032') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0033') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0034') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0035') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0036') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0037') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0038') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0039') addHardwareProperties(mesh, hardwareMaterial)
	if (mesh.name === 'body0040') addHardwareProperties(mesh, hardwareMaterial)
}

const addHardwareProperties = (mesh: BABYLON.AbstractMesh, material: BABYLON.StandardMaterial) => {
	mesh.metadata.scalable = { x: false, y: false, z: false }
	mesh.material = material
}

const drawPoint = (
	scene: BABYLON.Scene | null,
	location: BABYLON.Vector3,
	color: BABYLON.Color3 = BABYLON.Color3.Red() // Default to red
) => {
	if (!scene) return

	// console.log(`point=> x:${location.x}, y: ${location.y}, z: ${location.z}`)

	// Create the helper sphere
	const pivotHelper = BABYLON.MeshBuilder.CreateSphere('pivotHelper', { diameter: 50 }, scene)

	// Create and set a material with the specified color
	const material = new BABYLON.StandardMaterial('pivotHelperMat', scene)
	material.diffuseColor = color // Set the color
	pivotHelper.material = material

	// Set the position of the helper sphere
	pivotHelper.position = location
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

	if (!rectangle.metadata) {
		rectangle.metadata = {}
		rectangle.metadata.scalable = { x: false, y: true, z: false }
	}

	// Set the pivot point to the desired location
	const pivotPoint = new BABYLON.Vector3(250, 250, 0) // Set the pivot at the edge of the rectangle
	rectangle.setPivotPoint(pivotPoint)

	// Adjust the mesh position to maintain its visual location
	const pivotDelta = rectangle.getPivotPoint().scale(-1) // Correct for pivot point adjustment
	rectangle.position.addInPlace(pivotDelta)

	// Optional: Apply a material for color or texture
	const material = new BABYLON.StandardMaterial('rectMaterial', scene)
	material.diffuseColor = BABYLON.Color3.Blue() // Blue color
	rectangle.material = material

	// Add axis viewer for debugging
	new BABYLON.AxesViewer(scene, 100)

	scene.onBeforeRenderObservable.add(() => {
		rectangle.scaling.y += 0.003 // Example: scale along Y-axis
	})

	return rectangle
}

const scaleFromPivot = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	const _sy = sy / mesh.scaling.y
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x),
		(pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y)),
		pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z)
	)
}

const scaleFromPivot2 = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	const _sy = sy / mesh.scaling.y
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		pivotPoint.x + _sy * (mesh.position.x - pivotPoint.x),
		pivotPoint.y + _sx * (mesh.position.y - pivotPoint.y),
		pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z)
	)
}

const scaleFromPivot3 = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// if (mesh.name === 'body0043') {
	// 	console.log('1. scale ', 'sx:', sx, 'sy:', sy, 'sz:', sz)
	// 	console.log('2. pivot ', '_sx:', pivotPoint.x, '_sy:', pivotPoint.y, '_sz:', pivotPoint.z)
	// 	console.log('3. scaled', '_sx:', _sx, '_sy:', _sy, '_sz:', _sz)
	// 	console.log('4. diff  ', 'x:', mesh.position.x - pivotPoint.x, 'y:', mesh.position.y - pivotPoint.y, 'z:', mesh.position.z - pivotPoint.z)

	// 	console.log('mesh position', 'x:', mesh.position.x, 'y:', mesh.position.y, 'z:', mesh.position.z)
	// 	console.log('new mesh position', 'x:', pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x), 'y:', pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y), 'z:', pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z))
	// }

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		mesh.position.x,
		pivotPoint.y + _sz * (mesh.position.y - pivotPoint.y),
		mesh.position.z
	)
}
