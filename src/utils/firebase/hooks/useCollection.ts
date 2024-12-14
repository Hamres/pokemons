import { useEffect, useState } from 'react'
import { onSnapshot, Query } from '@firebase/firestore'

export const useCollection = <T>(query: Query<T>) => {
  const [documents, setDocuments] = useState<T[] | null>(null)

  useEffect(() => {
    const unsub = onSnapshot(query, (querySnapshot) => {
      const data: T[] = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
      setDocuments(data)
    })

    return () => unsub()
  }, [])

  return { documents }
}
