import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { BetaDisclaimer } from './BetaDisclaimer'
import { RegisterDownload } from './RegisterDownload'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const DownloadSwoodMergePost = () => {
	const downloadLink = 'https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/SwoodMergePost.exe'
	const appVersion = '0.0.1'

	const [open, setOpen] = useState(false)
	// const [email, setEmail] = useState('')
	// const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleAgree = async () => {
		setOpen(false)

		try {
			await RegisterDownload('SwoodMergePostDownloads', appVersion, 'download_SwoodMergePost')
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
					Download SwoodMergePost v{appVersion}
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>SwoodMergePost Disclaimer</DialogTitle>
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

export default DownloadSwoodMergePost
