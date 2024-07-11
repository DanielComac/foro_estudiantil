
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Bienvenido de nuevo</h2>
      <p className='texto'>Obtén respuestas en minutos y termina las tareas escolares más rápido</p>
      <form className="login-form">
        <input type="text" placeholder="Usuario o correo electrónico" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="login-options">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <p className="registrar">¿No tienes una cuenta? <Link to="/register">Crea una</Link></p>
      </div>
    </div>
  );
};

export default Login;
