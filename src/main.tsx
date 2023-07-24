import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import toastProps from 'config/toastProps';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store } from 'store/store';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer {...toastProps} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
