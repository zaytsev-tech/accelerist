import { createAction } from '@reduxjs/toolkit';

import { LikeSwitcher } from './types';

export enum CompanyActions {
  getCompanies = 'COMPANIES/GET',
  getLikeCompany = 'COMPANIES/LIKE',
  getDislikeCompany = 'COMPANIES/DISLIKE',
}

export const getCompanies = createAction(CompanyActions.getCompanies);
export const getLikeCompany = createAction<string>(CompanyActions.getLikeCompany);
export const getDislikeCompany = createAction<string>(CompanyActions.getDislikeCompany);
