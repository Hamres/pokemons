import { signOut } from '@firebase/auth'
import { auth } from '../instatnce'

export const logout = () => signOut(auth)
