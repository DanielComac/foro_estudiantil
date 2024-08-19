import React, { useState, useEffect } from 'react';
import { useComentario } from '../context/ComentariosContext';
import '../styles/Navbar.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditComment = () => {
    const {updateComentario, getComentario} = useComentario();
    const [obtenida, setObtenida] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
  
    const [modalVisible, setModalVisible] = useState(false);
  
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
      navigate('/home');
  
    };
  
    const handleAskQuestion = () => {
      openModal();
    };
  
    const [comentario, setComentario] = useState({
      descripcion: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setComentario({
        ...comentario,
        [name]: value 
      });
    };
  
    useEffect(() => {
     async function loadComentario() {
          if(params.id) { 
             const comentario2 = await getComentario(params.id);
             console.log(comentario2);
             setObtenida(comentario2);
  
          }
      }
  
      loadComentario();
    }, [])
  
    async function enviarDatos() {
        updateComentario(params.id, comentario);
      }
  
  
    return (
      // <nav className="navbar">
      //   <div className="navbar__logo">Foro Estudiantil</div>
      //   <input type="text" placeholder="Busca una respuesta..." className="navbar__search" />
      //   <div className="navbar__actions">
      //     {/* <button className="navbar__button" onClick={handleAskQuestion}> */}
      //     <Link onClick={handleAskQuestion} to="/publicacion" className="navbar__button"  >Hacer una Pregunta</Link>
  
      //     {/* </button> */}
          
      //     <div className="navbar__profile"></div>
      //   </div>
      <div>
         
          <div className="modal">
            <div className="modal__content">
              <h2 className='pregunta'>Edita tu comentario</h2>
              <textarea onChange={handleChange} name='descripcion' className="modal__input" rows={4} placeholder={obtenida.descripcion} ></textarea>
              <button className="modal__ask-button" onClick={() => {enviarDatos(), closeModal()}}>Actualizar</button>
              <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
  
      </div>
        
      // </nav>
    );
  };
  

export default EditComment;