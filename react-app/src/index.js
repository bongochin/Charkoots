import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuNavBarProvider from './context/MenuNavBarContext';

import 'fontsource-roboto'

ReactDOM.render(
  <React.StrictMode>
    <MenuNavBarProvider>
      <App />
    </MenuNavBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
