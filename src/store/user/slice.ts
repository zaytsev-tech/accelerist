import { createSlice } from '@reduxjs/toolkit';

import { initialProfile } from './state';

export const userSlice = createSlice({
  name: 'user',
  initialState: initialProfile,
  reducers: {
    setLogin(state, action) {
      return action.payload;
    },
    setError(state, action) {
      return (state.error = action.payload);
    },
  },
});

export const { setLogin, setError } = userSlice.actions;
