import { Box } from '@mui/material'

export const ImageComponent = ({ source, size }: { source: string; size?: string }) => {
	return (
		<Box display="flex" justifyContent="center" className="imageBox">
			<img src={source} style={{ height: size }} />
		</Box>
	)
}
