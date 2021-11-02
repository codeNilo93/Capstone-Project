import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKqdgwbluxEeNz7HP42lVy_ipfBMfI6IM',
  authDomain: 'adventure-n-chill.firebaseapp.com',
  databaseURL:
    'https://ebuddy-db-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'adventure-n-chill',
  storageBucket: 'adventure-n-chill.appspot.com',
  messagingSenderId: '573391484095',
  appId: '1:573391484095:web:cd679958d21047592c020a',
  measurementId: 'G-2YD7TVW3E0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
