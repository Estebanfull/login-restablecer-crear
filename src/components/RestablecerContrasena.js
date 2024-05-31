import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redireccionamiento
import logo from '../Imagenes/logoike.svg';
import axios from 'axios'; // Importa Axios
import '../Css/IngresoApp.css';

function RestablecerContrasena() {
  const navigate = useNavigate(); // Obtener el objeto de navegación para redireccionamiento

  // Definir el estado para almacenar el correo electrónico, el mensaje de éxito y el mensaje de error
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [enviadoExitosamente, setEnviadoExitosamente] = useState(false); // Estado para controlar si el correo se envió correctamente

  // Manejar cambios en el campo de correo electrónico
  const handleCorreoChange = (event) => {
    setCorreoElectronico(event.target.value);
  };

  // Manejar el envío del formulario de restablecimiento de contraseña
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar la solicitud de restablecimiento de contraseña al servidor utilizando Axios
      await axios.post('http://localhost:8080/api/usuarios/restablecer-contrasena', { correoElectronico });
      // Mostrar un mensaje de éxito si la solicitud fue exitosa
      setMensajeExito('Se ha enviado un correo para restablecer su contraseña.');
      // Limpiar el campo de correo electrónico después del envío exitoso
      setCorreoElectronico('');
      // Limpiar el mensaje de error
      setMensajeError('');
      
      // Establecer el estado enviadoExitosamente a true
      setEnviadoExitosamente(true);
    } catch (error) {
      console.error('Error:', error);
      // Mostrar un mensaje de error general en caso de cualquier error
      setMensajeError('El correo electrónico proporcionado no existe o es incorrecto. Por favor, verifique y vuelva a intentarlo.');
    }
  };

  // Utilizar useEffect para redireccionar automáticamente después de un tiempo si el correo se envió correctamente
  useEffect(() => {
    if (enviadoExitosamente) {
      const timeout = setTimeout(() => {
        navigate(-1); // Redireccionar a la página anterior
      }, 3000); // Tiempo en milisegundos antes de redireccionar (3 segundos en este caso)

      // Limpiar el temporizador en caso de que el componente se desmonte antes de que ocurra la redirección
      return () => clearTimeout(timeout);
    }
  }, [enviadoExitosamente, navigate]);

  return (
    <div className="crear-usuario-container">
      <div className="crear-usuario-logo-container">
        <img src={logo} alt="Ike" className="crear-usuario-logo" />
        <button className="crear-usuario-boton-volver" onClick={() => navigate(-1)}>Salir</button>
      </div>

      <div className="crear-usuario-contenido">
        <header className="crear-usuario-encabezado">
          <h1 className="crear-usuario-titulo-menu">Restablecer Contraseña</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <form onSubmit={handleSubmit} className="crear-usuario-formulario" disabled={enviadoExitosamente}>
            <label className="crear-usuario-label">
              Correo Electrónico:
              <input 
                type="email" 
                value={correoElectronico} 
                onChange={handleCorreoChange} 
                className="crear-usuario-input" 
                required 
                disabled={enviadoExitosamente} // Deshabilitar el campo de correo electrónico si se ha enviado exitosamente
              />
            </label>
            <button type="submit" className="crear-usuario-submit" disabled={enviadoExitosamente}>Enviar</button>
          </form>
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
          {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
        </div>

        <footer className="crear-usuario-pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default RestablecerContrasena;
