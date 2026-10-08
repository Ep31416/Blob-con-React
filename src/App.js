import React, { useState } from 'react';
import './App.css'; 

import Header from './components/Header'; 
import Footer from './components/Footer';


const App = () => {
  const [miBlob, setMiBlob] = useState(null);
  const [resultado, setResultado] = useState('Esperando acción...');

  const handleCrearBlob = () => {
    const contenido = "Hola, este es un archivo generado con Blobs en React.";
    const nuevoBlob = new Blob([contenido], { type: 'text/plain' });
    setMiBlob(nuevoBlob);
    setResultado("Blob creado exitosamente en memoria.");
  };

  const handleDescargar = () => {
    if (!miBlob) {
      alert("Primero tenés que crear el Blob.");
      return;
    }
    const url = URL.createObjectURL(miBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo_react_blob.txt';
    a.click();
    URL.revokeObjectURL(url);
    setResultado("El archivo se descargó en tu computadora.");
  };

  const handleSlice = () => {
    if (!miBlob) {
      alert("Primero tenés que crear el Blob.");
      return;
    }
    const blobCortado = miBlob.slice(0, 14);
    setMiBlob(blobCortado);
    const lector = new FileReader();
    lector.onload = (evento) => {
      setResultado(`Archivo recortado exitosamente a: "${evento.target.result}". ¡Probá descargarlo ahora!`);
    };
    lector.readAsText(blobCortado);
  };

  return (
    <div className="App">
      {/* 1. Ponemos el bloque de arriba */}
      <Header /> 

      {/* 2. El contenido central que ya tenías */}
      <main className="App-contenido">
        <h1>Ejemplo de uso de Blobs</h1>
        
        <div className="contenedor-botones">
          <button onClick={handleCrearBlob} className="btn-verde">Crear Blob</button>
          <button onClick={handleDescargar} className="btn-verde">Descargar Blob</button>
          <button onClick={handleSlice} className="btn-verde">Usar Slice</button>
        </div>

        <p className="texto-resultado">{resultado}</p>
      </main>

      {/* 3. Ponemos el bloque de abajo */}
      <Footer />
    </div>
  );
}

export default App;