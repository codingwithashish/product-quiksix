import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/app.scss';
const root = ReactDOM.createRoot(document.getElementById('main-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
