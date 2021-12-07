import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getAllCompanies } from '../../../api/companies';
import { getAllFavorites } from '../../../api/companies/companies';
import { CompanyActions } from './actions';
import { setCompanies, setError, setFavorites } from './slice';
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

function* getFavorites() {
  try {
    const response: AxiosResponse<CompanyData> = yield call(getAllFavorites);
    yield put(setFavorites(response.data));
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
  yield takeLatest(CompanyActions.getFavorites, getFavorites);
}
