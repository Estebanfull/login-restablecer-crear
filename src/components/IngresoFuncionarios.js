import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import '../Css/IngresoApp.css';
import logo from '../Imagenes/logoike.svg';
import axios from 'axios';


function IngresoApp() {
  const [error, setError] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [clave, setClave] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login-trabajador', {
        correoElectronico,
        clave
      });

      console.log(response.data);

      if (response.data === 'Credenciales válidas') {
        // Redirigir a la página de menu-usuarios si las credenciales son válidas
        window.location.href = '/menu-funcionarios';
      } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError(error.message || 'Error al iniciar sesión');
      setCorreoElectronico('');
      setClave(''); 
    }
  };

  return (
    <div className="contenedor">
      <img src={logo} alt="Logo de la aplicación" className="logo" />
      <div className="formulario">
        <div className="cuadro-azul"></div>
        <div className="cuadro-gris">
          <h2>Iniciar Sesión Trabajadores</h2>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="correo" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} placeholder="Correo" required />
            <input type="password" name="clave" value={clave} onChange={(e) => setClave(e.target.value)} placeholder="Contraseña" required />
            <input type="submit" value="Ingresar" className="boton-ingresar" />
          </form>
          {error && <p className="error-message">{error}</p>}
          <Link to="/restablecer-contrasena" className="boton-olvido">¿Olvidó o bloqueó su contraseña?</Link>
        </div>
      </div>
      <footer className="pie-pagina">
        Hecho por <img src={logo} alt="Ike" /> Asistencia
      </footer>
    </div>
  );
}

export default IngresoApp;
