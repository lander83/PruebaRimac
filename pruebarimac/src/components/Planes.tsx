import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/planes/Planes.scss';

const Planes: React.FC = () => {
  return (
    <div>
 
      <nav>
        <ul>
          <li>
            <Link to="/Main">
              <div>
                <span>1</span> Planes y Cobertura
              </div>
            </Link>
          </li>
          <li>
            <Link to="/planes/paraalguien">
              <div>
                <span>2</span> Resumen
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div>
    
      </div>
    </div>
  );
};

export default Planes;
