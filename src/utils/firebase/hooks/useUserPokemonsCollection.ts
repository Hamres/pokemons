import { collection, orderBy, Query, query } from '@firebase/firestore'
import { PokemonDocument } from '../../../types'
import { database } from '../instatnce'
import { useCollection } from './useCollection'
import { User } from '@firebase/auth'

interface UseUserPokemonsCollectionParams {
  uid: User['uid']
}

export const useUserPokemonsCollection = ({ uid }: UseUserPokemonsCollectionParams) => {
  const q = query(collection(database, 'pokemons'), orderBy('id')) as Query<PokemonDocument>
  return useCollection<PokemonDocument>(q)
}
