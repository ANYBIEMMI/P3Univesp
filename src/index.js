import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRoutes from './Routes'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>

      <AppRoutes />
     
  
  </React.StrictMode>,
  document.getElementById('root')
);
