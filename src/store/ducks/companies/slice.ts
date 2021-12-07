import { createSlice } from '@reduxjs/toolkit';

import { initialCompany } from './state';
import { CompanyData, CompanyDetails } from './types';

export const companySlice = createSlice({
  name: 'company',
  initialState: initialCompany,
  reducers: {
    setCompanies(state, action) {
      const { items, meta } = action.payload;
      state.items = items.reduce(
        (obj: Record<string, CompanyDetails>, curr: CompanyDetails) => {
          obj[curr.id] = curr;
          return obj;
        },
        {},
      );
      state.meta = meta;
      state.error = '';
    },
    setFavorites(state, action) {
      const { items, meta } = action.payload;
      state.items = items.reduce(
        (obj: Record<string, CompanyDetails>, curr: CompanyDetails) => {
          obj[curr.id] = curr;
          return obj;
        },
        {},
      );
      state.meta = meta;
      state.error = '';
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCompanies, setFavorites, setError } = companySlice.actions;
