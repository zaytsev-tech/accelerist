import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalFonts, GlobalStyles, theme } from './styles';
import { AccountingServices } from './views/components/accounting-services';
import { CorporateProfile } from './views/components/corporate-profile';
import { Favorites } from './views/components/favorites';
import { Login } from './views/components/login-page/login';
import { ProtectedRoute } from './views/components/protected-route';
import { SavedProspects } from './views/components/saved-prospects';
import { Search } from './views/components/search';
import { StoreProvider } from './views/components/store-provider';
import { routes } from './views/routes';

function App() {
  return (
    <>
      <Router>
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path={routes.dashboard.root} element={<ProtectedRoute />} />
              <Route path={routes.search.root} element={<Search />} />
              <Route path={routes.prospects.root} element={<SavedProspects />} />
              <Route
                path={routes.accountingServices.root}
                element={<AccountingServices />}
              />
              <Route
                path={routes.search.corporateProfile}
                element={<CorporateProfile />}
              />
              <Route path={routes.favorites.root} element={<Favorites />} />
              <Route path={routes.login.root} element={<Login />} />
            </Routes>
          </ThemeProvider>
        </StoreProvider>
        <GlobalFonts />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
