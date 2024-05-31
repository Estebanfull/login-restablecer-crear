import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; 
import '../../Css/EstilosSubMenu.css'; 
import axios from 'axios'; 

function CrearTecnico() {
  const [tecnico, setTecnico] = useState({
    nombre: '',
    telefono: '',
    especialidad: ''
  });
  
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTecnico({ ...tecnico, [name]: value });
  };

  const validarTelefono = (telefono) => {
    const telefonoRegex = /^[0-9]{10}$/;
    return telefonoRegex.test(telefono);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validarTelefono(tecnico.telefono)) {
      setMensajeError('El número de teléfono debe contener exactamente 10 dígitos.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/tecnicos', tecnico);
      setMensajeExito(response.data.message);
      setTecnico({
        nombre: '',
        telefono: '',
        especialidad: ''
      });
      setMensajeError('');
    } catch (error) {
      console.error('Error:', error);
      setMensajeError('Ocurrió un error al crear el técnico. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="crear-usuario-container">
      <div className="crear-usuario-logo-container">
        <img src={logo} alt="Ike" className="crear-usuario-logo" />
        <button className="crear-usuario-boton-volver" onClick={() => window.history.back()}>Salir</button>
      </div>

      <div className="crear-usuario-contenido">
        <header className="crear-usuario-encabezado">
          <h1 className="crear-usuario-titulo-menu">Crear Técnico</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario">
            <label className="crear-usuario-label">
              Nombre:
              <input type="text" name="nombre" value={tecnico.nombre} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Teléfono:
              <input type="text" name="telefono" value={tecnico.telefono} onChange={handleInputChange} className="crear-usuario-input" pattern="[0-9]{10}" title="El número de teléfono debe contener exactamente 10 dígitos." required />
            </label>
            Especialidad:
              <select name="especialidad" value={tecnico.especialidad} onChange={handleInputChange} className="crear-usuario-input" required>
                <option value="">Seleccione una opción</option>
                <option value="HOGAR">HOGAR</option>
                <option value="MEDICA">MEDICA</option>
                <option value="AMBULANCIA">AMBULANCIA</option>
                <option value="AUTOS">AUTOS</option>
                <option value="CONDUCTOR ELEGIDO">CONDUCTOR ELEGIDO</option>
                <option value="LEGAL">LEGAL</option>
              </select>
              <button type="submit" className="crear-usuario-submit">Crear Proveedor</button> {/* Utiliza la misma clase que en CrearUsuario */}
          </form>
          {/* Mostrar el mensaje de éxito */}
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
          {/* Mostrar el mensaje de error */}
          {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
        </div>

        <footer className="crear-usuario-pie-pagina"> {/* Utiliza la misma clase que en CrearUsuario */}
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default CrearTecnico;
