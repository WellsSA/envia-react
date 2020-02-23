import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container, Content, Header, Body, Footer, Background } from './styles';

export default function OverlayHelper({
  title,
  visible,
  onSetVisible,
  children,
  formId,
  onConfirm,
  onCancel,
}) {
  function handleCancel() {
    onSetVisible(false);
    onCancel();
  }

  return (
    <Container visible={visible}>
      <Content>
        <Header>
          {title}
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
            onClick={onConfirm}
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
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  onSetVisible: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  formId: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

OverlayHelper.defaultProps = {
  visible: false,
  onSetVisible: () => {},
  formId: null,
  onConfirm: () => {},
  onCancel: () => {},
};
