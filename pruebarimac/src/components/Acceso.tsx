// Acceso.tsx

import React from 'react';
import '../styles/acceso/Acesso.scss';


const Acceso: React.FC = () => {
  const handleCotizarClick = () => {
    // Lógica para manejar el clic en el botón "Cotiza aquí"
    // Por ejemplo, podrías llamar a una función para manejar la solicitud de cotización
    // o navegar a una nueva pantalla utilizando enrutamiento.
  };

  return (
    <div className="acceso">
      {/* Sección izquierda con la imagen */}
      <div className="izquierda" style={{ margin: '10%' }}>
      <img src='1000004308.png' alt="Imagen Derecha" style={{ width: '150%' }} />
       
      </div>
      {/* Sección derecha con la imagen y los campos de entrada */}
      <div className="derecha" style={{ margin: '10%' }}>
        {/* Imagen derecha */}
        <div className="imagen-derecha">
        <img src='creadoparati.png' alt="Imagen Izquierda" style={{ width: '100%' }} />
        <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
        </div>
       {/* Campos de entrada */}
       <div className="campos2">
          {/* ComboBox para seleccionar tipo de documento */}
          <select>
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
            <option value="RUC">RUC</option>
          </select>
          {/* Campo de texto para el número de documento */}
          <input  type="text" placeholder="Número de documento" pattern="\d*" />
        </div>
        {/* Otros campos en una columna */}
        <div className="campos">
          {/* Campo de texto para el número de celular */}
          <input className="celular" type="text" placeholder="Celular" pattern="\d*" />
          {/* Checkbox para aceptar política de privacidad */}
          <label>
            <input type="checkbox" />
            Acepto la Política de Privacidad
          </label>
          {/* Checkbox para aceptar política de comunicaciones comerciales */}
          <label>
            <input type="checkbox" />
            Acepto la Política de Comunicaciones Comerciales
          </label>
          {/* Link a términos y condiciones */}
          <a href="#">Aplican Términos y Condiciones</a>
          {/* Botón para cotizar */}
          <button onClick={handleCotizarClick}>Cotiza aquí</button>
        </div>
      </div>
    </div>
  );
};

export default Acceso;