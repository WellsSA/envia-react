import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers } from 'react-icons/fa';
import ModelosMensagensTable from './ModelosMensagensTable';
import ModelosMensagensModal from './ModelosMensagensModal';
import api from '../../services/api';
import {
  NamedSection,
  AddImportActions,
  ConfirmDialog,
} from '../../components';
// import { Container } from './styles';
import { handleInsert, handleUpdate, handleDelete } from './handlers.data';

export default function ModelosMensagens() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(true);
  const [confirmBoxVisible, setConfirmBoxVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [tableDataId, setTableDataId] = useState(0);

  function handleInsertSubmit({ title, greeting, content }) {
    handleInsert({ title, greeting, content }, setTableData, dispatch);
  }

  function handleUpdateSubmit({ id, title, greeting, content }) {
    handleUpdate(
      { id, title, greeting, content },
      setTableData,
      tableDataId,
      dispatch
    );

    setInsertModalVisible(false);
  }

  function handleDeleteSubmit() {
    handleDelete({ id: selectedObject.id, tableDataId }, setTableData);
  }

  function enableInserting() {
    setSelectedObject(null);
    setInsertModalVisible(true);
  }

  function enableDeleting({ id, tableData: tableDataInfo }) {
    setSelectedObject({ id: id.toString() });
    setTableDataId(tableDataInfo.id);
    setConfirmBoxVisible(true);
  }

  function enableEditing({ tableData: tableDataInfo, ...data }) {
    data.id = data.id.toString();

    setTableDataId(tableDataInfo.id);
    setSelectedObject(data);
    setInsertModalVisible(true);
  }

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
        onConfirm={() => handleDeleteSubmit()}
      />
      <ModelosMensagensModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={!selectedObject ? handleInsertSubmit : handleUpdateSubmit}
        initialData={selectedObject}
      />
      <NamedSection name="Turmas" icon={FaUsers}>
        <AddImportActions
          onAdd={() => enableInserting()}
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
              onClick: (evt, data) => enableEditing(data),
            },
            {
              tooltip: 'Apagar modelo',
              icon: 'delete',
              onClick: (evt, data) => enableDeleting(data),
            },
          ]}
        />
      </NamedSection>
    </div>
  );
}
