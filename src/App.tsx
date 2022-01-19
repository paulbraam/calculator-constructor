import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { combineProviders } from './utils';
import { Theme } from './Theme';
import { store } from './store';
import { Provider as StateProvider } from 'react-redux';
import { Routes } from './routing/Routes';
import { StyledEngineProvider } from '@mui/material/styles';
import { NotificationProvider } from './providers/NotificationProvider';

import './styles.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const App: React.FC = () => {
  const Providers = combineProviders([
    NotificationProvider,
    [StateProvider, { store }],
    [ThemeProvider, { theme: Theme }]
  ]);

  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <Providers>
          <Routes />
        </Providers>
      </StyledEngineProvider>
    </Router>
  );
};

export default App;
