import { useEffect } from 'react'
import * as BABYLON from '@babylonjs/core'

// Mocked babylonassets object for demonstration
const babylonassets: Record<string, string> = {
	'example.png': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wgKFxwGZgziYgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAARSURBVAjXY2BgYPjPgAT+AwAPAwH/g4TEFAAAAABJRU5ErkJggg==',
}

const BabylonImageLoader = () => {
	useEffect(() => {
		const originalLoadImage = BABYLON.Tools.LoadImage

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		BABYLON.Tools.LoadImage = function (url: string, onload: any, onerror: any, database: any) {
			url = BABYLON.Tools.CleanUrl(url)
			const allUrl = url.split('/')
			let filenameOnly = allUrl[allUrl.length - 1]

			if (filenameOnly.startsWith('undefined')) {
				filenameOnly = filenameOnly.substring(9)
			}

			if (babylonassets[filenameOnly]) {
				const img = new Image()
				img.onload = () => onload(img)
				img.onerror = () => {
					img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wgKFxwGZgziYgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAARSURBVAjXY2BgYPjPgAT+AwAPAwH/g4TEFAAAAABJRU5ErkJggg=='
					onload(img)
				}
				img.src = babylonassets['Oak.jpg']
				return img
			}

			return originalLoadImage(url, onload, onerror, database)
		}

		// Cleanup on unmount
		return () => {
			BABYLON.Tools.LoadImage = originalLoadImage
		}
	}, [])
}

export default BabylonImageLoader
