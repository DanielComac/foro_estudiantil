import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Foro Estudiantil</div>
      <input type="text" placeholder="Busca una respuesta..." className="navbar__search"/>
      <div className="navbar__actions">
        <button className="navbar__button">Hacer una Pregunta</button>
        <div className="navbar__profile"></div>
      </div>
    </nav>
  );
};

export default Navbar;
