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

const RegisterEmail = async (email: string) => {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	const colRef = collection(db, 'MergeReportsReg')

	const deviceInfo = {
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		appVersion: navigator.appVersion,
	}

	const registrationData = {
		email,
		ipAddress: '',
		version: '0.0.0',
		deviceInfo,
	}

	try {
		const response = await fetch('https://api.ipify.org?format=json')
		const ipData = await response.json()
		registrationData.ipAddress = ipData.ip
	} catch (error) {
		console.error('Error getting ip: ', error)
		registrationData.ipAddress = 'unable to obtain ipAddress'
	}

	try {
		await addDoc(colRef, registrationData)
	} catch (error) {
		console.error('Error adding registration: ', error)
	}
}

const DownloadMergeReportsRegister = () => {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleAgree = async () => {
		setOpen(false)

		try {
			await RegisterEmail(email)
			// Trigger the download after registration is complete
			window.location.href = 'https://github.com/SolidSolutionsLtd/SwoodDocs/raw/master/public/assets/MergeReportPost.exe'
		} catch (error) {
			console.error('Error during registration: ', error)
		}
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
					<TextField autoFocus margin="dense" id="email" label="Please enter your email to continue with the download" type="email" fullWidth variant="standard" value={email} onChange={handleEmailChange} error={!isEmailValid && email !== ''} helperText={!isEmailValid && email !== '' ? 'Please enter a valid email address' : ''} />
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

export default DownloadMergeReportsRegister
