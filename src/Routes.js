import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Formulario from './Components/FormAlugar/Formulario.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
