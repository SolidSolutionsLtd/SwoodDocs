import * as BABYLON from '@babylonjs/core'

export const drawRectangle = (scene: BABYLON.Scene) => {
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

export const getMeshLocalOrientation = (mesh: BABYLON.Mesh): BABYLON.Vector3 | null => {
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

export const moveMeshesRadially = (meshes: BABYLON.AbstractMesh[] | null, distance: number) => {
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

export const roundToNearest = (value: number, precision: number = 1) => {
	const factor = Math.pow(10, precision)
	return Math.round(value * factor) / factor
}

export const enableGizmos = (scene: BABYLON.Scene, positionGizmo: BABYLON.PositionGizmo, rotationGizmo: BABYLON.RotationGizmo, scaleGizmo: BABYLON.ScaleGizmo) => {
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

export const displayNormals = (mesh: BABYLON.Mesh, scene: BABYLON.Scene) => {
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

export const displayMeshAxis = (meshes: BABYLON.AbstractMesh[], scene: BABYLON.Scene) => {
	// Create the scene

	// Add gizmos to each mesh
	meshes.forEach(mesh => {
		const axesViewer = new BABYLON.AxesViewer(scene, 50)
		axesViewer.xAxis.parent = mesh
		axesViewer.yAxis.parent = mesh
		axesViewer.zAxis.parent = mesh
	})
}

export const getOverallSize = (groupNode: BABYLON.TransformNode) => {
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

export const getOverallSize2 = (meshes: BABYLON.AbstractMesh[]) => {
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

export const addClickEvent = (scene: BABYLON.Scene) => {
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

export const drawPoint = (
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

interface LookupFunction {
	<T, K extends keyof T>(array: T[], key: K, value: T[K]): T | undefined
}

/**
 * Finds an object in an array by a specific property value.
 *
 * @param array - The array of objects to search through.
 * @param key - The key of the property to match.
 * @param value - The value to look for.
 * @returns The first object that matches the criteria, or undefined if none is found.
 */
export const lookup: LookupFunction = (array, key, value) => {
	return array.find(item => item[key] === value)
}
