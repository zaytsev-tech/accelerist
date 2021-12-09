import { AxiosResponse } from 'axios';

import { CompanyData } from '../../store/ducks/companies/types';
import { apiUser } from '../base-axios';

export function getAllCompanies(
  page: number,
  limit: number,
): Promise<AxiosResponse<CompanyData>> {
  return apiUser.get(`/api/v1/companies?page=${page}&limit=${limit}`);
}

export function getAllFavorites(
  page: number,
  limit: number,
): Promise<AxiosResponse<CompanyData>> {
  return apiUser.get(`/api/v1/companies/favorites?page=${page}&limit=${limit}`);
}

export function likeCompany(id: string): Promise<AxiosResponse<boolean>> {
  return apiUser.get(`/api/v1/companies/${id}/like`);
}

export function dislikeCompany(id: string): Promise<AxiosResponse<boolean>> {
  return apiUser.get(`/api/v1/companies/${id}/dislike`);
}
