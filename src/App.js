import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Home';
import IngresoApp from './components/IngresoApp';
import MenuFuncionarios from './components/MenuFuncionarios';
import IngresoFuncionarios from './components/IngresoFuncionarios';
import CrearUsuario from './components/Menu funcionario/CrearUsuario';
import ModificarUsuario from './components/Menu funcionario/ModificarUsuario';
import EliminarUsuario from './components/Menu funcionario/EliminarUsuario';
import CrearTrabajador from './components/Menu funcionario/CrearTrabajador';
import ModificarTrabajador from './components/Menu funcionario/ModificarTrabajador';
import EliminarTrabajador from './components/Menu funcionario/EliminarTrabajador';
import CrearProveedor from './components/Menu funcionario/CrearProveedor';
import ModificarProveedor from './components/Menu funcionario/ModificarProveedor';
import EliminarProveedor from './components/Menu funcionario/EliminarProveedor';
import CrearTecnico from './components/Menu funcionario/CrearTecnico';
import ModificarTecnico from './components/Menu funcionario/ModificarTecnico';
import EliminarTecnico from './components/Menu funcionario/EliminarTecnico';
import MenuUsuarios from './components/MenuUsuarios'; 
import CrearAsistencia from './components/Menu usuario/CrearAsistencia'; 
import ModificarAsistencia from './components/Menu usuario/Modificar Asistencia'; 
import EliminarAsistencia from './components/Menu usuario/EliminarAsistencia'; 
import ModificarPerfil from './components/Menu usuario/ModificarPerfil';
import RestablecerContrasena from './components/RestablecerContrasena';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ingreso" element={<IngresoApp />} />
        <Route path="/ingreso-usuarios" element={<IngresoApp />} />
        <Route path="/ingreso-funcionarios" element={<IngresoFuncionarios />} />
        <Route path="/menu-funcionarios" element={<MenuFuncionarios />} />
        <Route path="/menu-usuarios" element={<MenuUsuarios />} />
        <Route path="/restablecer-contrasena" element={<RestablecerContrasena/>} />

        <Route path="/crear-asistencia" element={<CrearAsistencia />} />
        <Route path="/modificar-asistencia" element={<ModificarAsistencia />} />
        <Route path="/eliminar-asistencia" element={<EliminarAsistencia />} />
        <Route path="/modificar-perfil" element={<ModificarPerfil />} />


        <Route path="/crear-usuario" element={<CrearUsuario />} />
        <Route path="/modificar-usuarios" element={<ModificarUsuario />} />
        <Route path="/eliminar-usuarios" element={<EliminarUsuario />} />

        <Route path="/crear-trabajador" element={<CrearTrabajador />} />
        <Route path="/modificar-trabajador" element={<ModificarTrabajador />} />
        <Route path="/eliminar-trabajador" element={<EliminarTrabajador />} />

        <Route path="/crear-proveedor" element={<CrearProveedor />} />
        <Route path="/modificar-proveedor" element={<ModificarProveedor />} />
        <Route path="/eliminar-proveedor" element={<EliminarProveedor />} />

        <Route path="/crear-tecnico" element={<CrearTecnico />} />
        <Route path="/modificar-tecnico" element={<ModificarTecnico />} />
        <Route path="/eliminar-tecnico" element={<EliminarTecnico />} />

        
      </Routes>
    </Router>
  );
}

export default App;
