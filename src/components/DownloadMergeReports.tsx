import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { BetaDisclaimer } from './BetaDisclaimer'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
const apiKey = import.meta.env.VITE_API_KEY
const appId = import.meta.env.VITE_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey,
	authDomain: 'swooddocs.firebaseapp.com',
	projectId: 'swooddocs',
	storageBucket: 'swooddocs.appspot.com',
	messagingSenderId: '482898010102',
	appId,
}

const RegisterEmail = (email: string) => {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	const colRef = collection(db, 'MergeReportsReg')

	const deviceInfo = {
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		appVersion: navigator.appVersion,
	}

	fetch('https://api.ipify.org?format=json')
		.then(response => response.json())
		.then(ipData => {
			const registrationData = {
				email,
				ipAddress: ipData.ip,
				version: '0.0.0',
				deviceInfo,
			}

			addDoc(colRef, registrationData).catch(error => {
				console.error('Error adding registration: ', error)
			})
		})
}

const DownloadMergeReports = () => {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleAgree = () => {
		setOpen(false)

		RegisterEmail(email)
		// Trigger the download
		window.location.href = 'https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/MergeReportPost.exe'
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const emailValue = e.target.value
		setEmail(emailValue)
		setIsEmailValid(validateEmail(emailValue))
	}

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	return (
		<>
			<Button
				variant="text"
				color="primary"
				onClick={handleClickOpen}
				sx={{
					// textTransform: 'lowercase',
					fontSize: 14,
					padding: 0,
				}}
			>
				here
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>MergeReports Disclaimer</DialogTitle>
				<DialogContent>
					<BetaDisclaimer />
					<TextField autoFocus margin="dense" id="email" label="Please enter your email address" type="email" fullWidth variant="standard" value={email} onChange={handleEmailChange} error={!isEmailValid && email !== ''} helperText={!isEmailValid && email !== '' ? 'Please enter a valid email address' : ''} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleAgree} color="primary" autoFocus disabled={!isEmailValid}>
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

export default DownloadMergeReports
