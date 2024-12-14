import { createUserWithEmailAndPassword } from '@firebase/auth'
import { User } from '../../../types'
import { auth } from '../instatnce'
import { addDocument } from './addDocument'

export const registerWithEmailAndPassword = async (
  user: User & { email: string },
  password: string
) => {
  const response = await createUserWithEmailAndPassword(auth, user.email, password)

  await addDocument('users', { ...user, uid: response.user.uid, pokemons: [] }, response.user.uid)

  return { ...response, ...user }
}
