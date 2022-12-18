import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Se utiliza propiedades de padre
  // <App saludo="Hello World!!"/>

  // Se utiliza un hijo dentro de elemento
  // <App>
  //   <h1>HELLO WORLD CHILDREN</h1>
  // </App>

  <App />
);
