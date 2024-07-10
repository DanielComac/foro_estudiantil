import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className="welcome">
      <header className="home-header">
        <img src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/06/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1" alt="Logo" className="home-logo" />
        <nav className="home-nav">
          <a href="/login">Iniciar sesión</a>
          <a href="/register">Registrarse</a>
          <button className="ask-button" onClick={handleButtonClick}>Haz una pregunta</button>
        </nav>
      </header>
      <main className="home-main">
        <div className="home-content">
          <div className="home-text">
            <h1>Explora y aprende en nuestro foro estudiantil.</h1>
            <p>
            Preguntas y respuestas al alcance de tu mano. Únete a nuestra comunidad estudiantil donde podrás resolver dudas, compartir conocimientos y aprender juntos.
            </p>
          </div>
          <div className="search-container">
            <input type="text" placeholder="¿Cuál es tu pregunta?" className="search-input" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M11 2a9 9 0 016.328 15.328l4.389 4.39-1.414 1.414-4.39-4.389A9 9 0 1111 2zm0 2a7 7 0 100 14 7 7 0 000-14z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="illustration">
          <img src="https://cdn-icons-png.flaticon.com/512/2319/2319046.png" alt="Illustration" className="illustration-img" />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
