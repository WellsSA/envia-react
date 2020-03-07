import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers } from 'react-icons/fa';
import TurmasTable from './TurmasTable';
import TurmasModal from './TurmasModal';
import api from '../../services/api';
import { NamedSection, AddImportActions } from '../../components';
// import { Container } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';

export default function Turmas() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(true);

  function handleInsertSubmit({ name, days, hours, course, teacher }) {
    handleInsert(
      { name, days, hours, course, teacher },
      setTableData,
      dispatch
    );
  }

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
      <TurmasModal
        visible={insertModalVisible}
        onSetVisible={setInsertModalVisible}
        handleSubmit={handleInsertSubmit}
      />
      <NamedSection name="Turmas" icon={FaUsers}>
        <AddImportActions
          onAdd={() => setInsertModalVisible(true)}
          onImport={() => alert('work in progress! :D')}
        />
        <TurmasTable
          tableData={tableData}
          setTableData={setTableData}
          actions={[
            {
              tooltip: 'Editar turma',
              icon: 'edit',
              onClick: (evt, data) => console.log('edit', evt, data),
            },
            {
              tooltip: 'Apagar turma',
              icon: 'delete',
              onClick: (evt, data) => console.log('delete', evt, data),
            },
          ]}
        />
      </NamedSection>
    </div>
  );
}
