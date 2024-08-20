import React, { useState, useEffect } from 'react';
import { usePublicacion } from '../context/PublicacionesContext';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { uploadFile } from '../firebase/config';

const CreatePublication = () => {
  const {createPublicacion, getPublicacion} = usePublicacion();

  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate()

  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  console.log(file);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigate("/home");
  };

  const handleAskQuestion = () => {
    openModal();
  };

  const [publicacion, setPublicacion] = useState({
    titulo: '',
    descripcion: '',
    url: url,
    materia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublicacion({
      ...publicacion,
      [name]: value
    });
  };

  // async function subirArchivo() {
  //   const result = await uploadFile(file);
  //   setUrl(result);
  //   console.log(url);
  // }

  // async function enviarDatos() {
  //     createPublicacion(publicacion);
  //     navigate("/home");

  //   }
  const subirArchivo = async () => {
    if (file) {
      const result = await uploadFile(file);
      setUrl(result);
      return result;
    }
    return null;
  };

  const enviarDatos = async (url) => {
    const updatedPublicacion = {
      ...publicacion,
      url: url
    };
    await createPublicacion(updatedPublicacion);
  };

  const handleSubmit = async () => {
    const uploadedUrl = await subirArchivo();
    await enviarDatos(uploadedUrl);
    closeModal();
  };


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
            <input onChange={handleChange} name='titulo' placeholder='Escribe un titulo para tu pregunta' className='modal__input' ></input>
            <textarea onChange={handleChange} name='descripcion' placeholder="Escribe aquí tu pregunta de forma clara" className="modal__input" rows={4}></textarea>
            <div className="modal__file-upload">
              <label htmlFor="file-upload" className="modal__file-label">
                Subir archivos
                <input type="file" id="file-upload" className="modal__file-input" onChange={e => setFile(e.target.files[0])} />
              </label>
            </div>
            <select onChange={handleChange} name='materia' className="modal__subject-select">
              <option value="">Selecciona la asignatura</option>
              <option value="matematicas">Matemáticas</option>
              <option value="estadistica">Estadisticas y Cálculo</option>
              <option value="español">Español</option>
              <option value="historia">Historia</option>
              <option value="cienciassociales">Ciencias Sociales</option>
              <option value="geografia">Geografía</option>
              <option value="derecho">Derecho</option>
              <option value="contabilidad">Contabilidad</option>
            </select>
            <button className="modal__ask-button" onClick={handleSubmit}>Preguntar</button>
            <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>

    </div>
      
    // </nav>
  );
};

export default CreatePublication;
