import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegFileExcel } from 'react-icons/fa';
import { notifySuccess, notifyError } from '~/utils/notify';
import ModalHelper from '../ModalHelper';
import Notifier from '../Notifier';
import { Title, Alert } from '../_common';
import api, { baseURL } from '~/services/api';
import { Container, SpreadSheetContainer, ViewModel } from './styles';
import { capitalize } from '~/utils/text';
import { disposeNotify } from '~/store/modules/notify/actions';

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
    <ModalHelper
      title={title}
      visible={visible}
      onSetVisible={onSetVisible}
      onConfirm={sendRequest}
      confirmLabel="Importar"
      onCancel={() => dispatch(disposeNotify())}
    >
      <Container>
        <Notifier />
        <p>
          Você pode importar seus {importLabel} de uma <b>planilha excel</b>!
        </p>
        <Alert>
          <b>Nota:</b> Você pode importar a mesma planilha quantas vezes
          precisar, <br /> os registros só serão criados uma única vez!
        </Alert>
        <Alert kind="alert">
          <b>Nota:</b> Não utilize a importação para atualizar registros,
          <br /> eles serão inseridos apenas uma vez.
        </Alert>
        <Title>Baixe e preencha o modelo:</Title>
        <ViewModel href={url}>
          <FaRegFileExcel /> Planilha modelo de {importLabel}
        </ViewModel>
        <Title>Importe {importLabel}:</Title>
        <SpreadSheetContainer htmlFor="spreadsheet">
          <input
            type="file"
            id="spreadsheet"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .numbers"
            onChange={handleChange}
          />
        </SpreadSheetContainer>
      </Container>
    </ModalHelper>
  );
}

ImportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSetVisible: PropTypes.func.isRequired,
  importLabel: PropTypes.string.isRequired,
  modelURL: PropTypes.string.isRequired,
  onImport: PropTypes.func.isRequired,
};
