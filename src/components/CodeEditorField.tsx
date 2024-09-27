import React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const CodeContainer = styled(Box)(({ theme }) => ({
	fontFamily: 'monospace',
	backgroundColor: theme.palette.background.paper,
	border: `1px solid ${theme.palette.divider}`,
	padding: theme.spacing(2),
	borderRadius: theme.shape.borderRadius,
	position: 'relative',
	overflow: 'auto',
	maxHeight: '500px',
	// Custom scrollbar styles
	'&::-webkit-scrollbar': {
		width: '5px',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgb(104,104,104)', // Black scroll bar
		borderRadius: '5px',
	},
	'&::-webkit-scrollbar-track': {
		backgroundColor: 'rgb(66,66,66)',
	},
}))

const CopyButton = styled(IconButton)(({ theme }) => ({
	position: 'absolute',
	top: theme.spacing(1),
	right: theme.spacing(1),
}))

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CodeEditorField = ({ text }: { text: string }) => {
	const [code] = useState<string>(text)

	const [open, setOpen] = useState<boolean>(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(code)
		setOpen(true)
	}

	const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<Box sx={{ padding: 2, position: 'relative' }}>
			<CodeContainer>
				<Typography component="pre" variant="body2">
					{code}
				</Typography>
				<CopyButton onClick={handleCopy} aria-label="copy code">
					<ContentCopyIcon />
				</CopyButton>
			</CodeContainer>
			<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
					Code copied to clipboard
				</Alert>
			</Snackbar>
		</Box>
	)
}

export default CodeEditorField
