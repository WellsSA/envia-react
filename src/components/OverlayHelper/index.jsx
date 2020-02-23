import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container, Content, Header, Body, Footer } from './styles';

export default function OverlayHelper({ children }) {
  return (
    <Container visible={false}>
      <Content>
        <Header>
          Cadastro de professores
          <MdClose />
        </Header>
        <Body>{children}</Body>
        <Footer>
          <button type="button" className="cancel">
            Cancelar
          </button>
          <button form="my-form" type="submit" className="confirm">
            Cadastrar
          </button>
        </Footer>
      </Content>
    </Container>
  );
}

OverlayHelper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
};
