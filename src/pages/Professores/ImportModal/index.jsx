import React from 'react';
import PropTypes from 'prop-types';
import { FaRegFileExcel } from 'react-icons/fa';
import { ModalHelper, Notifier, Title } from '../../../components';
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
        <p>Você pode importar seus professores de uma planilha excel!</p>
        <Title>Baixe e preencha o modelo:</Title>
        <div>
          <FaRegFileExcel /> Planilha modelo de professores
        </div>
        <Title>Importe seus professores:</Title>
        <button type="button" className="confirm">
          Importar
        </button>
      </ModalHelper>
    </Container>
  );
}

ImportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};
