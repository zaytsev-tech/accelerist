import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalFonts, theme } from './styles';
import { Dashboard } from './views/components/dashboard';
import { Login } from './views/components/login-page/login';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </ThemeProvider>
        <GlobalFonts />
      </Router>
    </>
  );
}

export default App;
