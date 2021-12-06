import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Profile } from '../../../store/user';
import { routes } from '../../routes';
import { Dashboard } from '../dashboard';

export const ProtectedRoute = () => {
  const isAuth = useSelector((state: Profile) => state.user.isAuthorized);
  if (isAuth) {
    return <Dashboard />;
  } else {
    return <Navigate to={routes.login.root} />;
  }
};
