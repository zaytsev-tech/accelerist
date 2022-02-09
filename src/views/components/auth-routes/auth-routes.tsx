import { Navigate, Route, Routes } from 'react-router';

import { routes } from '../../routes';
import { Login } from '../login-page/login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login.root} element={<Login />} />
      <Route path="*" element={<Navigate to={routes.login.root} />} />
    </Routes>
  );
};
