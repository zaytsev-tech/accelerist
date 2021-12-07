import { createAction } from '@reduxjs/toolkit';

import { AuthData } from './types';

export enum UserActions {
  loginRequest = 'USER/LOGIN',
  logoutRequest = 'USER/LOGOUT',
  regRequest = 'USER/REGISTRATION',
}

export const loginRequest = createAction<AuthData>(UserActions.loginRequest);
export const logoutRequest = createAction(UserActions.logoutRequest);
export const regRequest = createAction<AuthData>(UserActions.regRequest);
