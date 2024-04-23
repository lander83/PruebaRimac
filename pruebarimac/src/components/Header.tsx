
import React from 'react';
import '../styles/header/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="rimaclogo.png" alt="Logo" />
      </div>
      <div className="contact-container">
        <p className="contact-info">¡Compra por este medio!</p>
        <img className='icon-telefono'src="GlTelephoneSolid.png"  />
        <div className="phone-icon">(01) 411 6001</div>
      </div>
    </header>
  );
};

export default Header;
