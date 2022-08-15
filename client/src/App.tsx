import React, { useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import GlobalStyle from './styles/theme/global';
import GlobalFonts from './styles/fonts/font';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
