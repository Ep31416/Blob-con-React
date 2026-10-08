import React from 'react';
import './Header.css'; // Conectamos su archivo CSS

// Así se escribe como función flecha
const Header = () => {
  return (
    <header className="encabezado">
      <h2>UCASAL - Ingeniería en Informática</h2>
      <p>Lenguaje IV - Trabajo Práctico N°5 (Blobs)</p>
    </header>
  );
};

export default Header;