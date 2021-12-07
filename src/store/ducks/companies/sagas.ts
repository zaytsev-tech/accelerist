import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { dislikeCompany, getAllCompanies, likeCompany } from '../../../api/companies';
import { CompanyActions } from './actions';
import { setCompanies, setDislike, setError, setLike } from './slice';
import { CompanyData } from './types';

function* getCompanies() {
  try {
    const response: AxiosResponse<CompanyData> = yield call(getAllCompanies);
    yield put(setCompanies(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

function* getLike({ payload: value }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<boolean> = yield call(likeCompany, value);
    yield put(setLike({ id: value, key: response.data }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

function* getDislike({ payload: value }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<boolean> = yield call(dislikeCompany, value);
    yield put(setDislike({ id: value, key: response.data }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

export function* watcherCompanies() {
  yield takeLatest(CompanyActions.getCompanies, getCompanies);
  yield takeLatest(CompanyActions.getLikeCompany, getLike);
  yield takeLatest(CompanyActions.getDislikeCompany, getDislike);
}
