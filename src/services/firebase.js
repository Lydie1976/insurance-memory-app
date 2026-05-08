import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const requiredConfigKeys = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
]

export const isFirebaseEnabled = requiredConfigKeys.every((key) => {
  const value = firebaseConfig[key]
  return typeof value === 'string' && value.trim().length > 0
})

export const firebaseApp = isFirebaseEnabled ? initializeApp(firebaseConfig) : null
export const auth = firebaseApp ? getAuth(firebaseApp) : null
export const db = firebaseApp ? getFirestore(firebaseApp) : null

export function getFirebaseStatus() {
  return isFirebaseEnabled
    ? 'Firebase is configured and ready for the next integration phase.'
    : 'Firebase environment variables are missing. Add them to your local .env file before enabling Firebase features.'
}

export { firebaseConfig }
