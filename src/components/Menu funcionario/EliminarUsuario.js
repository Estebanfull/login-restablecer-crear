import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function EliminarUsuario() {
  const [idUsuario, setIdUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState('');

  const handleIdUsuarioChange = (event) => {
    setIdUsuario(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleEliminarUsuario = async () => {
    try {
      const response = await axios.delete(`/api/usuarios/${idUsuario}`, {
        data: { clave } // Enviar la clave en el cuerpo de la solicitud
      });
      setMensaje(response.data.message);
      setConfirmado(true);
    } catch (error) {
      setError('Ocurrió un error al intentar eliminar el usuario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleConfirmarEliminacion = () => {
    setIdUsuario('');
    setClave('');
    setMensaje('');
    setError('');
    setConfirmado(false);
  };

  return (
    <div className="crear-usuario-container">
      <div className="crear-usuario-logo-container">
        <img src={logo} alt="Ike" className="crear-usuario-logo" />
        <button className="crear-usuario-boton-volver" onClick={() => window.history.back()}>Salir</button>
      </div>

      <div className="crear-usuario-contenido">
        <header className="crear-usuario-encabezado">
          <h1 className="crear-usuario-titulo-menu">Eliminar Usuario</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <div className="eliminar-usuario-formulario">
            {!confirmado ? (
              <>
                <p>¿Estás seguro de que quieres eliminar este usuario?</p>
                <p>Por favor, ingresa el ID del usuario y tu clave para confirmar:</p>
                <input type="text" value={idUsuario} onChange={handleIdUsuarioChange} className="crear-usuario-input" placeholder="ID del usuario" />
                <input type="password" value={clave} onChange={handleClaveChange} className="crear-usuario-input" placeholder="Clave" />
                {error && <p className="mensaje-error">{error}</p>}
                <button onClick={handleEliminarUsuario} className="crear-usuario-submit">Eliminar Usuario</button>
              </>
            ) : (
              <>
                {mensaje && <p className="mensaje-exito">{mensaje}</p>}
                <button onClick={handleConfirmarEliminacion} className="crear-usuario-submit">Confirmar</button>
              </>
            )}
          </div>
        </div>

        <footer className="crear-usuario-pie-pagina">
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default EliminarUsuario;
