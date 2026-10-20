import React from 'react';
import './Contacto.css'; // <-- La conexión clave a su propio archivo

const Contacto = () => {
  return (
    <div className="contenedor-contacto">
      <h2>Contacto</h2>
      <p>Dejanos tu mensaje sobre la herramienta de Blobs.</p>

      <form className="formulario-contacto">
        <input type="text" placeholder="Tu Nombre" className="input-form" />
        <input type="email" placeholder="Tu Correo" className="input-form" />
        <textarea placeholder="Mensaje..." rows="5" className="input-form"></textarea>
        <button type="button" className="btn-verde">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contacto;