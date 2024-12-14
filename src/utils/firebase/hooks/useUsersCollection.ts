import { collection, Query, query } from '@firebase/firestore'
import { database } from '../instatnce'
import { useCollection } from './useCollection'
import { UserDocument } from './useAddDocumentMutation'

export const useUsersCollection = () => {
  const q = query(collection(database, 'users')) as Query<UserDocument>
  return useCollection<UserDocument>(q)
}
