import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { postUserLogin } from '../../../api/user';
import { postRegistration } from '../../../api/user/user-api';
import { UserActions } from './actions';
import { setError, setLogin } from './slice';
import { AuthData, Profile } from './types';

function* loginUser({ payload }: PayloadAction<AuthData>) {
  try {
    const response: AxiosResponse<Profile> = yield call(postUserLogin, payload);
    yield put(setLogin(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

function* registrationUser({ payload }: PayloadAction<AuthData>) {
  try {
    const response: AxiosResponse<Profile> = yield call(postRegistration, payload);
    console.log('Registration response: ', response.data);
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

export function* watcherUser() {
  yield takeLatest(UserActions.loginRequest, loginUser);
  yield takeLatest(UserActions.regRequest, registrationUser);
}
