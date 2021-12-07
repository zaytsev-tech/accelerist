import { AxiosResponse } from 'axios';

import { CompanyData } from '../../store/ducks/companies/types';
import { apiUser } from '../base-axios';

export function getAllCompanies(): Promise<AxiosResponse<CompanyData>> {
  return apiUser.get('/api/v1/companies?page=1&limit=15');
}

export function getAllFavorites(): Promise<AxiosResponse<CompanyData>> {
  return apiUser.get('/api/v1/companies/favorites?page=1&limit=15');
}
