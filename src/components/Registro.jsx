import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Registro = () => {
  const [expanded, setExpanded] = useState(false);
  const [registro, setRegistro] = useState({
    email: '',
    username: '',
    password: '',
    age: ''
   
  })

  const {signup, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  },[isAuthenticated]);
 
  const handleExpand = () => {
    setExpanded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro({
      ...registro,
      [name]: value
    });
  };

 async function enviarDatos() {
  signup(registro);

  }

  return (
    <div className="registro-container">
        
      <div className={`registro-form ${expanded ? 'expanded' : ''}`}>
      <h2>Únete al foro estudiantil</h2>
      <p className='texto'>Obtén respuestas en minutos y termina las tareas escolares más rápido</p>
        <input onChange={handleChange} type="email" placeholder="Registra tu Correo electrónico" className="registro-input" name='email' />
        {!expanded && (
          <button className="registro-button" onClick={handleExpand}>
            Registrarme
          </button>
        )}

        {expanded && (
          <>
            <input onChange={handleChange} type="text" placeholder="Nombre de usuario" className="registro-input" name='username' />
            <input onChange={handleChange} type="password" placeholder="Contraseña" className="registro-input" name='password'/>
            <input onChange={handleChange} type="number" placeholder="Edad" className="registro-input" name='age' />

            <div className="registro-options">
              <button onClick={enviarDatos} className="registro-button">Crear cuenta</button>
              <Link to="/login" className="registro-link">¿Ya tienes cuenta? Inicia sesión</Link><br></br>
              <button className="volver-button" onClick={() => setExpanded(false)}>Volver</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Registro;
