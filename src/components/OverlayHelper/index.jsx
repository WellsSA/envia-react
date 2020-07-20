import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Background } from './styles';

export default function OverlayHelper({
  visible,
  onSetVisible,
  onCancel,
  children,
  className,
  locked,
}) {
  function handleCancel() {
    !locked && onSetVisible(false);
    onCancel();
  }

  return (
    <Container className={className} visible={visible}>
      <Content className="content" visible={visible}>
        {children}
      </Content>
      <Background className="background" onClick={handleCancel} />
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
  className: PropTypes.string,
  locked: PropTypes.bool,
};

OverlayHelper.defaultProps = {
  visible: false,
  onSetVisible: () => {},
  onCancel: () => {},
  className: '',
  locked: false,
};
