import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import OverlayHelper from '../OverlayHelper';
import { Button } from '../_common';
import { Container, Message, Options, Close } from './styles';

export default function ConfirmDialog({
  message,
  visible,
  onSetVisible,
  onCancel,
  onConfirm,
}) {
  function handleCancel() {
    onSetVisible(false);
    onCancel();
  }

  function handleConfirm() {
    onSetVisible(false);
    onConfirm();
  }

  return (
    <OverlayHelper
      visible={visible}
      onSetVisible={onSetVisible}
      onCancel={onCancel}
    >
      <Container>
        <Close>
          <MdClose />
        </Close>
        <Message>{message}</Message>
        <Options>
          <Button kind="cancel" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button kind="confirm" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Options>
      </Container>
    </OverlayHelper>
  );
}

ConfirmDialog.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
  onSetVisible: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

ConfirmDialog.defaultProps = {
  message: 'Confirmar?',
  visible: false,
  onSetVisible: () => {},
  onCancel: () => {},
  onConfirm: () => {},
};
