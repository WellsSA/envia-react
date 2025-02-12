import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaGraduationCap } from 'react-icons/fa';
import api from '../../services/api';
import { NamedSection, AddImportActions } from '../../components';
import ProfessoresTable from './ProfessoresTable';
import { Container } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';
import ProfessoresModal from './ProfessoresModal';

export default function Professores() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);

  function handleInsertSubmit({ name }) {
    handleInsert({ name }, setTableData, dispatch);
  }

  function handleImport(data) {
    setTableData(prev => [...prev, ...data.inserted]);
  }

  useEffect(() => {
    async function loadProfessores() {
      const { status, data } = await api.get('professores');
      if (status !== 200) return;
      setTableData(data);
    }

    loadProfessores();
  }, []);

  return (
    <Container>
      <ProfessoresModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={handleInsertSubmit}
      />
      <NamedSection name="Professores" icon={FaGraduationCap}>
        <AddImportActions
          onAdd={() => setInsertModalVisible(true)}
          importLabel="professores"
          importModelURL="/modelos/Envia_professores.xlsx"
          onImport={handleImport}
        />
        <ProfessoresTable
          tableData={tableData}
          setTableData={setTableData}
          editableOptions={{
            onRowAdd: newData => handleInsert(newData, setTableData, dispatch),
            onRowUpdate: (newData, oldData) =>
              handleUpdate(newData, oldData, setTableData, dispatch),
            onRowDelete: oldData =>
              handleDelete(oldData, setTableData, dispatch),
          }}
          actions={[
            {
              tooltip: 'Apagar Professores(as) selecionados',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data, setTableData),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
