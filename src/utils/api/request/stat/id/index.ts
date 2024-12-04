import { api } from '../../../instance';
import { AxiosRequestConfig } from 'axios';
import { IStats } from '../../../../../types';

interface RequestStatParams {
  params: {id: number}
  config?: AxiosRequestConfig
}

export const requestStat = ({ params, config }: RequestStatParams) => {
  return api.get<IStats>(`stat/${params.id}`, { ...config })
};

