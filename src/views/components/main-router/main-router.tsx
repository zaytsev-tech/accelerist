import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { selectAuth } from '../../../store/ducks/user/selectors';
import { AuthRoutes } from '../auth-routes';
import { ProtectedRoute } from '../protected-route';

export const MainRouter = () => {
  const isAuth = useSelector(selectAuth);
  return <Router>{!isAuth ? <AuthRoutes /> : <ProtectedRoute />}</Router>;
};
