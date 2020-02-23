import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container, Content, Header, Body, Footer } from './styles';

export default function OverlayHelper({ visible, children }) {
  const [isVisible, setIsVisible] = useState(visible);

  function handleCancel() {
    setIsVisible(false);
  }

  return (
    <Container visible={isVisible}>
      <Content>
        <Header>
          Cadastro de professores
          <MdClose onClick={handleCancel} />
        </Header>
        <Body>{children}</Body>
        <Footer>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button form="professores-modal" type="submit" className="confirm">
            Cadastrar
          </button>
        </Footer>
      </Content>
    </Container>
  );
}

OverlayHelper.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
};

OverlayHelper.defaultProps = {
  visible: false,
};
