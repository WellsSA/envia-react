import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegFileExcel } from 'react-icons/fa';
import { ModalHelper, Notifier, Title } from '../../../components';
import api from '../../../services/api';
import { Container, SpreadSheetContainer, ViewModel } from './styles';

export default function ImportModal({ visible, onSetVisible }) {
  const [file, setFile] = useState(undefined);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    setFile(data);
  }

  async function sendRequest() {
    if (!file) {
      alert('Selecione um arquivo');
    }

    const { status } = await api.post('import/professores', file);

    if (status !== 200) return;

    alert('Deu bom meu bom');
  }

  return (
    <Container>
      <ModalHelper
        title="Importar Professores"
        visible={visible}
        onSetVisible={onSetVisible}
        onConfirm={sendRequest}
        confirmLabel="Importar"
      >
        <Notifier />
        <p>
          Você pode importar seus professores de uma <b>planilha excel</b>!
        </p>
        <Title>Baixe e preencha o modelo:</Title>
        <ViewModel href="http://localhost:4000/modelos/Envia_professores.xlsx">
          <FaRegFileExcel /> Planilha modelo de professores
        </ViewModel>
        <Title>Importe professores:</Title>
        <SpreadSheetContainer htmlFor="spreadsheet">
          <input
            type="file"
            id="spreadsheet"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleChange}
          />
        </SpreadSheetContainer>
      </ModalHelper>
    </Container>
  );
}

ImportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
};
