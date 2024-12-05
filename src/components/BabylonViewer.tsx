import { useEffect, useRef, useState } from 'react'
import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3, SceneLoader, AxesViewer, TransformNode, Color4, StandardMaterial, Color3, PositionGizmo, UtilityLayerRenderer, RotationGizmo, ScaleGizmo, PointerEventTypes } from '@babylonjs/core'
import { useTheme } from '../providers/MyThemeProvider'
import BabylonImageLoader from './BabylonImageLoader'

interface IProps {
	babylonString: string
	babylonassets?: string
	height: number
	width: number
	depth: number
}

// const BabylonViewer: React.FC<IProps> = ({ babylonString, babylonassets, height, width, depth }) => {
const BabylonViewer: React.FC<IProps> = ({ babylonString, height, width, depth }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [, setScene] = useState<Scene | null>(null)
	const [groupNode, setGroupNode] = useState<TransformNode | null>(null)
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
		const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 2000, Vector3.Zero(), scene)
		// Set the camera position for an isometric view
		camera.position = new Vector3(2000, 2000, -2000) // You can tweak these values for different angles
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

		// Keep track of the currently selected mesh
		let selectedMesh: TransformNode | null = null

		// Load the mesh
		SceneLoader.ImportMeshAsync('', '', 'data:' + babylonString, scene).then(() => {
			console.log('Mesh loaded successfully!')

			// Create a TransformNode to group the meshes
			const groupNode = new TransformNode('groupNode', scene)
			scene.meshes.forEach(mesh => {
				mesh.parent = groupNode
				mesh.material = blueMaterial // Apply blue material to each mesh
			})

			setGroupNode(groupNode)

			// Optional: Add axes to the scene
			new AxesViewer(scene, 100)

			// Add pointer event for mesh selection
			scene.onPointerObservable.add(pointerInfo => {
				if (pointerInfo.type === PointerEventTypes.POINTERPICK) {
					const pickResult = pointerInfo.pickInfo

					// Ensure pickInfo is valid
					if (pickResult?.hit && pickResult.pickedMesh) {
						const pickedMesh = pickResult.pickedMesh

						// Ensure pickedMesh is a TransformNode or compatible type
						if (pickedMesh !== selectedMesh) {
							selectedMesh = pickedMesh as TransformNode

							// Attach gizmos to the selected mesh
							//@ts-expect-error	error
							positionGizmo.attachedMesh = selectedMesh
							//@ts-expect-error	error
							rotationGizmo.attachedMesh = selectedMesh
							//@ts-expect-error	error
							scaleGizmo.attachedMesh = selectedMesh
						}
					} else {
						// Clear gizmos if no valid mesh is picked
						positionGizmo.attachedMesh = null
						rotationGizmo.attachedMesh = null
						scaleGizmo.attachedMesh = null
						selectedMesh = null
					}
				}
			})

			if (groupNode) {
				// Calculate the bounding box for the groupNode
				let overallMin = new Vector3(Infinity, Infinity, Infinity)
				let overallMax = new Vector3(-Infinity, -Infinity, -Infinity)

				groupNode.getChildMeshes().forEach(mesh => {
					const boundingInfo = mesh.getBoundingInfo()
					const { minimumWorld, maximumWorld } = boundingInfo.boundingBox

					// Update the overall min and max
					overallMin = Vector3.Minimize(overallMin, minimumWorld)
					overallMax = Vector3.Maximize(overallMax, maximumWorld)
				})

				// Calculate the center of the bounding box
				const center = overallMin.add(overallMax).scale(0.5)

				console.log('GroupNode Center:', center)

				// Optionally move the groupNode to center it at the origin
				groupNode.position = center.scale(-1)
			}
		})

		// Render loop
		engine.runRenderLoop(() => {
			scene.render()
		})

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
		if (groupNode) {
			groupNode.scaling = new Vector3(width, height, depth)
		}
	}, [height, width, depth, groupNode])

	return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default BabylonViewer
