import axios, { AxiosRequestConfig } from 'axios';

import { store } from '../store/storage';

const baseAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://accelerist.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

function getAccessTokenFromStore(): string | undefined {
  return store.getState().user.accessToken;
}

export const apiAuth = axios.create(baseAxiosConfig);
export const apiUser = axios.create(baseAxiosConfig);

apiUser.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromStore();
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
