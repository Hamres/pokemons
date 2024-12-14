import { doc, getDoc } from '@firebase/firestore'
import { Collection, database } from '../instatnce'

export const checkDocumentExist = async (collection: Collection, id: string) => {
  const docRef = doc(database, collection, id)
  const docSpan = await getDoc(docRef)

  if (docSpan.exists()) return true

  return false
}
