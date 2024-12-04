import { AxiosRequestConfig } from 'axios';
import { api } from '../../instance';
import { ILastData } from '../../../../types';

interface RequestPokemonParams {
  params: {limit: number, offset: number}
  config?: AxiosRequestConfig
}

export const requestPokemons = ({ params, config }: RequestPokemonParams) =>
   api.get<ILastData>(`pokemon`, {params, ...config })

