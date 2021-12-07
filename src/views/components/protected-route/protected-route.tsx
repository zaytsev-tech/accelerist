import { Navigate, Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { routes } from '../../routes';
import { AccountingServices } from '../accounting-services';
import { CorporateProfile } from '../corporate-profile';
import { Dashboard } from '../dashboard';
import { Favorites } from '../favorites';
import { SavedProspects } from '../saved-prospects';
import { Search } from '../search';

export const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path={routes.dashboard.root} element={<Dashboard />} />
      <Route path={routes.search.root} element={<Search />} />
      <Route path={routes.prospects.root} element={<SavedProspects />} />
      <Route path={routes.accountingServices.root} element={<AccountingServices />} />
      <Route path={routes.search.corporateProfile} element={<CorporateProfile />} />
      <Route path={routes.favorites.root} element={<Favorites />} />
      <Route path="*" element={<Navigate to={routes.dashboard.root} />} />
    </Routes>
  );
};
