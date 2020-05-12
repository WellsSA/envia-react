import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegFileExcel, FaPlus } from 'react-icons/fa';
import { Container, AddButton, ImportButton } from './styles';
import ImportModal from '../ImportModal';

export default function AddImportActions({
  onAdd,
  onImport,
  importLabel,
  importModelURL,
}) {
  const [importModalVisible, setImportModalVisible] = useState(false);

  function _onImport() {
    setImportModalVisible(true);
    onImport();
  }

  return (
    <>
      <ImportModal
        visible={importModalVisible}
        onSetVisible={setImportModalVisible}
        importLabel={importLabel}
        modelURL={importModelURL}
      />
      <Container>
        <AddButton className="confirm" onClick={onAdd}>
          Adicionar <FaPlus />
        </AddButton>

        <ImportButton className="confirm" onClick={_onImport}>
          Importar <FaRegFileExcel />
        </ImportButton>
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
