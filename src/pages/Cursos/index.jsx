import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaBook } from 'react-icons/fa';
import CursosTable from './CursosTable';
import CursosModal from './CursosModal';
import api from '../../services/api';
import { NamedSection, AddImportActions } from '../../components';
import { Container } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';

export default function Cursos() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);

  function handleInsertSubmit({ name }) {
    handleInsert({ name }, setTableData, dispatch);
  }

  useEffect(() => {
    async function loadCursos() {
      const { status, data } = await api.get('cursos');
      if (status !== 200) return;
      setTableData(data);
    }

    loadCursos();
  }, []);

  return (
    <Container>
      <CursosModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={handleInsertSubmit}
      />
      <NamedSection name="Cursos" icon={FaBook}>
        <AddImportActions
          onAdd={() => setInsertModalVisible(true)}
          onImport={() => alert('work in progress! :D')}
        />
        <CursosTable
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
              tooltip: 'Apagar cursos selecionados',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data, setTableData),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
