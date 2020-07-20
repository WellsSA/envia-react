import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers } from 'react-icons/fa';
import TurmasTable from './TurmasTable';
import TurmasModal from './TurmasModal';
import api from '../../services/api';
import {
  NamedSection,
  AddImportActions,
  ConfirmDialog,
} from '../../components';
// import { Container } from './styles';
import { turmaBFF } from './turma.util';
import { handleInsert, handleUpdate, handleDelete } from './handlers.data';

const DEFAULT_MODAL_STATE = {
  visible: false,
  selectedObject: null,
  tableRefId: 0,
};

export default function Turmas() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);
  const [confirmBoxVisible, setConfirmBoxVisible] = useState(false);

  const enable = {
    insert: () => setModalState({ ...DEFAULT_MODAL_STATE, visible: true }),
    edit: ({ tableData: _tableData, ...data }) =>
      setModalState({
        visible: true,
        selectedObject: turmaBFF(data),
        tableRefId: _tableData.id,
      }),
    delete: ({ id, tableData: _tableData }) => {
      setModalState({
        visible: false,
        selectedObject: { id: id.toString() },
        tableRefId: _tableData.id,
      });
      setConfirmBoxVisible(true);
    },
  };

  const handle = {
    insert: data => handleInsert(data, setTableData, dispatch),
    edit: data => {
      handleUpdate(data, setTableData, modalState.tableRefId, dispatch);
      setModalState(DEFAULT_MODAL_STATE);
    },
    delete: () =>
      handleDelete(
        modalState.selectedObject.id,
        modalState.tableRefId,
        setTableData
      ),
    import: data => setTableData(prev => [...prev, ...data.inserted]),
  };

  useEffect(() => {
    async function loadTurmas() {
      const { status, data } = await api.get('turmas');
      if (status !== 200) return;
      setTableData(data);
    }

    loadTurmas();
  }, []);

  return (
    <div>
      <ConfirmDialog
        visible={confirmBoxVisible}
        onSetVisible={setConfirmBoxVisible}
        message="Tem certeza que deseja excluir esta turma?"
        onConfirm={() => handle.delete()}
      />
      <TurmasModal
        visible={modalState.visible}
        onSetVisible={visible => setModalState(prev => ({ ...prev, visible }))}
        handleSubmit={!modalState.selectedObject ? handle.insert : handle.edit}
        initialData={modalState.selectedObject}
      />
      <NamedSection name="Turmas" icon={FaUsers}>
        <AddImportActions
          onAdd={enable.insert}
          importLabel="turmas"
          importModelURL="/modelos/Envia_turmas.xlsx"
          onImport={handle.import}
        />
        <TurmasTable
          tableData={tableData}
          setTableData={setTableData}
          isSelectable={false}
          actions={[
            {
              tooltip: 'Editar turma',
              icon: 'edit',
              onClick: (_, data) => enable.edit(data),
            },
            {
              tooltip: 'Apagar turma',
              icon: 'delete',
              onClick: (_, data) => enable.delete(data),
            },
          ]}
        />
      </NamedSection>
    </div>
  );
}
