import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBN0mAeGQQm_tCMYA05lPvmGEDftgQolGU',
  authDomain: 'pokemons-36063.firebaseapp.com',
  projectId: 'pokemons-36063',
  storageBucket: 'pokemons-36063.firebasestorage.app',
  messagingSenderId: '225701672961',
  appId: '1:225701672961:web:dd055b921739251477e800',
  measurementId: 'G-RMYWCMX4KW'
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider()

export type Collection = 'pokemons' | 'users'
export const database = getFirestore(app)
