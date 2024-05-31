import React, { useState, useEffect } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function ModificarTrabajador() {
  // Definir el estado para almacenar los datos del trabajador
  const [trabajador, setTrabajador] = useState({
    nombre: '',
    telefono: '',
    especialidad: ''
  });
  // Estado para el mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState('');

  // Función para cargar los datos del trabajador
  const cargarTrabajador = async () => {
    try {
      // Obtener los datos del trabajador desde el servidor utilizando Axios
      const response = await axios.get('/api/trabajadores/1'); // Cambia el ID del trabajador según tu lógica
      // Actualizar el estado con los datos del trabajador
      setTrabajador(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Cargar los datos del trabajador cuando el componente se monte
  useEffect(() => {
    cargarTrabajador();
  }, []);

  // Manejar cambios en los campos del trabajador
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrabajador({ ...trabajador, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos del trabajador al servidor utilizando Axios
      const response = await axios.put(`/api/trabajadores/${trabajador.id}`, trabajador); // Cambia la URL y el ID del trabajador según tu lógica
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
          <h1 className="crear-usuario-titulo-menu">Modificar Trabajador</h1> {/* Utiliza la misma clase que en CrearUsuario */}
        </header>

        <div className="crear-usuario-contenedor-central"> {/* Utiliza la misma clase que en CrearUsuario */}
          <form onSubmit={handleSubmit} className="crear-usuario-formulario"> {/* Utiliza la misma clase que en CrearUsuario */}
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Nombre:
              <input type="text" name="nombre" value={trabajador.nombre} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Teléfono:
              <input type="text" name="telefono" value={trabajador.telefono} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Especialidad:
              <input type="text" name="especialidad" value={trabajador.especialidad} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
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

export default ModificarTrabajador;
