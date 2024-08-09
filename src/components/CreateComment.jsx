import React, { useState, useEffect } from 'react';
import { useComentario } from '../context/ComentariosContext';
import '../styles/Navbar.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CreateComment = () => {
  const {createComentario} = useComentario();

  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    navigate("/home");
  };

  const handleAskQuestion = () => {
    openModal();
  };

  const params = useParams();
  const id = params.id;

  const [comentario, setComentario] = useState({
    descripcion: '',
    publicacion_id: ''
  });

  useEffect(() => {
    if (id) {
      setComentario(prevComentario => ({
        ...prevComentario,
        publicacion_id: id
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComentario({
      ...comentario,
      [name]: value
    });
  };

  async function enviarDatos() {
      createComentario(comentario);
      navigate("/home");
    }


  return (
    
    <div>
        <div className="modal">
          <div className="modal__content">
            <h2 className='pregunta'>Responde a esta pregunta</h2>
            {/* {modalVisible && (
                <input onChange={handleChange} name='publicacion_id' placeholder='Escribe un titulo para tu pregunta' className='modal__input' value={id} ></input>
            )} */}
            <textarea onChange={handleChange} name='descripcion' placeholder="Escribe aquí tu respuesta" className="modal__input" rows={4}></textarea>
            
            <button className="modal__ask-button" onClick={enviarDatos}>Responder</button>
            <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
    </div>
  );
};

export default CreateComment;