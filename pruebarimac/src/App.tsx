// src/App.tsx

import React from 'react';
import Header from './components/Header';
import './App.css';
import Acceso from './components/Acceso';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Acceso/>
    </div>
  );
};

export default App;
