import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegFileExcel, FaPlus } from 'react-icons/fa';
import { Container } from './styles';
import ImportModal from '../ImportModal';
import { Button } from '../_common';

export default function AddImportActions({
  onAdd,
  onImport,
  importLabel,
  importModelURL,
}) {
  const [importModalVisible, setImportModalVisible] = useState(false);

  function _onImport() {
    setImportModalVisible(true);
  }

  return (
    <>
      <ImportModal
        visible={importModalVisible}
        onSetVisible={setImportModalVisible}
        importLabel={importLabel}
        modelURL={importModelURL}
        onImport={onImport}
      />
      <Container>
        <Button kind="confirm" onClick={onAdd}>
          Adicionar <FaPlus />
        </Button>

        <Button kind="confirm" onClick={_onImport}>
          Importar <FaRegFileExcel />
        </Button>
      </Container>
    </>
  );
}

AddImportActions.propTypes = {
  onAdd: PropTypes.func,
  onImport: PropTypes.func,
  importLabel: PropTypes.string,
  importModelURL: PropTypes.string,
};

AddImportActions.defaultProps = {
  onAdd: () => {},
  onImport: () => {},
  importLabel: 'valores',
  importModelURL: '#',
};
