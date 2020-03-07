import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers } from 'react-icons/fa';
import TurmasTable from './TurmasTable';
import TurmasModal from './TurmasModal';
import api from '../../services/api';
import {
  NamedSection,
  AddImportActions,
  OverlayHelper,
} from '../../components';
// import { Container } from './styles';
import { handleInsert, handleUpdate, handleDelete } from './handlers.data';

export default function Turmas() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);
  const [selectedTurma, setSelectedTurma] = useState(null);
  const [tableDataId, setTableDataId] = useState(0);

  function handleInsertSubmit({ name, days, hours, course, teacher }) {
    handleInsert(
      { name, days, hours, course, teacher },
      setTableData,
      dispatch
    );
  }

  function handleUpdateSubmit({ id, name, days, hours, course, teacher }) {
    console.log('edit!', { id, name, days, hours, course, teacher });

    handleUpdate(
      { id, name, days, hours, course, teacher },
      setTableData,
      tableDataId,
      dispatch
    );

    setInsertModalVisible(false);
  }

  function enableInserting() {
    setSelectedTurma(null);
    setInsertModalVisible(true);
  }

  function enableEditing({
    id,
    name,
    days,
    hours,
    course,
    teacher,
    tableData: tableDataInfo,
  }) {
    const preparedData = {
      id: `${id}`,
      name,
      days,
      hours,
      course: `${course.id}`,
      teacher: `${teacher.id}`,
    };

    setTableDataId(tableDataInfo.id);
    setSelectedTurma(preparedData);
    setInsertModalVisible(true);
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
        handleSubmit={!selectedTurma ? handleInsertSubmit : handleUpdateSubmit}
        initialData={selectedTurma}
      />
      <NamedSection name="Turmas" icon={FaUsers}>
        <AddImportActions
          onAdd={() => enableInserting()}
          onImport={() => alert('work in progress! :D')}
        />
        <TurmasTable
          tableData={tableData}
          setTableData={setTableData}
          isSelectable={false}
          actions={[
            {
              tooltip: 'Editar turma',
              icon: 'edit',
              onClick: (evt, data) => enableEditing(data),
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
