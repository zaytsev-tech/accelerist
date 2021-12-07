import { createAction } from '@reduxjs/toolkit';

export enum CompanyActions {
  getCompanies = 'COMPANIES/GET',
  getFavorites = 'COMPANIES/GET-FAVORITES',
}

export const getCompanies = createAction(CompanyActions.getCompanies);
export const getFavorites = createAction(CompanyActions.getFavorites);
