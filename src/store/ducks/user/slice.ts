import { createSlice } from '@reduxjs/toolkit';

import { initialProfile } from './state';

export const userSlice = createSlice({
  name: 'user',
  initialState: initialProfile,
  reducers: {
    setLogin(state, action) {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isAuthorized = Boolean(accessToken);
      state.error = '';
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLogin, setError } = userSlice.actions;
