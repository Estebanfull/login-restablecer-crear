import React, { useState } from 'react';
import logo from '.././Imagenes/logoike.svg'; // Importa el logo
import '../Css/MenuFuncionarios.css'; // Importa el archivo CSS para estilos personalizados 
import Imagen1 from '../Imagenes/imagenes cambian/imagen_1.jpg';
import { Link } from 'react-router-dom';

function MenuUsuarios() {
  const [submenus, setSubmenus] = useState({
    asistencia: false, // Corrige la clave del submenú 'asistencia'
    perfil: false,     // Corrige la clave del submenú 'perfil'
  });

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleSubMenu = (submenuId) => {
    setSubmenus(prevState => ({
      ...prevState,
      [submenuId]: !prevState[submenuId]
    }));
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-container">
      <div className="logo-container">
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        <img src={logo} alt="Ike" className="logo" />
        <button className="boton-volver" onClick={() => window.history.back()}>Salir</button>
      </div>

      <nav className="menu">
        {menuVisible && (
          <ul className="menu-list">
            <li>
              <button onClick={() => toggleSubMenu('asistencia')}>Servicio de asistencia</button>
              <ul className="submenu" style={{ display: submenus.asistencia ? 'block' : 'none' }}>
                <li><Link to="/crear-asistencia">Solicitar </Link></li>
                <li><Link to="/modificar-asistencia">Modificar </Link></li>
                <li><Link to="/eliminar-asistencia">Eliminar</Link></li>
              </ul>
            </li>
            <li>
              <button onClick={() => toggleSubMenu('perfil')}>Perfil</button>
              <ul className="submenu" style={{ display: submenus.perfil ? 'block' : 'none' }}>
                <li><Link to="/modificar-perfil">Modificar </Link></li>
              </ul>
            </li>
          </ul>
        )}
      </nav>

      <div className="contenido">
        <header className="encabezado">
          <h1 className="titulo-menu">Bienvenido usuario</h1>  
        </header>

        <div className="contenedor-central">
          <div className="imagen-texto">
            <img src={Imagen1} alt="Ike" className="logo" />
          </div>
          <div className="texto">
            <h2>Acerca de <img src={logo} alt="Ike" className="logo" /> </h2>  
            <p> Fundada en 1988, somos una empresa mexicana con más de 30 años de experiencia y con presencia en 4 países de Latinoamérica. Lo que nos inspira es hacer más sencilla la vida de las personas a través de soluciones hechas a la medida. </p>
          </div>
        </div>

        <footer className="pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}


export default MenuUsuarios;
