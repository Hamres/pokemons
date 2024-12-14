import { AxiosRequestConfig } from 'axios'

import { api } from '../../../instance'
import { PokemonType } from '../../../../../types'

interface RequestPokemonParams {
  params: { name: string }
  config?: AxiosRequestConfig
}

export const requestPokemonByName = ({ params, config }: RequestPokemonParams) =>
  api.get<PokemonType>(`pokemon/${params.name}`, { ...config })
