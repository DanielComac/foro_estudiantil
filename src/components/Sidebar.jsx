import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalculator, faLanguage, faGlobe, faGavel, faBalanceScale, faLandmark, faPeopleArrows, faChartSimple, faTh } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = ({ onSelectMateria }) => {
  const handleClick = (materia) => {
    onSelectMateria(materia);
  };

  return (
    <aside className="sidebar">
      <a className='asignatura'>Asignaturas</a>
      <ul>
        <li onClick={() => handleClick('Todas las asignaturas')}>
          <FontAwesomeIcon icon={faTh} /> Todas las asignaturas
        </li>
        <li onClick={() => handleClick('matematicas')}>
          <FontAwesomeIcon icon={faCalculator} /> Matemáticas
        </li>
        <li onClick={() => handleClick('estadística y Calculo')}>
          <FontAwesomeIcon icon={faChartSimple} /> Estadística y Cálculo
        </li>
        <li onClick={() => handleClick('español')}>
          <FontAwesomeIcon icon={faLanguage} /> Español
        </li>
        <li onClick={() => handleClick('historia')}>
          <FontAwesomeIcon icon={faLandmark} /> Historia
        </li>
        <li onClick={() => handleClick('cienciassociales')}>
          <FontAwesomeIcon icon={faPeopleArrows} /> Ciencias Sociales
        </li>
        <li onClick={() => handleClick('geografía')}>
          <FontAwesomeIcon icon={faGlobe} /> Geografía
        </li>
        <li onClick={() => handleClick('derecho')}>
          <FontAwesomeIcon icon={faGavel} /> Derecho
        </li>
        <li onClick={() => handleClick('contabilidad')}>
          <FontAwesomeIcon icon={faBalanceScale} /> Contabilidad
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
