import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../instatnce';

export const loginWithEmailAndPassword = async (email: string, password: string) =>  signInWithEmailAndPassword(auth, email, password)

