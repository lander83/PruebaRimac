// Volver.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import '../styles/volver/Volver.scss';

const Volver: React.FC = () => {
  return (
    <div className="volver">
      <Link to="/" className="volver-link">
        <div className="circle-icon">
          <FiArrowLeft className="volver-icon" />
        </div>
        <span>Volver</span>
      </Link>
    </div>
  );
};

export default Volver;
