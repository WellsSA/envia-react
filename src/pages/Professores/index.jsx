import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaGraduationCap } from 'react-icons/fa';
import api from '../../services/api';
import { NamedSection, AddImportActions, ImportModal } from '../../components';
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
  const [importModalVisible, setImportModalVisible] = useState(true); // FIXME: FALSE

  function handleInsertSubmit({ name }) {
    handleInsert({ name }, setTableData, dispatch);
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
      <ImportModal
        visible={importModalVisible}
        onSetVisible={setImportModalVisible}
        importLabel="professores"
        modelURL="/modelos/Envia_professores.xlsx"
      />
      <NamedSection name="Professores" icon={FaGraduationCap}>
        <AddImportActions
          onAdd={() => setInsertModalVisible(true)}
          onImport={() => setImportModalVisible(true)}
        />
        <ProfessoresTable
          tableData={tableData}
          setTableData={setTableData}
          editableOptions={{
            onRowAdd: newData => handleInsert(newData, setTableData),
            onRowUpdate: (newData, oldData) =>
              handleUpdate(newData, oldData, setTableData),
            onRowDelete: oldData => handleDelete(oldData, setTableData),
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
