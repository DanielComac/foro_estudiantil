import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/Login.css';

const Message = () => {
    function borrarCookies() {
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("priv");
        Cookies.remove("publicacion");
        window.location.reload();
      }

  return (
    <div className="login-container">
      <h2>Tu cuenta ha sido bloqueada</h2>
      <p className='texto'>Ponte en contacto con el adminitrador de la aplicación para recuperar tu cuenta</p>
      <div className="login-options">
      <p className="registrar">Regresar al <Link onClick={borrarCookies}>Login</Link></p>

        
      </div>
    </div>
  );
};

export default Message;