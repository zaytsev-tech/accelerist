import { AuthData } from '../../store/user/types';
import { apiUser } from '../base-axios';

export const postUserLogin = (values: AuthData) => {
  return apiUser.post('/api/v1/auth/sign_in', values).then((response) => response);
};
