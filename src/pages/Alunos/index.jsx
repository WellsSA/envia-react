import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import api from '../../services/api';

import { NamedSection, AddImportActions } from '../../components';
import AlunosTable from './AlunosTable';
import AlunosModal from './AlunosModal';

import { Container } from './styles';
// import {
//   handleInsert,
//   handleUpdate,
//   handleDelete,
//   handleDeleteAll,
// } from './handlers.data';

import { alunoBFF } from './alunos.util';

export default function Alunos() {
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);

  const enable = {
    insert: () => alert('enable insert'),
    edit: () => alert('enable edit'),
    delete: () => alert('enable delete'),
  };

  const handle = {
    insert: () => alert('handle insert'),
    edit: () => alert('handle edit'),
    delete: () => alert('handle delete'),
  };

  useEffect(() => {
    async function loadAlunos() {
      const { status, data } = await api.get('alunos');
      if (status !== 200) return;
      setTableData(alunoBFF(data));
    }

    loadAlunos();
  }, []);

  return (
    <Container>
      <AlunosModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={() => handle.insert()}
      />
      <NamedSection name="Alunos" icon={FaUser}>
        <AddImportActions
          onAdd={() => enable.insert()}
          importLabel="alunos"
          importModelURL="/modelos/Envia_alunos.xlsx"
        />
        <AlunosTable
          tableData={tableData}
          setTableData={setTableData}
          isSelectable={false}
          actions={[
            {
              tooltip: 'Editar aluno(a)',
              icon: 'edit',
              onClick: (evt, data) => enable.edit(data),
            },
            {
              tooltip: 'Apagar aluno(a)',
              icon: 'delete',
              onClick: (evt, data) => enable.delete(data),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
