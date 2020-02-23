import React from 'react';
import PropTypes from 'prop-types';
import { FaRegFileExcel, FaPlus } from 'react-icons/fa';
import { Container, AddButton, ImportButton } from './styles';

export default function AddImportActions({ onAdd, onImport }) {
  return (
    <Container>
      <AddButton onClick={onAdd}>
        Adicionar <FaPlus />
      </AddButton>

      <ImportButton onClick={onImport}>
        Importar <FaRegFileExcel />
      </ImportButton>
    </Container>
  );
}

AddImportActions.propTypes = {
  onAdd: PropTypes.func,
  onImport: PropTypes.func,
};

AddImportActions.defaultProps = {
  onAdd: () => {},
  onImport: () => {},
};
