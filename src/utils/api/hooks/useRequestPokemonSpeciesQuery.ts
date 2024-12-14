import { PokemonType } from '../../../types'
import { useQuery } from '@tanstack/react-query'
import { requestPokemonSpecies } from '../request/pokemon-species/id'

interface UseRequestPokemonSpeciesQueryParams {
  id: PokemonType['id']
}

export const useRequestPokemonSpeciesQuery = (
  params: RequestParams<UseRequestPokemonSpeciesQueryParams>,
  settings?: RequestQuerySettings<typeof requestPokemonSpecies>
) =>
  useQuery(
    ['pokemon-species', params.id],
    () => requestPokemonSpecies({ params, ...(settings?.config && { config: settings.config }) }),
    settings?.options && settings.options
  )
