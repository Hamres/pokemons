import { api } from '../../../instance';
import { AxiosRequestConfig } from 'axios';
import { PokemonType } from '../../../../../types';

interface RequestPokemonParams {
  params: {id: number}
  config?: AxiosRequestConfig
}

export const requestPokemonById = ({ params, config }: RequestPokemonParams) => api.get<PokemonType>(`pokemon/${params.id}`, {...config })


