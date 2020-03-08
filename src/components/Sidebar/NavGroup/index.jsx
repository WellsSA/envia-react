import React from 'react';
import PropTypes from 'prop-types';

import {
  FaHome,
  FaTelegramPlane,
  FaEnvelopeOpen,
  FaEnvelope,
  FaGraduationCap,
  FaUser,
  FaUsers,
  FaBook,
  FaCog,
} from 'react-icons/fa';

import NavLink from './NavLink';

export default function NavGroup({ clickHandler }) {
  return (
    <>
      <NavLink
        to="/dashboard"
        label="Home"
        icon={FaHome}
        onClick={clickHandler}
      />
      <NavLink
        to="/enviarMensagens"
        label="Enviar Mensagens"
        icon={FaTelegramPlane}
        onClick={clickHandler}
      />
      <NavLink
        to="/ultimosEnvios"
        label="Últimos Envios"
        icon={FaEnvelopeOpen}
        onClick={clickHandler}
      />
      <NavLink
        to="/modelosMensagens"
        label="Modelos de Mensagem"
        icon={FaEnvelope}
        onClick={clickHandler}
      />
      <NavLink
        to="/cursos"
        label="Cursos"
        icon={FaBook}
        onClick={clickHandler}
      />
      <NavLink
        to="/professores"
        label="Professores"
        icon={FaGraduationCap}
        onClick={clickHandler}
      />
      <NavLink
        to="/turmas"
        label="Turmas"
        icon={FaUsers}
        onClick={clickHandler}
      />
      <NavLink
        to="/alunos"
        label="Alunos"
        icon={FaUser}
        onClick={clickHandler}
      />
      <NavLink
        to="/settings"
        label="Configurações"
        icon={FaCog}
        onClick={clickHandler}
      />
    </>
  );
}

NavGroup.propTypes = {
  clickHandler: PropTypes.func,
};

NavGroup.defaultProps = {
  clickHandler: () => {},
};
