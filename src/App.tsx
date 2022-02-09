import './App.css';

import { ThemeProvider } from 'styled-components';

import { GlobalFonts, GlobalStyles, theme } from './styles';
import { MainRouter } from './views/components/main-router';
import { StoreProvider } from './views/components/store-provider';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <MainRouter />
        <GlobalFonts />
        <GlobalStyles />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
