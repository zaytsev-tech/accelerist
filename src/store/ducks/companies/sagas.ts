import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  dislikeCompany,
  getAllCompanies,
  getAllFavorites,
  getAllFilteredCompanies,
  likeCompany,
} from '../../../api/companies';
import { CompanyActions } from './actions';
import { setCompanies, setDislike, setError, setLike, setLoading } from './slice';
import { CompanyData, FilterDetails, Pagination } from './types';

function* getCompanies({ payload: value }: PayloadAction<Pagination>) {
  try {
    yield put(setLoading());
    const { page, limit } = value;
    const response: AxiosResponse<CompanyData> = yield call(getAllCompanies, page, limit);
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

function* getFilteredCompanies({ payload: value }: PayloadAction<FilterDetails>) {
  try {
    yield put(setLoading());
    const response: AxiosResponse<CompanyData> = yield call(
      getAllFilteredCompanies,
      value,
    );
    console.log('resopnse: ', response);
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

function* getFavorites({ payload: value }: PayloadAction<Pagination>) {
  try {
    yield put(setLoading());
    const { page, limit } = value;
    const response: AxiosResponse<CompanyData> = yield call(getAllFavorites, page, limit);
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
  yield takeLatest(CompanyActions.getFavorites, getFavorites);
  yield takeLatest(CompanyActions.getLikeCompany, getLike);
  yield takeLatest(CompanyActions.getDislikeCompany, getDislike);
  yield takeLatest(CompanyActions.getFilteredCompanies, getFilteredCompanies);
}
