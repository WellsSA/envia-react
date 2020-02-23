import React from 'react';
import PropTypes from 'prop-types';
import { ModalHelper, Notifier } from '../../../components';
import { Container } from './styles';

export default function ImportModal({ visible, onSetVisible }) {
  return (
    <Container>
      <ModalHelper
        title="Importar Professores"
        visible={visible}
        onSetVisible={onSetVisible}
      >
        <Notifier />
        <div>input</div>
      </ModalHelper>
    </Container>
  );
}

ImportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};
