import { AxiosResponse } from 'axios';

import { AuthData, Profile } from '../../store/ducks/user/types';
import { apiAuth } from '../base-axios';

export function postUserLogin(values: AuthData): Promise<AxiosResponse<Profile>> {
  return apiAuth.post('/api/v1/auth/sign_in', values);
}

export function postRegistration(values: AuthData): Promise<AxiosResponse<Profile>> {
  return apiAuth.post('/api/v1/auth/sign_up', values);
}
