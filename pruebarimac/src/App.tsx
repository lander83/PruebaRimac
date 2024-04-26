// src/App.tsx

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Acceso from './components/Acceso';
import Planes from './components/Planes';
import Header from './components/Header';
import Volver from './components/Volver';
import Main from './components/Main';
import Resumen from './components/Resumen';

const App: React.FC = () => {
  return (
  
    <Router>
    <div className="app">
      <Header />
      <Routes>  {/* Wrap Routes around your Route components */}
        <Route path="/" element={<Acceso />} /> 
        {/*<Route path="/planes" element={<Planes />} />*/}
        <Route path="/main" element={<Main />} />
        <Route path='/resumen' element={<Resumen/>} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
