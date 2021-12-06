import { AxiosResponse } from 'axios';

import { AuthData, Profile } from '../../store/user/types';
import { apiUser } from '../base-axios';

export function postUserLogin(values: AuthData): Promise<AxiosResponse<Profile>> {
  return apiUser.post('/api/v1/auth/sign_in', JSON.stringify(values));
}

export function postRegistration(values: AuthData): Promise<AxiosResponse<Profile>> {
  return apiUser.post('/api/v1/auth/sign_up', JSON.stringify(values));
}
