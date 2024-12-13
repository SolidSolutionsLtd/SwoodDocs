import { useEffect, useRef, useState } from 'react'
import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3, SceneLoader, AxesViewer, TransformNode, Color4, StandardMaterial, Color3, PositionGizmo, UtilityLayerRenderer, RotationGizmo, ScaleGizmo, PointerEventTypes, Mesh, MeshBuilder, VertexBuffer, AbstractMesh, Tools } from '@babylonjs/core'
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
	const [, setScene] = useState<Scene | null>(null)
	const [groupNode, setGroupNode] = useState<TransformNode | null>(null)
	const [meshes, setMeshes] = useState<AbstractMesh[] | null>(null)
	const { isDarkMode } = useTheme()

	BabylonImageLoader()

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const engine = new Engine(canvas, true)
		const scene = new Scene(engine)

		// Set the background color
		scene.clearColor = isDarkMode ? new Color4(15 / 255, 18 / 255, 20 / 255, 1) : new Color4(1, 1, 1, 1)

		// Camera setup
		const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 1000, Vector3.Zero(), scene)
		// Set the camera position for an isometric view
		camera.position = new Vector3(1000, 1000, -1000) // You can tweak these values for different angles
		camera.position = new Vector3(0, 0, -1500) // You can tweak these values for different angles

		camera.attachControl(canvas, true)

		// Light setup
		new HemisphericLight('light', new Vector3(1, 1, 0), scene)

		// Create a blue material
		const blueMaterial = new StandardMaterial('blueMaterial', scene)
		blueMaterial.diffuseColor = new Color3(29 / 255, 79 / 255, 145 / 255)

		// Create a utility layer for gizmos
		const utilLayer = new UtilityLayerRenderer(scene)

		// Gizmo instances (reusable for any selected mesh)
		const positionGizmo = new PositionGizmo(utilLayer)
		positionGizmo.scaleRatio = 1.5
		const rotationGizmo = new RotationGizmo(utilLayer)
		const scaleGizmo = new ScaleGizmo(utilLayer)

		// Load the mesh
		SceneLoader.ImportMeshAsync('', '', 'data:' + babylonString, scene).then(() => {
			console.log('Mesh loaded successfully!')

			// displayNormals(scene.meshes[0] as Mesh, scene)

			// Create a TransformNode to group the meshes
			const groupNode = new TransformNode('groupNode', scene)

			// Apply blue material to each mesh
			scene.meshes.forEach(mesh => {
				mesh.parent = groupNode
				mesh.material = blueMaterial
				// displayNormals(mesh as Mesh, scene)
			})

			setMeshes(scene.meshes)

			setGroupNode(groupNode)

			new AxesViewer(scene, 100)

			enableGizmos(scene, positionGizmo, rotationGizmo, scaleGizmo)

			if (groupNode) {
				// Calculate the bounding box for the groupNode
				const { overallMin, overallMax } = getOverallSize(groupNode)

				// Calculate the center of the bounding box
				const center = overallMin.add(overallMax).scale(0.5)

				console.log('GroupNode Center:', center)

				// Optionally move the groupNode to center it at the origin
				groupNode.position = center.scale(-1)
			}
		})

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
		// if (groupNode) groupNode.scaling = new Vector3(width, height, depth)
	}, [height, width, depth, groupNode])

	useEffect(() => {
		// ScaleModelHeight(meshes, height)
	}, [height, meshes])

	useEffect(() => {
		ScaleModelWidth(meshes, width)
	}, [width, meshes])

	useEffect(() => {
		moveMeshesRadially(meshes, radial)
	}, [radial, meshes])

	return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default BabylonViewer

