import { useEffect, useRef, useState } from 'react'
import { ArcRotateCamera, Engine, HemisphericLight, Scene, Vector3, SceneLoader, AxesViewer, TransformNode, Color4, StandardMaterial, Color3 } from '@babylonjs/core'
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

		camera.attachControl(canvas, true)

		// Light setup
		new HemisphericLight('light', new Vector3(1, 1, 0), scene)

		// Create a blue material
		const blueMaterial = new StandardMaterial('blueMaterial', scene)
		blueMaterial.diffuseColor = new Color3(29 / 255, 79 / 255, 145 / 255) // Blue color

		// Load the mesh
		SceneLoader.ImportMeshAsync('', '', 'data:' + babylonString, scene).then(() => {
			console.log('Mesh loaded successfully!')
			camera.zoomOn(scene.meshes)

			// Create a TransformNode to group the meshes
			const groupNode = new TransformNode('groupNode', scene)
			scene.meshes.forEach(mesh => {
				mesh.parent = groupNode
				mesh.material = blueMaterial // Apply blue material to each mesh
			})

			setGroupNode(groupNode)

			// Optional: Add axes to the scene
			new AxesViewer(scene, 100)

			// Calculate the overall bounding box size (in mm)
			let overallMinX = Infinity,
				overallMinY = Infinity,
				overallMinZ = Infinity
			let overallMaxX = -Infinity,
				overallMaxY = -Infinity,
				overallMaxZ = -Infinity

			scene.meshes.forEach(mesh => {
				const boundingInfo = mesh.getBoundingInfo()
				const boundingBox = boundingInfo.boundingBox

				const sizeX = boundingBox.maximum.x - boundingBox.minimum.x
				const sizeY = boundingBox.maximum.y - boundingBox.minimum.y
				const sizeZ = boundingBox.maximum.z - boundingBox.minimum.z

				// Convert to mm
				const sizeXmm = sizeX
				const sizeYmm = sizeY
				const sizeZmm = sizeZ

				console.log(`Mesh: ${mesh.name} Bounding Box Size: X: ${sizeXmm}mm, Y: ${sizeYmm}mm, Z: ${sizeZmm}mm`)

				overallMinX = Math.min(overallMinX, boundingBox.minimum.x)
				overallMinY = Math.min(overallMinY, boundingBox.minimum.y)
				overallMinZ = Math.min(overallMinZ, boundingBox.minimum.z)

				overallMaxX = Math.max(overallMaxX, boundingBox.maximum.x)
				overallMaxY = Math.max(overallMaxY, boundingBox.maximum.y)
				overallMaxZ = Math.max(overallMaxZ, boundingBox.maximum.z)
			})

			// Calculate the size of the combined bounding box
			const overallSizeX = overallMaxX - overallMinX
			const overallSizeY = overallMaxY - overallMinY
			const overallSizeZ = overallMaxZ - overallMinZ

			// Convert to mm
			const overallSizeXmm = overallSizeX
			const overallSizeYmm = overallSizeY
			const overallSizeZmm = overallSizeZ

			console.log(`Overall Bounding Box Size: X: ${overallSizeXmm}mm, Y: ${overallSizeYmm}mm, Z: ${overallSizeZmm}mm`)
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
