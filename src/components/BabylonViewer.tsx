/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import * as BABYLON from '@babylonjs/core'
import { useTheme } from '../providers/MyThemeProvider'
import BabylonImageLoader from './BabylonImageLoader'
import { addClickEvent, displayMeshAxis, enableGizmos, getMeshLocalOrientation, getOverallSize, lookup } from '../utils/babylonUtils'

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
		// camera.position = new BABYLON.Vector3(1300, 1300, -1300) // You can tweak these values for different angles
		camera.position = new BABYLON.Vector3(1300, 1300, 1300) // You can tweak these values for different angles
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

		const babylonObject = JSON.parse(babylonString)

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

				// find metadata in object
				// @ts-expect-error error
				const metadata = lookup(babylonObject.meshes, 'id', mesh.name)

				if (metadata) {
					const { swood_bodyname, swood_componentname, swood_configuration, swood_edgebandtrackingid, swood_filepath } = metadata as {
						swood_bodyname: string
						swood_componentname: string
						swood_configuration: string
						swood_edgebandtrackingid: string
						swood_filepath: string
					}

					mesh.metadata = {
						...mesh.metadata,
						swood_bodyname,
						swood_componentname,
						swood_configuration,
						swood_edgebandtrackingid,
						swood_filepath,
					}
				} else {
					console.warn(`Metadata not found for mesh with name: ${mesh.name}`)
				}
				classifyMesh(mesh, scene)
			})

			// alignMeshes(scene.meshes)
			displayMeshAxis(scene.meshes, scene)

			setMeshes(scene.meshes)

			setGroupNode(groupNode)

			// add axes to origin
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

	useEffect(() => ScaleModelHeight(meshes, height, scene), [meshes, height, scene])

	useEffect(() => ScaleModelWidth(meshes, width, scene), [meshes, width, scene])

	// useEffect(() => {
	// moveMeshesRadially(meshes, radial)
	// }, [radial, meshes])

	return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}

export default BabylonViewer

