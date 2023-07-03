import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store/store';

// import { ConfigProvider } from 'antd';
// import antdTheme from 'config/antdTheme';
// import { themeCheck } from 'config/themeHelper';
// import toastProps from 'config/toastProps';
// import { ToastContainer } from 'react-toastify';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConfigProvider theme={antdTheme}> */}
      <BrowserRouter>
        <App />
        {/* <ToastContainer {...toastProps} /> */}
      </BrowserRouter>
      {/* </ConfigProvider> */}
    </Provider>
  </React.StrictMode>
);
