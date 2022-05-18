import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import './scss/app.scss';

const root = ReactDOM.createRoot(document.getElementById('main-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
