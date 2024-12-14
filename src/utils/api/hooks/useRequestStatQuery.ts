import { useQuery } from '@tanstack/react-query'
import { requestStat } from '../request'

interface UseRequestPokemonQueryParams {
  id: number
}

export const useRequestStatQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery(['stat', id], () => requestStat({ params: { id } }))