const getMeshLocalOrientation = (mesh: Mesh): Vector3 | null => {
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

	const localRotationInDegrees = new Vector3(roundToNearest(Tools.ToDegrees(localRotation.x)), roundToNearest(Tools.ToDegrees(localRotation.y)), roundToNearest(Tools.ToDegrees(localRotation.z)))
	return localRotationInDegrees
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const moveMeshesRadially = (meshes: AbstractMesh[] | null, distance: number) => {
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

const enableGizmos = (scene: Scene, positionGizmo: PositionGizmo, rotationGizmo: RotationGizmo, scaleGizmo: ScaleGizmo) => {
	// Keep track of the currently selected mesh and its original material
	let selectedMesh: Mesh | null = null
	let originalMaterial: StandardMaterial | null = null

	// Create a red material for highlighting
	const redMaterial = new StandardMaterial('redMaterial', scene)
	redMaterial.diffuseColor = new Color3(1, 0, 0) // Red color

	// Add pointer event for mesh selection
	scene.onPointerObservable.add(pointerInfo => {
		if (pointerInfo.type === PointerEventTypes.POINTERPICK) {
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
					selectedMesh = pickedMesh as Mesh
					originalMaterial = selectedMesh.material as StandardMaterial

					// Apply the red material to the selected mesh
					selectedMesh.material = redMaterial

					// Attach gizmos to the selected mesh
					positionGizmo.attachedMesh = selectedMesh
					rotationGizmo.attachedMesh = selectedMesh
					scaleGizmo.attachedMesh = selectedMesh

					const localRotationInDegrees = getMeshLocalOrientation(selectedMesh)
					console.log(`Rotation - X: ${localRotationInDegrees?.x}, Y: ${localRotationInDegrees?.y}, Z: ${localRotationInDegrees?.z}`)
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
const displayNormals = (mesh: Mesh, scene: Scene) => {
	if (!mesh) return

	// Get the vertex normals and positions of the mesh
	const vertexData = mesh.getVerticesData(VertexBuffer.NormalKind)
	const positions = mesh.getVerticesData(VertexBuffer.PositionKind)

	if (!vertexData || !positions) return

	// Create a line for each normal
	const lines = []
	for (let i = 0; i < positions.length; i += 3) {
		const position = new Vector3(positions[i], positions[i + 1], positions[i + 2])
		const normal = new Vector3(vertexData[i], vertexData[i + 1], vertexData[i + 2])

		// Create a line that shows the normal vector starting from the vertex position
		const normalStart = position
		const normalEnd = position.add(normal.scale(100)) // Adjust scale for visibility

		lines.push([normalStart, normalEnd])
	}

	// Create a LinesMesh to represent the normal vectors
	const normalMesh = MeshBuilder.CreateLineSystem('normalLines', { lines: lines }, scene)
	normalMesh.color = new Color3(1, 0, 0) // Set color to red for visibility
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ScaleModelHeight = (meshes: AbstractMesh[] | null, width: number) => {
	if (meshes) {
		meshes.forEach(mesh => {
			const orientation = getMeshLocalOrientation(mesh as Mesh)
			if (!orientation) return

			if (orientation.x === 0 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new Vector3(width, 1, 1)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new Vector3(width, 1, 1)
			else if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) mesh.scaling = new Vector3(1, 1, width)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new Vector3(width, 1, 1)
			else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new Vector3(width, 1, 1)
			// else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) mesh.position.x += 40
			// else if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) mesh.position.x += -40
		})
	}
}
const ScaleModelWidth = (meshes: AbstractMesh[] | null, width: number) => {
	const scaleValue = width / 600

	const distance = width - 600
	if (meshes) {
		meshes.forEach(mesh => {
			const orientation = getMeshLocalOrientation(mesh as Mesh)
			if (!orientation) return

			if (orientation.x === 0 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new Vector3(scaleValue, 1, 1)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new Vector3(scaleValue, 1, 1)
			else if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) mesh.scaling = new Vector3(1, 1, scaleValue)
			else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new Vector3(scaleValue, 1, 1)
			else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new Vector3(scaleValue, 1, 1)
			else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) mesh.position.x += distance
			else if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) mesh.position.x += -distance
		})

		getOverallSize2(meshes)
	}
}

const getOverallSize = (groupNode: TransformNode) => {
	let overallMin = new Vector3(Infinity, Infinity, Infinity)
	let overallMax = new Vector3(-Infinity, -Infinity, -Infinity)

	groupNode.getChildMeshes().forEach(mesh => {
		const boundingInfo = mesh.getBoundingInfo()
		const { minimumWorld, maximumWorld } = boundingInfo.boundingBox

		// Update the overall min and max
		overallMin = Vector3.Minimize(overallMin, minimumWorld)
		overallMax = Vector3.Maximize(overallMax, maximumWorld)
	})

	// calculate height, width, depth
	const result = overallMax.subtract(overallMin)
	console.log(`Overall size - Width: ${roundToNearest(result?.x)}, Height: ${roundToNearest(result?.y)}, Depth: ${roundToNearest(result?.z)}`)
	return { overallMin, overallMax }
}

const getOverallSize2 = (meshes: AbstractMesh[]) => {
	let overallMin = new Vector3(Infinity, Infinity, Infinity)
	let overallMax = new Vector3(-Infinity, -Infinity, -Infinity)

	meshes.forEach(mesh => {
		const boundingInfo = mesh.getBoundingInfo()
		const { minimumWorld, maximumWorld } = boundingInfo.boundingBox

		// Update the overall min and max
		overallMin = Vector3.Minimize(overallMin, minimumWorld)
		overallMax = Vector3.Maximize(overallMax, maximumWorld)
	})

	// calculate height, width, depth
	const result = overallMax.subtract(overallMin)
	console.log(`Overall size - Width: ${roundToNearest(result?.x)}, Height: ${roundToNearest(result?.y)}, Depth: ${roundToNearest(result?.z)}`)
	return { overallMin, overallMax }
}
