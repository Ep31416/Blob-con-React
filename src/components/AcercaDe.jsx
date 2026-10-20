import React from 'react';
import './AcercaDe.css'; // <-- La conexión clave a su propio archivo css
const AcercaDe = () => {
  return (
    <div className="contenedor-pagina">
      <h2>Acerca de nosotros</h2>
      
      <div className="tarjeta-info">
        <h3>Trabajo Práctico N°7</h3>
        <p className="texto-descriptivo">
          Este proyecto fue desarrollado para la cátedra de Lenguaje IV de la carrera 
          de Ingeniería en Informática.
        </p>
        <p><strong>Objetivo Principal:</strong> Diseñar un proyecto en Visual Studio Code usando React para aplicar el concepto de BLOB y el enrutamiento con React Router.</p>
        <br/>
        <p><strong>Tecnologías utilizadas:</strong> React, React Router Dom, CSS3, HTML5.</p>
      </div>
    </div>
  );
};

export default AcercaDe;