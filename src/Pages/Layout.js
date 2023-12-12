import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import './estilo.css'; 
const Layout= ()=>{
    return (
        <nav>
          <ul>
          <li>
              <Link to="/Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/autor">Autor</Link>
            </li>
            <li>
              <Link to="/chef">Chef</Link>
            </li>
            <li>
              <Link to="/direccion">Dirección</Link>
            </li>
            <li>
              <Link to="/formulario">Formulario</Link>
            </li>
            <li>
              <Link to="/ingredientes">Ingredientes</Link>
            </li>
            <li>
              <Link to="/instalaciones">Instalaciones</Link>
            </li>
            <li>
              <Link to="/multimedia">Multimedia</Link>
            </li>
            <li>
              <Link to="/platillos">Platillos</Link>
            </li>
            <li>
              <Link to="/sucursales">Sucursales</Link>
            </li>
          </ul>
        </nav>
      );
      <Outlet/>
    };
export default Layout