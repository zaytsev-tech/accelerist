import { applyMiddleware, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { CompanyData } from '../ducks/companies/types';
import { User } from '../ducks/user';
import { rootReducer, rootSaga, sagaMiddleware } from './middleware';

const persistConfig = {
  key: 'userStorage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export interface ConfigState {
  user: User;
  companies: CompanyData;
}
