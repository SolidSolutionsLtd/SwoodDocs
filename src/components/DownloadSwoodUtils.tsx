import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { BetaDisclaimer } from './BetaDisclaimer'
import { RegisterDownload } from './RegisterDownload'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const DownloadSwoodUtils = () => {
	const downloadLink = 'https://development.solidsolutions.co.uk/swoodutils/downloads/SwoodUtils-0.1.5.0.exe'
	const appVersion = '0.1.5.0'

	const [open, setOpen] = useState(false)
	// const [email, setEmail] = useState('')
	// const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleAgree = async () => {
		setOpen(false)

		try {
			await RegisterDownload('SwoodUtilsDownloads', appVersion, 'download_SwoodUtils')
			// Trigger the download after registration is complete
			window.location.href = downloadLink
		} catch (error) {
			console.error('Error during registration: ', error)
		}
	}

	return (
		<>
			<Box display="flex" justifyContent="center" className="imageBox">
				<Button variant="outlined" size="large" color="info" onClick={handleClickOpen} endIcon={<CloudDownloadIcon />}>
					Download SwoodUtils v{appVersion}
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>SwoodUtils Disclaimer</DialogTitle>
				<DialogContent>
					<BetaDisclaimer />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleAgree} color="primary" autoFocus>
						Agree
					</Button>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default DownloadSwoodUtils
