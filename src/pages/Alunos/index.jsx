import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import api from '../../services/api';

import { NamedSection, AddImportActions } from '../../components';
import AlunosTable from './AlunosTable';
import AlunosModal from './AlunosModal';

import { Container } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';

import { alunoBFF } from './alunos.util';

export default function Alunos() {
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(true);
  // const [importModalVisible, setImportModalVisible] = useState(false);

  useEffect(() => {
    async function loadAlunos() {
      const { status, data } = await api.get('alunos');
      if (status !== 200) return;
      setTableData(alunoBFF(data));
    }

    loadAlunos();
  }, []);

  function handleInsertSubmit(data) {
    console.log(data);
    alert('here');
  }

  return (
    <Container>
      <AlunosModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={handleInsertSubmit}
      />
      <NamedSection name="Alunos" icon={FaUser}>
        <AddImportActions
          onAdd={() => setInsertModalVisible(true)}
          importLabel="alunos"
          importModelURL="/modelos/Envia_alunos.xlsx"
        />
        <AlunosTable
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
              tooltip: 'Apagar os alunos(as) selecionados',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
