// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6CSpIMqAOvowdxfWEyHqfIaqD9NhAJe0',
  authDomain: 'family-profile-4c718.firebaseapp.com',
  projectId: 'family-profile-4c718',
  storageBucket: 'family-profile-4c718.appspot.com',
  messagingSenderId: '906780073577',
  appId: '1:906780073577:web:0e4d95e4ceb9b7f1ac4cf8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)