const ScaleModelHeight = (meshes: BABYLON.AbstractMesh[] | null, height: number, scene: BABYLON.Scene | null) => {
	// height = 1000
	const initialHeight = 800
	const scaleValue = height / initialHeight
	const distance = height - initialHeight

	if (meshes) {
		meshes.forEach(mesh => {
			if (!mesh.metadata?.scalable) return

			// if (mesh.name === 'body0047') debugger

			if (mesh.name === 'body0000') {
				const pivotPoint = new BABYLON.Vector3(600, 0, 0)
				// drawPoint(scene, pivotPoint)
				scaleFromPivot5(mesh, pivotPoint, scaleValue, 1, 1)
			} else if (mesh.metadata.scalable.y && mesh.metadata.scalable.x) {
				const pivotPoint = new BABYLON.Vector3(300, 0, -100)
				// drawPoint(scene, pivotPoint, BABYLON.Color3.Green())
				scaleFromPivot3(mesh, pivotPoint, 1, 1, scaleValue)
			} else if (mesh.metadata.scalable.y) {
				const pivotPoint = new BABYLON.Vector3(600, 0, 0)
				// drawPoint(scene, pivotPoint)
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
		})
	}
}

const ScaleModelWidth = (meshes: BABYLON.AbstractMesh[] | null, width: number, scene: BABYLON.Scene | null) => {
	const initialWidth = 600
	const scaleValue = width / initialWidth
	const distance = width - initialWidth

	console.log('distance', distance)

	if (meshes) {
		meshes.forEach(mesh => {
			if (!mesh.metadata?.scalable) return

			// if (mesh.metadata.scalable.y && mesh.metadata.scalable.x) {
			if (mesh.name === 'body0000') {
				const pivotPoint = new BABYLON.Vector3(0, 0, 0)
				// drawPoint(scene, pivotPoint)
				scaleFromPivot4(mesh, pivotPoint, 1, 1, scaleValue)
			} else if (mesh.metadata.scalable.x) {
				const pivotPoint = new BABYLON.Vector3(0, 0, 0)
				scaleFromPivot(mesh, pivotPoint, scaleValue, 1, 1)

				// // Works for depth
				// const pivotPoint = new BABYLON.Vector3(300, 0, 0)
				// drawPoint(scene, pivotPoint)
				// scaleFromPivot(mesh, pivotPoint, 1, 1, scaleValue)

				// mesh.scaling.z = scaleValue
			}

			if (!mesh.metadata.scalable.x) {
				const { x } = mesh.metadata.originalPosition
				const scaledDistance = x / initialWidth
				const newPosition = x + distance * scaledDistance
				mesh.position.x = newPosition
			}
			// const orientation = getMeshLocalOrientation(mesh as BABYLON.Mesh)
			// if (!orientation) return

			// // scaled elements
			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// else if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) mesh.scaling = new BABYLON.Vector3(1, 1, scaleValue)
			// else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) mesh.scaling = new BABYLON.Vector3(scaleValue, 1, 1)
			// // moved elements
			// // else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) mesh.position.x += distance
			// // else if (orientation.x === 0 && orientation.y === 0 && orientation.z === -90) mesh.position.x += -distance

			// if (orientation.x === 0 && orientation.y === 0 && orientation.z === 90) {
			// 	const initialPos = mesh.metadata.originalPosition

			// 	// Update the mesh's position if an initial position was found
			// 	if (initialPos) {
			// 		if (mesh.name === 'body0054') {
			// 			console.log('found body0054', initialPos.x)
			// 		}
			// 		const newPosition = initialPos.x + distance
			// 		mesh.position.x = newPosition
			// 	}
			// }
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

const classifyMesh = (mesh: BABYLON.AbstractMesh, scene: BABYLON.Scene) => {
	if (mesh.metadata.swood_filepath.includes('\\Hardwares\\')) {
		addHardwareProperties(mesh, scene)
		return
	}

	const orientation = getMeshLocalOrientation(mesh as BABYLON.Mesh)

	if (!orientation) {
		console.warn(`unable to find orientation of ${mesh.metadata.swood_componentname}`)
		return
	}

	mesh.metadata.scalable = { x: true, y: true, z: true }

	if (orientation.x === 0 && orientation.y === 0 && orientation.z === 0) {
		// console.log(mesh.metadata.swood_componentname)
		// debugger
		mesh.metadata.scalable.y = false
		return
	} else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 180) {
		// console.log(mesh.metadata.swood_componentname)
		mesh.metadata.scalable.z = false
		return
	} else if (orientation.x === 0 && orientation.y === -90 && orientation.z === 90) {
		// console.log(mesh.metadata.swood_componentname)
		mesh.metadata.scalable.z = false
		return
	} else if (orientation.x === -90 && orientation.y === 0 && orientation.z === 0) {
		// console.log(mesh.metadata.swood_componentname)
		// debugger
		// mesh.metadata.scalable.y = false
	} else if (orientation.x === 0 && orientation.y === 0 && orientation.z === 180) {
		mesh.metadata.scalable.y = false
		return
	} else if (orientation.x === 0 && orientation.y === 0 && (orientation.z === 90 || orientation.z === -90)) {
		mesh.metadata.scalable.x = false
		return
	}

	console.warn(`unable to find scalables of ${mesh.metadata.swood_componentname}`)
	// if (mesh.name === 'body0047') mesh.metadata.scalable = { x: false, y: true, z: true }
	// if (mesh.name === 'body0046') mesh.metadata.scalable = { x: false, y: true, z: true }

	// if (mesh.name === 'body0048') mesh.metadata.scalable = { x: true, y: false, z: true }
	// if (mesh.name === 'body0001') mesh.metadata.scalable = { x: true, y: false, z: true }

	// if (mesh.name === 'body0000') mesh.metadata.scalable = { x: true, y: true, z: false }
	// if (mesh.name === 'body0041') mesh.metadata.scalable = { x: true, y: true, z: false }
	// if (mesh.name === 'body0042') mesh.metadata.scalable = { x: true, y: true, z: false }
	// if (mesh.name === 'body0043') mesh.metadata.scalable = { x: true, y: true, z: false }
	// if (mesh.name === 'body0044') mesh.metadata.scalable = { x: true, y: true, z: false }
	// if (mesh.name === 'body0045') mesh.metadata.scalable = { x: true, y: true, z: false }

	// if (mesh.name === 'body0048') mesh.visibility = 0
	// if (mesh.name === 'body0046') mesh.visibility = 0
	// if (mesh.name === 'body0044') mesh.visibility = 0
	// if (mesh.name === 'body0043') mesh.visibility = 0
	// if (mesh.name === 'body0042') mesh.visibility = 0
	// if (mesh.name === 'body0041') mesh.visibility = 0

	// if (mesh.name === 'body0004') mesh.visibility = 0
	// if (mesh.name === 'body0003') mesh.visibility = 0
	// if (mesh.name === 'body0002') mesh.visibility = 0
}

const addHardwareProperties = (mesh: BABYLON.AbstractMesh, scene: BABYLON.Scene) => {
	const hardwareMaterial = new BABYLON.StandardMaterial('hardwareMaterial', scene)
	hardwareMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0) // Red color
	mesh.metadata.scalable = { x: false, y: false, z: false }
	mesh.material = hardwareMaterial
}

const scaleFromPivot = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	const _sy = sy / mesh.scaling.y
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x),
		pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y),
		pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z)
	)
}

