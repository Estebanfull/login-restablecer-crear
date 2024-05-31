import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function EliminarProveedor() {
  // Estado para almacenar el ID del proveedor ingresado por el usuario
  const [idProveedor, setIdProveedor] = useState('');
  // Estado para almacenar la clave ingresada por el usuario
  const [clave, setClave] = useState('');
  // Estado para el mensaje de éxito o error
  const [mensaje, setMensaje] = useState('');
  // Estado para controlar si se ha confirmado la eliminación
  const [confirmado, setConfirmado] = useState(false);

  // Manejar cambios en el campo del ID del proveedor
  const handleIdProveedorChange = (event) => {
    setIdProveedor(event.target.value);
  };

  // Manejar cambios en el campo de la clave
  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  // Manejar la eliminación del proveedor
  const handleEliminarProveedor = async () => {
    try {
      // Realizar la solicitud DELETE al servidor para eliminar el proveedor con el ID especificado
      const response = await axios.delete(`/api/proveedores/${idProveedor}`, {
        data: { clave } // Pasar la clave como parte del cuerpo de la solicitud DELETE
      });
      // Mostrar un mensaje de éxito si la eliminación fue exitosa
      setMensaje(response.data.message);
      // Marcar la eliminación como confirmada
      setConfirmado(true);
    } catch (error) {
      // Mostrar un mensaje de error si ocurre algún problema con la eliminación
      console.error('Error:', error);
      setMensaje('Ocurrió un error al intentar eliminar el proveedor. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Manejar la confirmación de la eliminación
  const handleConfirmarEliminacion = () => {
    // Reiniciar los estados y permitir que el usuario realice otra eliminación
    setIdProveedor('');
    setClave('');
    setMensaje('');
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
          <h1 className="crear-usuario-titulo-menu">Eliminar Proveedor</h1>
        </header>

        <div className="crear-usuario-contenedor-central">
          <div className="eliminar-proveedor-formulario">
            {!confirmado ? (
              <>
                <p>¿Estás seguro de que quieres eliminar este proveedor?</p>
                <p>Por favor, ingresa el ID del proveedor y tu clave para confirmar:</p>
                <input type="text" value={idProveedor} onChange={handleIdProveedorChange} className="crear-usuario-input" placeholder="ID del proveedor" />
                <input type="password" value={clave} onChange={handleClaveChange} className="crear-usuario-input" placeholder="Clave" />
                <button onClick={handleEliminarProveedor} className="crear-usuario-submit">Eliminar Proveedor</button>
              </>
            ) : (
              <>
                {/* Mostrar el mensaje de éxito o error */}
                {mensaje && <p className="mensaje-exito">{mensaje}</p>}
                {/* Botón para confirmar la eliminación */}
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

export default EliminarProveedor;
