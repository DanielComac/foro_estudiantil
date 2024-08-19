import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { usePublicacion } from '../context/PublicacionesContext'; 
import { useComentario } from '../context/ComentariosContext';
import { useAuth } from '../context/AuthContext';
import { useUser } from '../context/UserContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import QuestionModal from './QuestionModal';

const Home = ({ materiaSeleccionada, searchTerm }) => { 
  const { getPublicaciones, publicaciones, deletePublicacion } = usePublicacion();
  const { getComentarios, comentarios, deleteComentario } = useComentario();
  const { user } = useAuth();
  const { getUsers, userData } = useUser();
  const [gato, setGato] = useState(null);
  const [perro, setPerro] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    getPublicaciones();
    getComentarios();
    getUsers();
  }, []);

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

  const handleOpenModal = (publicacion) => {
    setSelectedQuestion(publicacion);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="home">
      <h1>¿Qué quieres saber?</h1>
      <button className="home__button">PREGUNTAR</button><br /><br />
      <div className="home__content">
        <a className='preguntas_recientes'>Preguntas Recientes</a>
        <div className="home__questions">
          {publicacionesFiltradas.map(publicacion => (
            <div className="question" key={publicacion._id}>
              <span>{publicacion.materia}</span>
              {userData.map(user => (
                <React.Fragment key={user._id}>
                  {(user._id === publicacion.user) && (<h5>Por: {user.username}</h5>)} 
                </React.Fragment>
              ))}
              <h1 className='titulo-pregunta'>{publicacion.titulo}</h1>
              <p className='descripcion'>{publicacion.descripcion}</p>
              <br />
              <button className="view-responses-button" onClick={() => handleOpenModal(publicacion)}>
                Ver {comentarios.filter(comentario => comentario.publicacion_id === publicacion._id).length} respuestas
              </button><br></br><br></br>
              {(publicacion.user !== gato) ? (
                <Link className='home__button' to={`/comentario/${publicacion._id}`}>RESOLVER</Link>
              ) : null}
              {gato === publicacion.user && (
                <>
                  <button onClick={() => deletePublicacion(publicacion._id)}>Eliminar</button>
                  <Link className="home__button" to={`/publicacion/${publicacion._id}`}>Editar</Link>
                </>
              )}
              <br /><br /><br />
            </div>
          ))}
        </div>
      </div>
      {selectedQuestion && (
        <QuestionModal 
          question={selectedQuestion} 
          comentarios={comentarios} 
          userData={userData} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
