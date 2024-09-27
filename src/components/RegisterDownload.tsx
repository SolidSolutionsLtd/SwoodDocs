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

export const RegisterDownload = async (collectionName: string, version: string) => {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	const colRef = collection(db, collectionName)

	const deviceInfo = {
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		appVersion: navigator.appVersion,
	}

	const registrationData = {
		timestamp: new Date(),
		ipAddress: '',
		version,
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
