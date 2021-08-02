import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/images/LogoGranCursos.svg';
import gitImg from '../../assets/icons/git2.png';
import todoImg from '../../assets/icons/check-square.svg';
import './styles.css';

export default function Landing() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="logo-container">
            <img src={logoImg} className="rounded mx-auto d-block" alt="Logo Gran Cursos Online" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="buttons-container">
            <Link to="/home" className="study">
              <FontAwesomeIcon icon="book-open" />
              <span>
                Acessar o desafio
              </span>
            </Link>

            <Link to="/home" className="give-classes">
              <img src={gitImg} alt="git" className="gitImg" />
              <span>
                Repositório Git
              </span>
            </Link>
          </div>
        </div>
        <span className="total-connections">
          Desenvolvido por Stanley Dias <img src={todoImg} alt="" />
        </span>
      </div>
    </div>
  );
}
