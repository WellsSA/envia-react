import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import { Container } from './styles';

export default function Sidebar({ isOpen, onSetOpen }) {
  useEffect(() => {
    onSetOpen(isOpen);
  }, [isOpen, onSetOpen]);

  function closeSidebar() {
    onSetOpen(false);
  }

  return (
    <Container isOpen={isOpen}>
      <aside>
        <div />
        <FaHome onClick={closeSidebar} />
      </aside>
      <nav>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Home</strong>
        </Link>
        <Link to="/EnviarMensagens" onClick={closeSidebar}>
          <div>
            <FaHome />
          </div>
          <strong>Enviar Mensagem</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Ultimos Envios</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Modelos de Mensagens</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Cursos</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Professores</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Turmas</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Alunos</strong>
        </Link>
        <Link to="/">
          <div>
            <FaHome />
          </div>
          <strong>Configurações</strong>
        </Link>
      </nav>
    </Container>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onSetOpen: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isOpen: false,
};
