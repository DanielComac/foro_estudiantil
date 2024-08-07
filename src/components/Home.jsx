import React, {useEffect} from 'react';
import '../styles/Home.css';
import { usePublicacion } from '../context/PublicacionesContext'; 

const Home = () => {
  const {getPublicaciones, publicaciones, deletePublicacion} = usePublicacion();

  useEffect(() => {
    getPublicaciones()

  }, [])

  return (
    <div className="home">
      <h1>¿Qué quieres saber?</h1>
      <button className="home__button">PREGUNTAR</button><br></br><br></br>
      <div className="home__content">
        <a className='preguntas_recientes'>Preguntas Recientes</a>
        <div className="home__questions">
          {
          publicaciones.map(publicacion => (
            <div className="question" key={publicacion._id}>
            <h3>{publicacion.titulo}</h3>
            <p>{publicacion.descripcion}</p>
            <span>{publicacion.materia}</span>

            <button>RESOLVER</button>   
            <button onClick={() => {deletePublicacion(publicacion._id)}}>Eliminar</button>
          </div>

          ))

          }

          
        </div>
      </div>
    </div>
  );
};

export default Home;
