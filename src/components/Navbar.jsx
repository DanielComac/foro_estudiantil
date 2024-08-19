import React, { useState } from 'react';
import { usePublicacion } from '../context/PublicacionesContext';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = ({ onSearch }) => { // Añadido onSearch como prop
  const { createPublicacion } = usePublicacion();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Propaga el término de búsqueda
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

  async function enviarDatos() {
    createPublicacion(publicacion);
  }

  const navigate = useNavigate();

  function borrarCookies() {
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("publicacion");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">Foro Estudiantil</div>
      <input
        type="text"
        placeholder="Busca una respuesta..."
        className="navbar__search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="navbar__actions">
        <Link to="/publicacion" className="navbar__button">Hacer una Pregunta</Link>
        <button className='navbar__button' onClick={borrarCookies}>Cerrar Sesión</button>        
        <div className="navbar__profile"></div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal__content">
            <h2 className='pregunta'>Haz una pregunta sobre tu tarea</h2>
            <input
              onChange={handleChange}
              name='titulo'
              placeholder='Escribe un titulo para tu pregunta'
              className='modal__input'
            />
            <textarea
              onChange={handleChange}
              name='descripcion'
              placeholder="Escribe aquí tu pregunta de forma clara"
              className="modal__input"
              rows={4}
            ></textarea>
            <div className="modal__file-upload">
              <label htmlFor="file-upload" className="modal__file-label">
                Subir archivos
                <input
                  type="file"
                  id="file-upload"
                  className="modal__file-input"
                />
              </label>
            </div>
            <select
              onChange={handleChange}
              name='materia'
              className="modal__subject-select"
            >
              <option value="">Selecciona la asignatura</option>
              <option value="matematicas">Matemáticas</option>
              <option value="estadistica">Estadísticas y Cálculo</option>
              <option value="español">Español</option>
              <option value="historia">Historia</option>
              <option value="cienciassociales">Ciencias Sociales</option>
              <option value="geografia">Geografía</option>
              <option value="derecho">Derecho</option>
              <option value="contabilidad">Contabilidad</option>
            </select>
            <button
              className="modal__ask-button"
              onClick={() => { enviarDatos(); closeModal(); }}
            >
              Preguntar
            </button>
            <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
