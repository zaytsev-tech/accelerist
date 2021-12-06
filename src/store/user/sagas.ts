import { call, put, takeLatest } from 'redux-saga/effects';

import { postUserLogin } from '../../api/user';
import { UserActions } from './actions';
import { setError, setLogin } from './slice';

function* loginUser(values) {
  try {
    const response = yield call(postUserLogin, values.payload);
    console.log('response: ', response.data);
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

export function* watcherUser() {
  yield takeLatest(UserActions.loginRequest, loginUser);
}
