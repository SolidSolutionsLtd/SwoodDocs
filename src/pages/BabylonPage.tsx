// import React from 'react'

import BabylonViewer from '../components/BabylonViewer'
import { PageTitle } from '../components/PageTitle'
//@ts-expect-error error
import { babylonjson } from '../data/models/drawer'

import { MySlider } from '../components/MySlider'
import { useState } from 'react'
import { Box } from '@mui/material'

function BabylonPage() {
	const [height, setHeight] = useState<number>(1)
	const [width, setWidth] = useState<number>(600)
	const [depth, setDepth] = useState<number>(1)
	const [radial, setRadial] = useState<number>(1)

	return (
		<>
			<PageTitle title="Babylon Example" />

			<Box display="flex" flexDirection="row" gap={2} alignItems="flex-start">
				{/* BabylonViewer will take up the remaining space, and the sliders will sit next to it */}
				<Box flex="1">
					<BabylonViewer babylonString={babylonjson} height={height} width={width} depth={depth} radial={radial} />
				</Box>

				{/* The sliders */}
				<Box>
					<MySlider title="height" value={height} setValue={setHeight} min={0} max={5} step={0.5} />
					<MySlider title="width" value={width} setValue={setWidth} min={300} max={1200} step={50} />
					<MySlider title="depth" value={depth} setValue={setDepth} min={0} max={5} step={0.5} />
					<MySlider title="radial" value={radial} setValue={setRadial} min={0} max={500} step={1} />
				</Box>
			</Box>
		</>
	)
}

export default BabylonPage
