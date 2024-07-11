import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalculator, faLanguage, faGlobe, faGavel, faBalanceScale, faLandmark, faPeopleArrows, faChartSimple, faTh } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
              <a className='asignatura'>Asignaturas</a>
      <ul>
        <li><FontAwesomeIcon icon={faTh} /> Todas las asignaturas</li>
        <li><FontAwesomeIcon icon={faCalculator} /> Matemáticas</li>
        <li><FontAwesomeIcon icon={faChartSimple} /> Estadística y Cálculo</li>
        <li><FontAwesomeIcon icon={faLanguage} /> Castellano</li>
        <li><FontAwesomeIcon icon={faLandmark} /> Historia</li>
        <li><FontAwesomeIcon icon={faPeopleArrows} /> Ciencias Sociales</li>
        <li><FontAwesomeIcon icon={faGlobe} /> Geografía</li>
        <li><FontAwesomeIcon icon={faGavel} /> Derecho</li>
        <li><FontAwesomeIcon icon={faBalanceScale} /> Contabilidad</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
