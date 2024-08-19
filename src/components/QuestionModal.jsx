import React from 'react';
import '../styles/QuestionModal.css';
import { Link } from 'react-router-dom';

const QuestionModal = ({ question, comentarios, userData, onClose }) => {
  const getUsername = (userId) => {
    const user = userData.find(user => user._id === userId);
    return user ? user.username : 'Desconocido';
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h2>Pregunta:</h2>

        <button className="modal-close-button" onClick={onClose}>X</button>
        <h1 className='titulo-pregunta'>{question.titulo}</h1>
        <p className='descripcion'>{question.descripcion}</p>
        <h3>Respuestas</h3>
        {comentarios.filter(comentario => comentario.publicacion_id === question._id).map(comentario => (
          <div className='modal-comment' key={comentario._id}>
            <h4>De: {getUsername(comentario.user)}</h4>
            <p>{comentario.descripcion}</p>
            {comentario.user === question.user && (
              <>
                <button onClick={() => deleteComentario(comentario._id)}>Eliminar</button>
                <Link className="home__button" to={`/Editarcomentario/${comentario._id}`}>Editar</Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionModal;