const scaleFromPivot2 = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	const _sy = sy / mesh.scaling.y
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// console.log('1. scale ', 'sx:', sx, 'sy:', sy, 'sz:', sz)
	// console.log('2. pivot ', '_sx:', pivotPoint.x, '_sy:', pivotPoint.y, '_sz:', pivotPoint.z)
	// console.log('3. scaled', '_sx:', _sx, '_sy:', _sy, '_sz:', _sz)
	// console.log('4. diff  ', 'x:', mesh.position.x - pivotPoint.x, 'y:', mesh.position.y - pivotPoint.y, 'z:', mesh.position.z - pivotPoint.z)

	// console.log('mesh position', 'x:', mesh.position.x, 'y:', mesh.position.y, 'z:', mesh.position.z)
	// console.log('new mesh position', 'x:', pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x), 'y:', pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y), 'z:', pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z))

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

const scaleFromPivot4 = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sz = sz / mesh.scaling.z
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		pivotPoint.x + _sz * (mesh.position.x - pivotPoint.x),
		mesh.position.y,
		mesh.position.z
	)
}

const scaleFromPivot5 = (mesh: BABYLON.AbstractMesh, pivotPoint: BABYLON.Vector3, sx: number, sy: number, sz: number) => {
	const _sx = sx / mesh.scaling.x
	mesh.scaling = new BABYLON.Vector3(sx, sy, sz)

	// console.log('1. scale ', 'sx:', sx)
	// console.log('2. pivot ', 'y:', pivotPoint.y)
	// console.log('3. scaled', '_sx:', _sx)
	// console.log('4. diff  ', 'y:', mesh.position.y - pivotPoint.y)
	// console.log('mesh position', 'y:', mesh.position.y)
	// console.log('new mesh position', 'y:', mesh.position.y - _sx * (mesh.position.y - pivotPoint.y))

	// prettier-ignore
	mesh.position = new BABYLON.Vector3(
		mesh.position.x,
		pivotPoint.y + _sx * (mesh.position.y - pivotPoint.y),
		mesh.position.z
	)
}

// 	console.log('1. scale ', 'sx:', sx, 'sy:', sy, 'sz:', sz)
// 	console.log('2. pivot ', '_sx:', pivotPoint.x, '_sy:', pivotPoint.y, '_sz:', pivotPoint.z)
// 	console.log('3. scaled', '_sx:', _sx, '_sy:', _sy, '_sz:', _sz)
// 	console.log('4. diff  ', 'x:', mesh.position.x - pivotPoint.x, 'y:', mesh.position.y - pivotPoint.y, 'z:', mesh.position.z - pivotPoint.z)

// 	console.log('mesh position', 'x:', mesh.position.x, 'y:', mesh.position.y, 'z:', mesh.position.z)
// 	console.log('new mesh position', 'x:', pivotPoint.x + _sx * (mesh.position.x - pivotPoint.x), 'y:', pivotPoint.y + _sy * (mesh.position.y - pivotPoint.y), 'z:', pivotPoint.z + _sz * (mesh.position.z - pivotPoint.z))

// console.log('1. scale ', 'sx:', sx, 'sy:', sy, 'sz:', sz)
// console.log('2. pivot ', '_sx:', pivotPoint.x, '_sy:', pivotPoint.y, '_sz:', pivotPoint.z)
// console.log('3. scaled', '_sx:', _sx)
// console.log('4. diff  ', 'x:', mesh.position.x - pivotPoint.x, 'y:', mesh.position.y - pivotPoint.y, 'z:', mesh.position.z - pivotPoint.z)
// console.log('mesh position', 'x:', mesh.position.x, 'y:', mesh.position.y, 'z:', mesh.position.z)
// console.log('new mesh position', 'y:', mesh.position.y + _sx * (mesh.position.y - pivotPoint.y))
