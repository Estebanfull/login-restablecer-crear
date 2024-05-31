import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import axios from 'axios'; // Importa Axios
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario

function CrearTrabajador() {
  // Definir el estado para almacenar los datos del nuevo trabajador
  const [trabajador, setTrabajador] = useState({
    nombre: '',
    telefono: '',
    correoElectronico: '',
    clave: ''
  });
  // Estado para el mensaje de éxito y los datos del trabajador creado
  const [trabajadorCreado, setTrabajadorCreado] = useState(null);
  const [mensajeError, setMensajeError] = useState('');

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrabajador({ ...trabajador, [name]: value });
  };

  // Validar teléfono
  const validarTelefono = (telefono) => {
    const telefonoRegex = /^[0-9]{10}$/;
    return telefonoRegex.test(telefono);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validarTelefono(trabajador.telefono)) {
      setMensajeError('El número de teléfono debe contener exactamente 10 dígitos.');
      return;
    }
    try {
      // Enviar los datos del trabajador al servidor utilizando Axios
      const response = await axios.post('http://localhost:8080/api/trabajadores', trabajador); 
      // Mostrar los datos del trabajador creado
      setTrabajadorCreado(response.data);
      setMensajeError(''); // Limpiar mensaje de error
      // Limpiar el formulario después del envío exitoso
      setTrabajador({
        nombre: '',
        telefono: '',
        correoElectronico: '',
        clave: ''
      });
    } catch (error) {
      console.error('Error:', error);
      // Mostrar mensaje de error
      setMensajeError('Ocurrió un error al crear el trabajador. Por favor, inténtelo de nuevo.');
      setTrabajadorCreado(null); // Limpiar datos del trabajador creado
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
          <h1 className="crear-usuario-titulo-menu">Crear Trabajador</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario">
            <label className="crear-usuario-label">
              Nombre:
              <input type="text" name="nombre" value={trabajador.nombre} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Teléfono:
              <input
                type="text"
                name="telefono"
                value={trabajador.telefono}
                onChange={handleInputChange}
                className="crear-usuario-input"
                pattern="[0-9]{10}"
                title="El número de teléfono debe contener exactamente 10 dígitos."
                required
              />
            </label>
            <label className="crear-usuario-label">
              Correo Electrónico:
              <input type="email" name="correoElectronico" value={trabajador.correoElectronico} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Clave:
              <input type="password" name="clave" value={trabajador.clave} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <button type="submit" className="crear-usuario-submit">Crear Trabajador</button>
          </form>
          {/* Mostrar los datos del trabajador creado */}
          {trabajadorCreado && (
            <div className="mensaje-exito">
              <h3>Trabajador creado exitosamente</h3>
              
            </div>
          )}
          {/* Mostrar el mensaje de error */}
          {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
        </div>

        <footer className="crear-usuario-pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default CrearTrabajador;

