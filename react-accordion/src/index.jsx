import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { languages } from './languages';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <App topics={languages}/>
);
