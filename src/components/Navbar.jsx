import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAskQuestion = () => {
    openModal();
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Foro Estudiantil</div>
      <input type="text" placeholder="Busca una respuesta..." className="navbar__search" />
      <div className="navbar__actions">
        <button className="navbar__button" onClick={handleAskQuestion}>Hacer una Pregunta</button>
        <div className="navbar__profile"></div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal__content">
            <h2 className='pregunta'>Haz una pregunta sobre tu tarea</h2>
            <textarea placeholder="Escribe aquí tu pregunta de forma clara" className="modal__input"></textarea>
            <div className="modal__file-upload">
              <label htmlFor="file-upload" className="modal__file-label">
                Subir archivos
                <input type="file" id="file-upload" className="modal__file-input" />
              </label>
            </div>
            <select className="modal__subject-select">
              <option value="">Selecciona la asignatura</option>
              <option value="math">Matemáticas</option>
              <option value="science">Estadisticas y Cálculo</option>
              <option value="history">Castellano</option>
              <option value="history">Historia</option>
              <option value="history">Ciensias Sociales</option>
              <option value="history">Geografía</option>
              <option value="history">Derecho</option>
              <option value="history">Contabilidad</option>
            </select>
            <button className="modal__ask-button">Preguntar</button>
            <button className="modal__close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
