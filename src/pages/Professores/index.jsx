import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaGraduationCap } from 'react-icons/fa';
import api from '../../services/api';
import NamedSection from '../../components/NamedSection';
import ProfessoresTable from './ProfessoresTable';
import { Container, Actions } from './styles';
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

  function handleInsertSubmit({ name }) {
    handleInsert({ name }, setTableData, dispatch);
  }

  function handleUpdateSubmit({ name }) {
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
      <ProfessoresModal handleSubmit={handleInsertSubmit} />
      {/* <ProfessoresModal handleSubmit={handleSubmit} /> */}
      <NamedSection name="Professores" icon={FaGraduationCap}>
        <Actions>Adicionar/importar</Actions>
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
              icon: 'edit',
              tooltip: 'Edit User',
              onClick: (event, rowData) =>
                alert(`You are editing ${rowData.name}`),
            },
            {
              tooltip: 'Apagar os professores(as) selecionados',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data, setTableData),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
