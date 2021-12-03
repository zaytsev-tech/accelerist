import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalFonts, GlobalStyles, theme } from './styles';
import { CorporateProfile } from './views/components/corporate-profile';
import { Dashboard } from './views/components/dashboard';
import { Login } from './views/components/login-page/login';
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
            <Route path={routes.search.corporateProfile} element={<CorporateProfile />} />
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
