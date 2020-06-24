import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Header, Body, Footer } from './styles';
import OverlayHelper from '../OverlayHelper';
import { Button } from '../_common';

export default function ModalHelper({
  title,
  visible,
  onSetVisible,
  children,
  formId,
  onConfirm,
  onCancel,
  confirmLabel,
  noFooter,
}) {
  function handleCancel() {
    onSetVisible(false);
    onCancel();
  }

  return (
    <OverlayHelper
      visible={visible}
      onSetVisible={onSetVisible}
      onCancel={onCancel}
    >
      <Header>
        {title}
        <MdClose onClick={handleCancel} />
      </Header>
      <Body>{children}</Body>
      {!noFooter && (
        <Footer>
          <Button kind="cancel" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            type="submit"
            kind="confirm"
            onClick={onConfirm}
            {...(formId ? { form: formId } : {})}
          >
            {confirmLabel}
          </Button>
        </Footer>
      )}
    </OverlayHelper>
  );
}

ModalHelper.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  onSetVisible: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.any,
  ]).isRequired,
  formId: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  confirmLabel: PropTypes.string,
  noFooter: PropTypes.bool,
};

ModalHelper.defaultProps = {
  visible: false,
  onSetVisible: () => {},
  formId: null,
  onConfirm: () => {},
  onCancel: () => {},
  confirmLabel: 'Cadastrar',
  noFooter: false,
};
