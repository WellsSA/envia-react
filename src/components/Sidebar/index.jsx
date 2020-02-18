import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { FaHome, FaGraduationCap } from 'react-icons/fa';

import { Container } from './styles';
import NavLink from './NavLink';

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
        <NavLink to="/" label="Home" icon={FaHome} />
        <NavLink
          to="/enviarMensagens"
          label="Enviar Mensagens"
          icon={FaHome}
          onClick={closeSidebar}
        />
        <NavLink to="/" label="Últimos Envios" icon={FaHome} />
        <NavLink to="/" label="Modelos de Mensagens" icon={FaHome} />
        <NavLink to="/professores" label="Professores" icon={FaGraduationCap} />
        <NavLink to="/" label="Turmas" icon={FaHome} />
        <NavLink to="/" label="Alunos" icon={FaHome} />
        <NavLink to="/" label="Configurações" icon={FaHome} />
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
