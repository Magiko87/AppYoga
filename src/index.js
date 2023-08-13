//---> Import delle librerie React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  


//---> Creazione del root dell'app e rendering del componente App all'interno di StrictMode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//---> Chiamata alla funzione per reportare le web vitals
reportWebVitals();
