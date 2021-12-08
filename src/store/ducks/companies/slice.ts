import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialCompany } from './state';
import { CompanyDetails, LikeSwitcher } from './types';

export const companySlice = createSlice({
  name: 'company',
  initialState: initialCompany,
  reducers: {
    setCompanies(state, action) {
      const { items, meta } = action.payload;
      console.log('meta: ', meta);
      state.items = items.reduce(
        (obj: Record<string, CompanyDetails>, curr: CompanyDetails) => {
          obj[curr.id] = curr;
          return obj;
        },
        {},
      );
      state.meta = meta;
      state.error = '';
      state.isLoading = false;
    },
    setLike(state, action: PayloadAction<LikeSwitcher>) {
      const { id } = action.payload;
      state.items[id].like = true;
    },
    setDislike(state, action) {
      const { id } = action.payload;
      state.items[id].like = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state) {
      state.isLoading = true;
    },
  },
});

export const { setCompanies, setError, setLike, setDislike, setLoading } =
  companySlice.actions;
