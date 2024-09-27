import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useState } from 'react'
import { BetaDisclaimer } from './BetaDisclaimer'
import { RegisterDownload } from './RegisterDownload'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const DownloadMergeReportsRegister = () => {
	const [open, setOpen] = useState(false)
	// const [email, setEmail] = useState('')
	// const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleAgree = async () => {
		setOpen(false)

		try {
			await RegisterDownload('MergeReportsDownloads', '0.0.0')
			// Trigger the download after registration is complete
			window.location.href = 'https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/MergeReportPost.exe'
		} catch (error) {
			console.error('Error during registration: ', error)
		}
	}

	return (
		<>
			<Box display="flex" justifyContent="center" className="imageBox">
				<Button variant="outlined" size="large" color="info" onClick={handleClickOpen} endIcon={<CloudDownloadIcon />}>
					Download MergeReportPost v0.0.0
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>MergeReports Disclaimer</DialogTitle>
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

export default DownloadMergeReportsRegister
