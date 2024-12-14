import { useMutation } from '@tanstack/react-query'
import { PokemonDocument, User } from '../../../types'
import { addDocument } from '../requests'
import { Collection } from '../instatnce'

export interface UserDocument extends User {}

interface UseAddDocumentPokemonMutationParams {
  collection: Extract<Collection, 'pokemons'>
  data: PokemonDocument
  id?: string
}

type UseAddDocumentMutationParams = UseAddDocumentPokemonMutationParams

export const useAddDocumentMutation = (settings?: RequestMutationSettings<typeof addDocument>) =>
  useMutation(
    ['addDocumentMutation'],
    (params: RequestParams<UseAddDocumentMutationParams>) =>
      addDocument(params.collection, params.data),
    settings?.options && settings.options
  )
