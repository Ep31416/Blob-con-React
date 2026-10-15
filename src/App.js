import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from './components/Header'; 
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import BlobPage from './components/BlobPage';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> 

        <main className="App-contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blob" element={<BlobPage />} />
            <Route path="/acerca" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;