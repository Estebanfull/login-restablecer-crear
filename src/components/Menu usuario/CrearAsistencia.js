import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import axios from 'axios'; // Importa Axios
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para el menú de solicitud de asistencia

function SolicitudAsistencia() {
  // Definir el estado para almacenar el tipo de asistencia seleccionado y el mensaje de solicitud de asistencia
  const [tipoAsistencia, setTipoAsistencia] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Manejar cambios en el tipo de asistencia seleccionado
  const handleTipoAsistenciaChange = (event) => {
    setTipoAsistencia(event.target.value);
  };

  // Manejar cambios en el cuadro de texto
  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  // Manejar el envío del formulario de solicitud de asistencia
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar el mensaje de solicitud de asistencia al servidor utilizando Axios
      const response = await axios.post('/api/asistencias/modificar', { tipoAsistencia, mensaje });
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito o confirmación)
      console.log(response.data);
      // Limpiar el tipo de asistencia y el cuadro de texto después del envío exitoso
      setTipoAsistencia('');
      setMensaje('');
    } catch (error) {
      console.error('Error:', error);
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
          <h1 className="crear-usuario-titulo-menu">Solicitar Asistencia</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario">
            <label className="crear-usuario-label">
              Tipo de asistencia:
              <select value={tipoAsistencia} onChange={handleTipoAsistenciaChange} className="crear-usuario-input" required>
                <option value="">Seleccione una opción</option>
                <option value="HOGAR">HOGAR</option>
                <option value="MEDICA">MEDICA</option>
                <option value="AMBULANCIA">AMBULANCIA</option>
                <option value="AUTOS">AUTOS</option>
                <option value="CONDUCTOR ELEGIDO">CONDUCTOR ELEGIDO</option>
                <option value="LEGAL">LEGAL</option>
              </select>
            </label>
            <label className="crear-usuario-label">
              Mensaje:
              <textarea name="mensaje" value={mensaje} onChange={handleInputChange} className="crear-usuario-input" rows="4" required></textarea>
            </label>
            <button type="submit" className="crear-usuario-submit">Enviar</button>
          </form>
        </div>

        <footer className="crear-usuario-pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default SolicitudAsistencia;
