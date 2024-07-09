import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalculator, faLanguage, faGlobe, faGavel, faBalanceScale, faLandmark, faPeopleArrows, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <a className='asignaturas'><FontAwesomeIcon icon={faBook} /> Todas las asignaturas</a>
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
