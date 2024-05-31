import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import axios from 'axios'; // Importa Axios
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para el menú de solicitud de asistencia

function ModificarPerfil() {
  // Estado para almacenar los datos del usuario
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    tipoAsistencia: '',
    clave: ''
  });

  // Manejar cambios en los datos del usuario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };

  // Manejar el envío del formulario de modificación de perfil
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos de modificación de perfil al servidor utilizando Axios
      const response = await axios.put(`/api/usuarios/${datosUsuario.ID_USUARIO}`, datosUsuario);
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito o confirmación)
      console.log(response.data);
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
          <h1 className="crear-usuario-titulo-menu">Modificar Perfil</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario">
            <label className="crear-usuario-label">
              Nombre:
              <input type="text" name="nombre" value={datosUsuario.nombre} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Teléfono:
              <input type="text" name="telefono" value={datosUsuario.telefono} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Correo electrónico:
              <input type="email" name="correo" value={datosUsuario.correo} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Dirección:
              <input type="text" name="direccion" value={datosUsuario.direccion} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Tipo de asistencia:
              <input type="text" name="tipoAsistencia" value={datosUsuario.tipoAsistencia} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <label className="crear-usuario-label">
              Clave:
              <input type="password" name="clave" value={datosUsuario.clave} onChange={handleInputChange} className="crear-usuario-input" required />
            </label>
            <button type="submit" className="crear-usuario-submit">Guardar Cambios</button>
          </form>
        </div>

        <footer className="crear-usuario-pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default ModificarPerfil;
