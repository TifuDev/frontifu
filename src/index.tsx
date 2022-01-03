import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// eslint-disable-next-line
if (process.env.NODE_ENV === 'development') reportWebVitals(console.log);
