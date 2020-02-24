import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import envia from './styles/themes/envia';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={envia}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
