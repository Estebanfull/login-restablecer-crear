import React from 'react';
import { Link } from 'react-router-dom'; // Importa solo Link
import '../Css/Home.css'; // Importa el archivo CSS
import logo from '../Imagenes/logoike.svg'; // Importa tu logo

function Inicio() {
  return (
    <div className="contenedor">
      <img src={logo} alt="Logo de la aplicación" className="logo" />
      <Link to="/ingreso-usuarios" className="boton">Ingreso Usuarios</Link>
      <Link to="/ingreso-funcionarios" className="boton">Ingreso Funcionarios</Link>
    </div>
  );
}

export default Inicio;