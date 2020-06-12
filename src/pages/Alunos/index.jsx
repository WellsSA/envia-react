import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import api from '../../services/api';

import { NamedSection, AddImportActions } from '../../components';
import AlunosTable from './AlunosTable';
import AlunosModal from './AlunosModal';

import { Container } from './styles';
import {
  handleInsert,
  handleUpdate,
  // handleDelete,
  // handleDeleteAll,
} from './handlers.data';

import { alunosBFF } from './alunos.util';

const DEFAULT_MODAL_STATE = {
  visible: false,
  selectedObject: null,
  tableRefId: 0,
};

export default function Alunos() {
  const dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);

  const enable = {
    insert: () => setModalState({ ...DEFAULT_MODAL_STATE, visible: true }),
    edit: ({ tableData: _tableData, ...data }) =>
      setModalState({
        visible: true,
        selectedObject: data,
        tableRefId: _tableData.id,
      }),
    delete: () => alert('enable delete'),
  };

  const handle = {
    insert: data => handleInsert(data, setTableData, dispatch),
    edit: data => {
      handleUpdate(data, setTableData, modalState.tableRefId, dispatch);
      setModalState(DEFAULT_MODAL_STATE);
    },
    delete: () => alert('handle delete'),
  };

  useEffect(() => {
    async function loadAlunos() {
      const { status, data } = await api.get('alunos');
      if (status !== 200) return;
      setTableData(alunosBFF(data));
    }

    loadAlunos();
  }, []);

  return (
    <Container>
      <AlunosModal
        visible={modalState.visible}
        onSetVisible={visible => setModalState(prev => ({ ...prev, visible }))}
        handleSubmit={!modalState.selectedObject ? handle.insert : handle.edit}
        initialData={modalState.selectedObject}
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
