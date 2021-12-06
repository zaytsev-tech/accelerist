import axios, { AxiosRequestConfig } from 'axios';

const baseAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://accelerist.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiUser = axios.create(baseAxiosConfig);
