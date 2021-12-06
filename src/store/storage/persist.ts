import { applyMiddleware, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { User } from '../user';
import { rootReducer, rootSaga, sagaMiddleware } from './middleware';

const persistConfig = {
  key: 'userStorage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistProvider = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export interface ConfigState {
  user: User;
}
