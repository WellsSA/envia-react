import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaEnvelope } from 'react-icons/fa';
import ModelosMensagensTable from './ModelosMensagensTable';
import ModelosMensagensModal from './ModelosMensagensModal';
import api from '~/services/api';
import { NamedSection, AddImportActions, ConfirmDialog } from '~/components';
import { handleInsert, handleUpdate, handleDelete } from './handlers.data';

const DEFAULT_MODAL_STATE = {
  visible: false,
  selectedObject: null,
  tableRefId: 0,
};

export default function ModelosMensagens() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);
  const [confirmBoxVisible, setConfirmBoxVisible] = useState(false);

  const enable = {
    insert: () => setModalState({ ...DEFAULT_MODAL_STATE, visible: true }),
    edit: ({ tableData: _tableData, ...data }) =>
      setModalState({
        visible: true,
        selectedObject: { ...data, id: data.id.toString() },
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
  };

  useEffect(() => {
    async function loadModelos() {
      const { status, data } = await api.get('modelosMensagens');
      if (status !== 200) return;
      setTableData(data);
    }

    loadModelos();
  }, []);

  return (
    <div>
      <ConfirmDialog
        visible={confirmBoxVisible}
        onSetVisible={setConfirmBoxVisible}
        message="Tem certeza que deseja excluir este modelo?"
        onConfirm={() => handle.delete()}
      />
      <ModelosMensagensModal
        visible={modalState.visible}
        onSetVisible={visible => setModalState(prev => ({ ...prev, visible }))}
        handleSubmit={!modalState.selectedObject ? handle.insert : handle.edit}
        initialData={modalState.selectedObject}
      />
      <NamedSection name="Modelos de mensagens" icon={FaEnvelope}>
        <AddImportActions
          onAdd={() => enable.insert()}
          importLabel="modelos de mensagens"
          importModelURL="/modelos/Envia_modelos_mensagens.xlsx"
        />
        <ModelosMensagensTable
          tableData={tableData}
          setTableData={setTableData}
          isSelectable={false}
          actions={[
            {
              tooltip: 'Editar modelo',
              icon: 'edit',
              onClick: (evt, data) => enable.edit(data),
            },
            {
              tooltip: 'Apagar modelo',
              icon: 'delete',
              onClick: (evt, data) => enable.delete(data),
            },
          ]}
        />
      </NamedSection>
    </div>
  );
}
