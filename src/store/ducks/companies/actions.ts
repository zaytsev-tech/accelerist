import { createAction } from '@reduxjs/toolkit';

import { FilterDetails, Pagination } from './types';

export enum CompanyActions {
  getCompanies = 'COMPANIES/GET',
  getFavorites = 'COMPANIES/GET-FAVORITES',
  getLikeCompany = 'COMPANIES/LIKE',
  getDislikeCompany = 'COMPANIES/DISLIKE',
  getFilteredCompanies = 'COMPANIES/FILTERED',
}

export const getCompanies = createAction<Pagination>(CompanyActions.getCompanies);
export const getFavorites = createAction<Pagination>(CompanyActions.getFavorites);
export const getLikeCompany = createAction<string>(CompanyActions.getLikeCompany);
export const getDislikeCompany = createAction<string>(CompanyActions.getDislikeCompany);
export const getFilteredCompanies = createAction<FilterDetails>(
  CompanyActions.getFilteredCompanies,
);
