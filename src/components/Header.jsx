import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="encabezado">
      <h2>UCASAL - Ingeniería en Informática</h2>
      <p>Lenguaje IV - Trabajo Práctico N°6 (Blobs)</p>
      
      {/* Menú de navegación */}
      <nav className="navegacion">
        <Link to="/">Inicio</Link>
        <Link to="/blob">Herramienta Blobs</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;