import React, { useState } from 'react';
import Volver from './Volver';
import Planes from './Planes';
import ParaMi from './ParaMi';
import '../styles/main/Main.scss';

const Main: React.FC = () => {

    const [mostrarParami, setMostrarParami] = useState(false); // Control de estado para mostrar Parami.tsx

    // Manejador de eventos para el cambio del checkbox "Para mí"
    const handleCheckboxChange = () => {
      // Cambiar el estado para mostrar u ocultar Parami.tsx
      setMostrarParami(!mostrarParami);
    };
    
  return (
    <div>
      <Planes />
      <Volver />
      <div className="cotizacion-section">
        <h2>Rocío ¿Para quién deseas cotizar?</h2>
        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        <div className="checkboxes-container">
          <label className="checkbox-label">
            <input type="checkbox" id="parami" name="parami" onChange={handleCheckboxChange} />
            <span className="checkbox-custom">
              <img src="Plan.png" alt="Plan" />
            </span>
          </label>
          <label className="checkbox-label">
            <input type="checkbox" id="alguienmas" name="alguienmas"  />
            <span className="checkbox-custom">
              <img src="Alguienmas.png" alt="Alguien Más" />
            </span>
          </label>
        </div>
   
      </div>
      {mostrarParami && <ParaMi/>}
    </div>
  );
};

export default Main;
