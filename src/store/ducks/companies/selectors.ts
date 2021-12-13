import { createSelector } from 'reselect';

import { RootState } from '../../storage/persist';

const selectCompanies = (store: RootState) => store.companies;

export const selectCompanyItems = createSelector(
  selectCompanies,
  (companies) => companies.items,
);
