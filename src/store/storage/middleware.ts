import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';

import { watcherUser } from '../user/sagas';
import { userSlice } from '../user/slice';

export function* rootSaga() {
  yield all([watcherUser()]);
}

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
