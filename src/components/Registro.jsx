import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';

const Registro = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div className="registro-container">
        
      <div className={`registro-form ${expanded ? 'expanded' : ''}`}>
      <h2>Únete al foro estudiantil</h2>
      <p className='texto'>Obtén respuestas en minutos y termina las tareas escolares más rápido</p>
        <input type="email" placeholder="Registra tu Correo electrónico" className="registro-input" />
        {!expanded && (
          <button className="registro-button" onClick={handleExpand}>
            Registrarme
          </button>
        )}

        {expanded && (
          <>
            <input type="text" placeholder="Nombre de usuario" className="registro-input" />
            <input type="password" placeholder="Contraseña" className="registro-input" />
            <input type="number" placeholder="Edad" className="registro-input" />

            <div className="registro-options">
              <button className="registro-button">Crear cuenta</button>
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
