import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { usePublicacion } from '../context/PublicacionesContext'; 
import { useComentario } from '../context/ComentariosContext';
import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Home = () => {
  const { getPublicaciones, publicaciones, deletePublicacion } = usePublicacion();
  const { getComentarios, comentarios } = useComentario();
  const { user } = useAuth();
  const [gato, setGato] = useState(null);
  const [perro, setPerro] = useState(null);

  useEffect(() => {
    getPublicaciones();
  }, []);

  useEffect(() => {
    getComentarios();


  }, [])

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setGato(JSON.parse(storedUser));   
    }
  }, []);

  useEffect(() => {
    const storedId = Cookies.get('publicacion');
    if (storedId) {
      setPerro(JSON.parse(storedId));   
    }
  }, []);

  console.log(gato);

  return (
    <div className="home">
      <h1>¿Qué quieres saber?</h1>
      <button className="home__button">PREGUNTAR</button><br></br><br></br>
      <div className="home__content">
        <a className='preguntas_recientes'>Preguntas Recientes</a>
        <div className="home__questions">
          {publicaciones.map(publicacion => (
            <div className="question" key={publicacion._id}>
              <h3>{publicacion.titulo}</h3>
              <p>{publicacion.descripcion}</p>
              <span>{publicacion.materia}</span>

              {comentarios.map(comentario => (
             <div className="question" key={comentario._id}>
             <h3>{comentario.descripcion}</h3>
             
             {perro === comentario._id && (
               <>
                <button onClick={() => deletePublicacion(publicacion._id)}>Eliminar</button>

               <Link className="home__button"  to={`/publicacion/${publicacion._id}`} >Editar</Link>

               </>
             )}
           </div>
          ))}
              

              <Link className='home__button' to={`/comentario/${publicacion._id}`}>RESOLVER</Link>
              
              {gato === publicacion.user && (
                <>
                 <button onClick={() => deletePublicacion(publicacion._id)}>Eliminar</button>

                <Link className="home__button"  to={`/publicacion/${publicacion._id}`} >Editar</Link>

                </>
              )}
            </div>

          ))}

          {/* {comentarios.map(comentario => (
             <div className="question" key={comentario._id}>
             <h3>{comentario.descripcion}</h3>
             
             {gato === comentario._id && (
               <>
                <button onClick={() => deletePublicacion(publicacion._id)}>Eliminar</button>

               <Link className="home__button"  to={`/publicacion/${publicacion._id}`} >Editar</Link>

               </>
             )}
           </div>
          ))
          } */}

        </div>
      </div>
    </div>
  );
};

export default Home;
