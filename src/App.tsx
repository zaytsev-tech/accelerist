import './App.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalFonts, theme } from './styles';
import { Login } from './views/components/login-page/login';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
      <GlobalFonts />
    </>
  );
}

export default App;
