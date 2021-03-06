import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';

import { watcherCompanies } from '../ducks/companies/sagas';
import { companySlice } from '../ducks/companies/slice';
import { watcherUser } from '../ducks/user/sagas';
import { userSlice } from '../ducks/user/slice';

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  companies: companySlice.reducer,
});

export function* rootSaga() {
  yield all([watcherUser(), watcherCompanies()]);
}
