// import React from 'react'

import BabylonViewer from '../components/BabylonViewer'
import { PageTitle } from '../components/PageTitle'
//@ts-expect-error error
import { babylonDrawer } from '../data/models/drawer'
import { MySlider } from '../components/MySlider'
import { useState } from 'react'
import { Box } from '@mui/material'

function BabylonPage() {
	const [height, setHeight] = useState<number>(1)
	const [width, setWidth] = useState<number>(1)
	const [depth, setDepth] = useState<number>(1)

	return (
		<>
			<PageTitle title="Babylon Example" />

			<Box display="flex" flexDirection="row" gap={2} alignItems="flex-start">
				{/* BabylonViewer will take up the remaining space, and the sliders will sit next to it */}
				<Box flex="1">
					<BabylonViewer babylonString={babylonDrawer} height={height} width={width} depth={depth} />
				</Box>

				{/* The sliders */}
				<Box>
					<MySlider title="height" value={height} setValue={setHeight} />
					<MySlider title="width" value={width} setValue={setWidth} />
					<MySlider title="depth" value={depth} setValue={setDepth} />
				</Box>
			</Box>
		</>
	)
}

export default BabylonPage
