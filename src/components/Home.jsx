import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { usePublicacion } from '../context/PublicacionesContext'; 
import { useComentario } from '../context/ComentariosContext';
import { useAuth } from '../context/AuthContext';
import { useUser } from '../context/UserContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Home = ({ materiaSeleccionada, searchTerm }) => { // Cambia aquí
  const { getPublicaciones, publicaciones, deletePublicacion } = usePublicacion();
  const { getComentarios, comentarios, deleteComentario } = useComentario();
  const { user } = useAuth();
  const { getUsers, userData } = useUser();
  const [gato, setGato] = useState(null);
  const [perro, setPerro] = useState(null);

  useEffect(() => {
    getPublicaciones();
    getComentarios();
    getUsers();
  }, [getPublicaciones, getComentarios, getUsers]);

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

  const publicacionesFiltradas = publicaciones.filter(publicacion => 
    (materiaSeleccionada === 'Todas las asignaturas' || publicacion.materia === materiaSeleccionada) &&
    (publicacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    publicacion.materia.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="home">
      <h1>¿Qué quieres saber?</h1>
      <button className="home__button">PREGUNTAR</button><br></br><br></br>
      <div className="home__content">
        <a className='preguntas_recientes'>Preguntas Recientes</a>
        <div className="home__questions">
          {publicacionesFiltradas.map(publicacion => (
            <div className="question" key={publicacion._id}>
              {userData.map(user => (
                <>
                {(user._id === publicacion.user) && (<h4>Por: {user.username}</h4>)} 
                </>
              ))}
              <h2>{publicacion.titulo}</h2>
              <p>{publicacion.descripcion}</p>
              <a href={publicacion.url} target='_blank'>
                <button className="download-button">Ver archivo</button>
              </a>
              <span>{publicacion.materia}</span>
              <br></br>
              {(publicacion.user !== gato) ? (
              <Link className='home__button' to={`/comentario/${publicacion._id}`}>RESOLVER</Link>
            ) : ( <></>)}
              {gato === publicacion.user && (
                <>
                 <button onClick={() => deletePublicacion(publicacion._id)}>Eliminar</button>
                <Link className="home__button" to={`/publicacion/${publicacion._id}`} >Editar</Link>
                </>
              )}
              <br></br><br></br><br></br>
              <h3>Respuestas</h3>
              {comentarios.map(comentario => (
                <div>
                  {publicacion._id === comentario.publicacion_id && (
                    <>
                    <div className='question' key={comentario._id}>
                    {userData.map(user => (
                    <>
                    {(user._id === comentario.user) && (<h4>De: {user.username}</h4>)} 
                    </>
                    ))} 
                    <p>{comentario.descripcion}</p>
                    <br></br>
                    {(comentario.user === gato) ? (
                    <>
                    <button onClick={() => deleteComentario(comentario._id)}>Eliminar</button>
                    <Link className="home__button" to={`/Editarcomentario/${comentario._id}`} >Editar</Link>
                    </>
                    ) : (
                      <></>
                    )}
                    </div>
                    </>
                  )}
                </div>
              ))} 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
