import React, { useState, useEffect } from 'react';
import logo from '../../Imagenes/logoike.svg'; // Importa el logo
import '../../Css/EstilosSubMenu.css'; // Importa el archivo CSS específico para CrearUsuario
import axios from 'axios'; // Importa Axios

function ModificarProveedor() {
  // Definir el estado para almacenar los datos del proveedor
  const [proveedor, setProveedor] = useState({
    nombre: '',
    numero: '',
    correoElectronico: '',
    tipoDeServicio: ''
  });
  // Estado para el mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState('');

  // Función para cargar los datos del proveedor
  const cargarProveedor = async () => {
    try {
      // Obtener los datos del proveedor desde el servidor utilizando Axios
      const response = await axios.get('/proveedores/1'); // Se asume que el ID del proveedor a modificar es 1, puedes ajustar esto según tu lógica
      // Actualizar el estado con los datos del proveedor
      setProveedor(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Cargar los datos del proveedor cuando el componente se monte
  useEffect(() => {
    cargarProveedor();
  }, []);

  // Manejar cambios en los campos del proveedor
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos del proveedor al servidor utilizando Axios
      const response = await axios.put(`/api/proveedores/${proveedor.id}`, proveedor); // Se utiliza el método PUT para actualizar el proveedor existente
      // Mostrar la respuesta del servidor (en este caso, un mensaje de éxito)
      setMensajeExito(response.data.message);
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
          <h1 className="crear-usuario-titulo-menu">Modificar Proveedor</h1> 
        </header>

        <div className="crear-usuario-contenedor-central"> 
          <form onSubmit={handleSubmit} className="crear-usuario-formulario"> 
            <label className="crear-usuario-label"> 
              Nombre:
              <input type="text" name="nombre" value={proveedor.nombre} onChange={handleInputChange} className="crear-usuario-input" required /> 
            </label>
            <label className="crear-usuario-label"> 
              Número:
              <input type="text" name="numero" value={proveedor.numero} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> 
              Correo Electrónico:
              <input type="email" name="correoElectronico" value={proveedor.correoElectronico} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <label className="crear-usuario-label"> 
              Tipo de Servicio:
              <input type="text" name="tipoDeServicio" value={proveedor.tipoDeServicio} onChange={handleInputChange} className="crear-usuario-input" required /> {/* Utiliza la misma clase que en CrearUsuario */}
            </label>
            <button type="submit" className="crear-usuario-submit">Guardar Cambios</button> 
          </form>
          {/* Mostrar el mensaje de éxito */}
          {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
        </div>

        <footer className="crear-usuario-pie-pagina"> 
          Hecho por <img src={logo} alt="Ike" /> Asistencia
        </footer>
      </div>
    </div>
  );
}

export default ModificarProveedor;
