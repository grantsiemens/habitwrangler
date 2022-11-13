import React from 'react';
import ReactDOM from 'react-dom/client';
import Default from './components/Default';
import styled, { ThemeProvider } from 'styled-components/macro';
import {initialTheme, GlobalStyle, SizingContainer} from './styles/theme.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyle theme={initialTheme} />
      <ThemeProvider theme={initialTheme}>
          <SizingContainer>
            <Default />
          </SizingContainer>
      </ThemeProvider>
  </React.StrictMode>
);