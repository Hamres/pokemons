import { AxiosRequestConfig } from 'axios';

import { api } from '../../../instance';

interface RequestPokemonSpeciesParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonSpecies = ({ params, config }: RequestPokemonSpeciesParams) =>
  api.get<any>(`pokemon-species/${params.id}`, { ...config });