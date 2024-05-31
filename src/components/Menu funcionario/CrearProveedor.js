import React, { useState } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function CrearProveedor() {
  // Definir el estado para almacenar los datos del nuevo proveedor
  const [proveedor, setProveedor] = useState({
    nombre: '',
    telefono: '',
    correoElectronico: '',
    tipoDeServicio: ''
  });
  // Estado para el mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  // Validar el formato del teléfono
  const validarTelefono = (telefono) => {
    const telefonoRegex = /^[0-9]{10}$/;
    return telefonoRegex.test(telefono);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validarTelefono(proveedor.telefono)) {
      setMensajeError('El número de teléfono debe contener exactamente 10 dígitos.');
      return;
    }
    try {
      // Enviar los datos del proveedor al servidor utilizando Axios
      const response = await axios.post('http://localhost:8080/api/proveedores', proveedor);
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito)
      setMensajeExito(response.data.message);
      // Limpiar el formulario después del envío exitoso
      setProveedor({
        nombre: '',
        telefono: '',
        correoElectronico: '',
        tipoDeServicio: ''
      });
      // Limpiar el mensaje de error de teléfono
      setMensajeError('');
    } catch (error) {
      console.error('Error:', error);
      // Mostrar mensaje de error
      setMensajeError('Ocurrió un error al crear el proveedor. Por favor, inténtelo de nuevo.');
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
          <h1 className="crear-usuario-titulo-menu">Crear Proveedor</h1> {/* Utiliza la misma clase que en CrearUsuario */}
        </header>

        <div className="crear-usuario-contenedor-central"> {/* Utiliza la misma clase que en CrearUsuario */}
          <form onSubmit={handleSubmit} className="crear-usuario-formulario"> {/* Utiliza la misma clase que en CrearUsuario */}
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Nombre:
              <input type="text" name="nombre" value={proveedor.nombre} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Teléfono:
              <input
                type="text"
                name="telefono"
                value={proveedor.telefono}
                onChange={handleInputChange}
                className="crear-usuario-input"
                pattern="[0-9]{10}"
                title="El número de teléfono debe contener exactamente 10 dígitos."
                required
              />
            </label>
            <label className="crear-usuario-label"> {/* Utiliza la misma clase que en CrearUsuario */}
              Correo Electrónico:
              <input type="email" name="correoElectronico" value={proveedor.correoElectronico} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label">
              Tipo de Servicio:
              <select name="tipoDeServicio" value={proveedor.tipoDeServicio} onChange={handleInputChange} className="crear-usuario-input" required>
                <option value="">Seleccione una opción</option>
                <option value="HOGAR">HOGAR</option>
                <option value="MEDICA">MEDICA</option>
                <option value="AMBULANCIA">AMBULANCIA</option>
                <option value="AUTOS">AUTOS</option>
                <option value="CONDUCTOR ELEGIDO">CONDUCTOR ELEGIDO</option>
                <option value="LEGAL">LEGAL</option>
              </select>
            </label>
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

export default CrearProveedor;
