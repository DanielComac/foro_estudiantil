import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>¿Qué quieres saber?</h1>
      <button className="home__button">PREGUNTAR</button><br></br><br></br>
      <div className="home__content">
        <a className='preguntas_recientes'>Preguntas Recientes</a>
        <div className="home__questions">
          <div className="question">
            <span>Usuario 1 · hace 8 seg.</span>
            <p>Ventajas del uso del lenguaje en la era digital por favor ayuda</p>
            <button>RESOLVER</button>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
