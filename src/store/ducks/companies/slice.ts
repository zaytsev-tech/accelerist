import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialCompany } from './state';
import { CompanyDetails, LikeSwitcher } from './types';

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
  },
});

export const { setCompanies, setError, setLike, setDislike } = companySlice.actions;
