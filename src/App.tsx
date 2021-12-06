import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalFonts, GlobalStyles, theme } from './styles';
import { AccountingServices } from './views/components/accounting-services';
import { CorporateProfile } from './views/components/corporate-profile';
import { Dashboard } from './views/components/dashboard';
import { Favorites } from './views/components/favorites';
import { Login } from './views/components/login-page/login';
import { SavedProspects } from './views/components/saved-prospects';
import { Search } from './views/components/search';
import { routes } from './views/routes';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={routes.dashboard.root} element={<Dashboard />} />
            <Route path={routes.search.root} element={<Search />} />
            <Route path={routes.prospects.root} element={<SavedProspects />} />
            <Route
              path={routes.accountingServices.root}
              element={<AccountingServices />}
            />
            <Route path={routes.search.corporateProfile} element={<CorporateProfile />} />
            <Route path={routes.favorites.root} element={<Favorites />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </ThemeProvider>
        <GlobalFonts />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
