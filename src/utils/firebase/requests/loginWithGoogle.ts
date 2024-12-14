import { signInWithPopup } from '@firebase/auth'
import { auth, GoogleProvider } from '../instatnce'
import { checkDocumentExist } from './checkDocumentExist'
import { addDocument } from './addDocument'
import { getUserFieldsFromFireBase } from '../../helpers/getUserFieldsFromFireBase'

export const loginWithGoogle = async () => {
  const response = await signInWithPopup(auth, GoogleProvider)
  const userExist = await checkDocumentExist('users', response.user.uid)

  if (!userExist) {
    await addDocument(
      'users',
      { ...getUserFieldsFromFireBase(response.user), pokemons: [] },
      response.user.uid
    )
  }

  return response
}
