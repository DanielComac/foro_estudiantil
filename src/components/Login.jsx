
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';



const Login = () => {

  const [datos, setDatos] = useState({
    email:'',
    password:''
  })
  
  const {isAuthenticated, signin, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated && user.priv == "user") {
      navigate('/home');
    } else if (isAuthenticated && user.priv == "admin") {
      navigate('/admin');
    } else if (isAuthenticated && user.priv == "") {
      navigate('/cuentaBloqueada');
    }

  },[isAuthenticated, user]);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  
  async function enviarDatos() {
    signin(datos);
  
    }

  return (
    <div className="login-container">
      <h2>Bienvenido de nuevo</h2>
      <p className='texto'>Obtén respuestas en minutos y termina las tareas escolares más rápido</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input name="email" onChange={handleChange} type="text" placeholder="Correo electrónico" className="login-input" />
        <input name="password" onChange={handleChange} type="password" placeholder="Contraseña" className="login-input" />
        <button onClick={enviarDatos} type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="login-options">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <p className="registrar">¿No tienes una cuenta? <Link to="/register">Crea una</Link></p>
      </div>
    </div>
  );
};

export default Login;
