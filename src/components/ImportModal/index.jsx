import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegFileExcel } from 'react-icons/fa';
import { notifySuccess, notifyError } from '../../utils/notifyHelper';
import ModalHelper from '../ModalHelper';
import Notifier from '../Notifier';
import { Title } from '../_common';
import api, { baseURL } from '../../services/api';
import { Container, SpreadSheetContainer, ViewModel } from './styles';
import { capitalize } from '../../utils/textHelper';

export default function ImportModal({
  visible,
  onSetVisible,
  importLabel,
  modelURL,
  onImport,
}) {
  const title = `Importar ${capitalize(importLabel)}`;
  const url = `${baseURL}${modelURL}`;
  const [file, setFile] = useState(undefined);
  const dispatch = useDispatch();

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    setFile(data);
  }

  async function sendRequest() {
    if (!file) {
      return notifyError('Selecione um arquivo para importar', dispatch);
    }

    const { data, status } = await api.post(`import/${importLabel}`, file);

    if (status !== 200) return;

    notifySuccess(`${importLabel} importados com sucesso!`, dispatch);
    return onImport(data);
  }

  return (
    <Container>
      <ModalHelper
        title={title}
        visible={visible}
        onSetVisible={onSetVisible}
        onConfirm={sendRequest}
        confirmLabel="Importar"
      >
        <Notifier />
        <p>
          Você pode importar seus {importLabel} de uma <b>planilha excel</b>!
        </p>
        <Title>Baixe e preencha o modelo:</Title>
        <ViewModel href={url}>
          <FaRegFileExcel /> Planilha modelo de {importLabel}
        </ViewModel>
        <Title>Importe {importLabel}:</Title>
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
  importLabel: PropTypes.string.isRequired,
  modelURL: PropTypes.string.isRequired,
  onImport: PropTypes.func.isRequired,
};
