import React, { useState } from 'react';
import logo from '../Imagenes/logoike.svg'; // Importa el logo
import '../Css/MenuFuncionarios.css'; // Importa el archivo CSS para estilos personalizados 
import Imagen1 from '../Imagenes/imagenes cambian/imagen_1.jpg';
import { Link } from 'react-router-dom';

function MenuFuncionarios() {
  const [submenus, setSubmenus] = useState({
    usuarios: false,
    trabajadores: false,
    proveedores: false,
    tecnicos: false
  });
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

  const toggleSubMenu = (submenuId) => {
    setSubmenus(prevState => ({
      ...prevState,
      [submenuId]: !prevState[submenuId]
    }));
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Alternar la visibilidad del menú
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
              <button onClick={() => toggleSubMenu('usuarios')}>Usuarios</button>
              <ul className="submenu" style={{ display: submenus.usuarios ? 'block' : 'none' }}>
                <li><Link to="/Crear-Usuario">Crear</Link></li>
                <li><Link to="/modificar-usuarios">Modificar</Link></li>
                <li><Link to="/eliminar-usuarios">Eliminar</Link></li>
              </ul>
            </li>
            <li>
              <button onClick={() => toggleSubMenu('trabajadores')}>Trabajadores</button>
              <ul className="submenu" style={{ display: submenus.trabajadores ? 'block' : 'none' }}>
                <li><Link to="/crear-trabajador">Crear</Link></li>
                <li><Link to="/modificar-trabajador">Modificar</Link></li>
                <li><Link to="/eliminar-trabajador">Eliminar</Link></li>
              </ul>
            </li>
            <li>
              <button onClick={() => toggleSubMenu('proveedores')}>Proveedores</button>
              <ul className="submenu" style={{ display: submenus.proveedores ? 'block' : 'none' }}>
                <li><Link to="/crear-proveedor">Crear</Link></li>
                <li><Link to="/modificar-proveedor">Modificar</Link></li>
                <li><Link to="/eliminar-proveedor">Eliminar</Link></li>
              </ul>
            </li>
            <li>
              <button onClick={() => toggleSubMenu('tecnicos')}>Técnicos</button>
              <ul className="submenu" style={{ display: submenus.tecnicos ? 'block' : 'none' }}>
                <li><Link to="/crear-tecnico">Crear</Link></li>
                <li><Link to="/modificar-tecnico">Modificar</Link></li>
                <li><Link to="/eliminar-tecnico">Eliminar</Link></li>
              </ul>
            </li>
          </ul>
        )}
      </nav>

      <div className="contenido">
        <header className="encabezado">
          <h1 className="titulo-menu">Bienvenido Colaborador</h1>  
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

export default MenuFuncionarios;
