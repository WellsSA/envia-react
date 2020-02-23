import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container, Content, Header, Body, Footer, Background } from './styles';

export default function OverlayHelper({
  visible,
  onSetVisible,
  children,
  formId,
}) {
  function handleCancel() {
    onSetVisible(false);
  }

  return (
    <Container visible={visible}>
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
          <button
            type="submit"
            className="confirm"
            {...(formId ? { form: formId } : {})}
          >
            Cadastrar
          </button>
        </Footer>
      </Content>
      <Background onClick={handleCancel} />
    </Container>
  );
}

OverlayHelper.propTypes = {
  visible: PropTypes.bool,
  onSetVisible: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  formId: PropTypes.string,
};

OverlayHelper.defaultProps = {
  visible: false,
  onSetVisible: () => {},
  formId: null,
};
