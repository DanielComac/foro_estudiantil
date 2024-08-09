import React, { useState, useEffect } from 'react';
import { usePublicacion } from '../context/PublicacionesContext';
import '../styles/Navbar.css';
import {Link, useParams, useNavigate} from 'react-router-dom';

const EditPublication = () => {
  const {createPublicacion, getPublicacion, updatePublicacion} = usePublicacion();
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

  const [publicacion, setPublicacion] = useState({
    titulo: '',
    descripcion: '',
    materia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublicacion({
      ...publicacion,
      [name]: value 
    });
  };

  useEffect(() => {
   async function loadPublicacion() {
        if(params.id) { 
           const publicacion2 = await getPublicacion(params.id);
           console.log(publicacion2);
           setObtenida(publicacion2);

        }
    }

    loadPublicacion();
  }, [])

  async function enviarDatos() {
      updatePublicacion(params.id, publicacion);
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
            <h2 className='pregunta'>Haz una pregunta sobre tu tarea</h2>
            <input onChange={handleChange} name='titulo' placeholder={obtenida.titulo} className='modal__input'></input>
            <textarea onChange={handleChange} name='descripcion' placeholder={obtenida.descripcion} className="modal__input" rows={4} ></textarea>
            <div className="modal__file-upload">
              <label htmlFor="file-upload" className="modal__file-label">
                Subir archivos
                <input type="file" id="file-upload" className="modal__file-input" />
              </label>
            </div>
            <select onChange={handleChange} name='materia' 
             placeholder={obtenida.materia} className="modal__subject-select">
              <option value="">Selecciona la materia</option>
              <option value="matematicas">Matemáticas</option>
              <option value="estadistica">Estadisticas y Cálculo</option>
              <option value="castellano">Castellano</option>
              <option value="historia">Historia</option>
              <option value="cienciassociales">Ciencias Sociales</option>
              <option value="geografia">Geografía</option>
              <option value="derecho">Derecho</option>
              <option value="contabilidad">Contabilidad</option>
            </select>
            <button className="modal__ask-button" onClick={() => {enviarDatos(), closeModal()}}>Preguntar</button>
            <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>

    </div>
      
    // </nav>
  );
};

export default EditPublication;
