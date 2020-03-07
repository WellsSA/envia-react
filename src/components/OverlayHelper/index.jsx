import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Background } from './styles';

export default function OverlayHelper({
  visible,
  onSetVisible,
  children,
  onCancel,
}) {
  function handleCancel() {
    onSetVisible(false);
    onCancel();
  }

  return (
    <Container visible={visible}>
      <Content>{children}</Content>
      <Background onClick={handleCancel} />
    </Container>
  );
}

OverlayHelper.propTypes = {
  visible: PropTypes.bool,
  onSetVisible: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.any,
  ]).isRequired,
  onCancel: PropTypes.func,
};

OverlayHelper.defaultProps = {
  visible: false,
  onSetVisible: () => {},
  onCancel: () => {},
};
