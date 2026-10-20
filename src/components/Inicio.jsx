import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css'; // Conectamos su hoja de estilos

const Inicio = () => {
  return (
    <div className="contenedor-inicio">
      <h2 className="titulo-inicio">Bienvenido al Gestor de Blobs</h2>
      
      <p className="descripcion-inicio">
        Esta es una aplicación interactiva construida con React para el Trabajo Práctico N°7. 
        Aquí podrás generar, manipular y descargar archivos de texto directamente 
        desde la memoria de tu navegador utilizando el concepto de Blobs.
      </p>
      
      <Link to="/blob" className="boton-empezar">
        Probar Herramienta Blobs
      </Link>
    </div>
  );
};

export default Inicio;