import { requestPokemonById } from '../request'
import { useQueries } from '@tanstack/react-query'

interface UseRequestPokemonQueriesParams {
  offset: number
}

export const useRequestPokemonsQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: Array.from({ length: offset }).map((_el, index) => {
      const pokemonId = index + 1
      return {
        queryKey: ['pokemon', pokemonId],
        queryFn: () => requestPokemonById({ params: { id: pokemonId } })
      }
    })
  })
