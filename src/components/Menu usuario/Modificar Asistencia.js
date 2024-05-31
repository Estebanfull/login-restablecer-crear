import React, { useState, useEffect } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import axios from 'axios'; // Importa Axios
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para el menú de solicitud de asistencia

function ModificarAsistencia() {
  // Estado para almacenar las asistencias activas y la asistencia seleccionada para modificar
  const [asistenciasActivas, setAsistenciasActivas] = useState([]);
  const [asistenciaSeleccionada, setAsistenciaSeleccionada] = useState('');
  const [tipoModificacion, setTipoModificacion] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Cargar las asistencias activas al montar el componente
  useEffect(() => {
    cargarAsistenciasActivas();
  }, []);

  // Función para cargar las asistencias activas desde el servidor
  const cargarAsistenciasActivas = async () => {
    try {
      const response = await axios.get('/api/asistencias'); // Modifica la URL aquí
      setAsistenciasActivas(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Manejar cambios en la asistencia seleccionada
  const handleAsistenciaChange = (event) => {
    setAsistenciaSeleccionada(event.target.value);
  };

  // Manejar cambios en el tipo de modificación seleccionada
  const handleTipoModificacionChange = (event) => {
    setTipoModificacion(event.target.value);
  };

  // Manejar cambios en el cuadro de texto
  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  // Manejar el envío del formulario de modificación de asistencia
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos de modificación de asistencia al servidor utilizando Axios
      const response = await axios.post('/api/asistencias/modificar', { id: asistenciaSeleccionada, tipoModificacion, mensaje }); // Modifica la URL aquí
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito o confirmación)
      console.log(response.data);
      // Limpiar la asistencia seleccionada, tipo de modificación y el cuadro de texto después del envío exitoso
      setAsistenciaSeleccionada('');
      setTipoModificacion('');
      setMensaje('');
      // Recargar las asistencias activas para reflejar los cambios
      cargarAsistenciasActivas();
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
          <h1 className="crear-usuario-titulo-menu">Modificar Asistencia</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario">
            <label className="crear-usuario-label">
              Asistencia:
              <select value={asistenciaSeleccionada} onChange={handleAsistenciaChange} className="crear-usuario-input" required>
                <option value="">Seleccione una asistencia</option>
                {asistenciasActivas.map(asistencia => (
                  <option key={asistencia.id} value={asistencia.id}>{asistencia.nombre}</option>
                ))}
              </select>
            </label>
            <label className="crear-usuario-label">
              Tipo de modificación:
              <select value={tipoModificacion} onChange={handleTipoModificacionChange} className="crear-usuario-input" required>
                <option value="">Seleccione una opción</option>
                <option value="Modificar hora">Modificar hora</option>
                <option value="Modificar día">Modificar día</option>
                <option value="Modificar dirección">Modificar dirección</option>
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

export default ModificarAsistencia;
