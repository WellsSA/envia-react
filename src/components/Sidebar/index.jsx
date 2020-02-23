import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import NavGroup from './NavGroup';
import { Container, Background } from './styles';

export default function Sidebar({ isOpen, onSetOpen }) {
  useEffect(() => {
    onSetOpen(isOpen);
  }, [isOpen, onSetOpen]);

  function closeSidebar() {
    onSetOpen(false);
  }

  return (
    <>
      <Container isOpen={isOpen}>
        <aside>
          <div />
          <MdClose onClick={closeSidebar} />
        </aside>
        <nav>
          <NavGroup clickHandler={closeSidebar} />
        </nav>
      </Container>
      <Background visible={isOpen} onClick={closeSidebar} />
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onSetOpen: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isOpen: false,
};
