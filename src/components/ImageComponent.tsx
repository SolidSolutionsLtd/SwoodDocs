import { Box, SxProps, Theme } from '@mui/material'

interface ImageComponentProps {
	source: string
	size?: string
	sx?: SxProps<Theme>
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ source, size, sx }) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			className="imageBox"
			sx={{
				...sx,
			}}
		>
			<img src={source} style={{ width: size }} />
		</Box>
	)
}
