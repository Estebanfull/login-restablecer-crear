import React, { useState, useEffect } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function ModificarTecnico() {
  // Definir el estado para almacenar los datos del técnico
  const [tecnico, setTecnico] = useState({
    nombre: '',
    telefono: '',
    especialidad: ''
  });
  // Estado para el mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState('');

  // Función para cargar los datos del técnico
  const cargarTecnico = async () => {
    try {
      // Obtener los datos del técnico desde el servidor utilizando Axios
      const response = await axios.get('/api/tecnicos-asistencia');
      // Actualizar el estado con los datos del técnico
      setTecnico(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Cargar los datos del técnico cuando el componente se monte
  useEffect(() => {
    cargarTecnico();
  }, []);

  // Manejar cambios en los campos del técnico
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTecnico({ ...tecnico, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos del técnico al servidor utilizando Axios
      const response = await axios.put(`/api/tecnicos-asistencia/${tecnico.id}`, tecnico);
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito)
      setMensajeExito(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="crear-usuario-container"> {/* Utiliza la misma clase que en CrearUsuario */}
      <div className="crear-usuario-logo-container"> {/* Utiliza la misma clase que en CrearUsuario */}
        <img src={logo} alt="Ike" className="crear-usuario-logo" /> {/* Utiliza la misma clase que en CrearUsuario */}
        <button className="crear-usuario-boton-volver" onClick={() => window.history.back()}>Salir</button> {/* Utiliza la misma clase que en CrearUsuario */}
      </div>

      <div className="crear-usuario-contenido"> {/* Utiliza la misma clase que en CrearUsuario */}
        <header className="crear-usuario-encabezado"> {/* Utiliza la misma clase que en CrearUsuario */}
          <h1 className="crear-usuario-titulo-menu">Modificar Técnico</h1> {/* Utiliza la misma clase que en CrearUsuario */}
        </header>

        <div className="crear-usuario-contenedor-central"> {/* Utiliza la misma clase que en CrearUsuario */}
          <form onSubmit={handleSubmit} className="crear-usuario-formulario"> {/* Utiliza la misma clase que en CrearUsuario */}
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Nombre:
              <input type="text" name="nombre" value={tecnico.nombre} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Teléfono:
              <input type="text" name="telefono" value={tecnico.telefono} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Especialidad:
              <input type="text" name="especialidad" value={tecnico.especialidad} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <button type="submit" className="crear-usuario-submit">Guardar Cambios</button> {/* Utiliza la misma clase que en CrearUsuario */}
          </form>
          {/* Mostrar el mensaje de éxito */}
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
        </div>

        <footer className="crear-usuario-pie-pagina"> {/* Utiliza la misma clase que en CrearUsuario */}
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default ModificarTecnico;
