import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Autor from './Pages/Autor';
import Inicio from './Pages/Inicio';
import Chef from './Pages/Chef';
import Direccion from './Pages/Direccion';
import Formulario from './Pages/Formulario';
import Ingredientes from './Pages/Ingredientes';
import Instalaciones from './Pages/Instalaciones';
import Multimedia from './Pages/Multimedia';
import Platillos from './Pages/Platillos';
import Sucursales from './Pages/Sucursales';
import Layout from './Pages/Layout';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="bg-dark text-white text-center py-4">
        <h1>Rincon del sabor</h1>
      </header>

      {/* Router */}
      <BrowserRouter>
        <Layout/>
        {/* Routes */}
        <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Autor" element={<Autor />} />
            <Route path="/Chef" element={<Chef />} />
            <Route path="/Direccion" element={<Direccion />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/Ingredientes" element={<Ingredientes />} />
            <Route path="/Instalaciones" element={<Instalaciones />} />
            <Route path="/Multimedia" element={<Multimedia />} />
            <Route path="/Platillos" element={<Platillos />} />
            <Route path="/Sucursales" element={<Sucursales />} />
   
        </Routes>
      </BrowserRouter>

 {/* Footer */}
 <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>Dirección : Calle villa armonia #45</p>
          <p>Telefono:77734197</p>
          <p>Horario:12am -22 pm</p>
          <p>
          <a href="https://www.facebook.com/TuPaginaDeFacebook" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Logo de Facebook" width="50" height="50"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt="Logo de WhatsApp" width="50" height="50"/>
      </a>
      <a href="https://www.instagram.com/TuUsuarioDeInstagram" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Logo de Instagram" width="50" height="50"/>
      </a>

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
