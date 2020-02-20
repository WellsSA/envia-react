import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import NamedSection from '../../components/NamedSection';
import AlunosTable from './AlunosTable';
import { Container, Actions } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';

export default function Alunos() {
  const [tableData, setTableData] = useState([
    {
      name: 'Zezim',
      birthDate: '12/12/2012',
      email: 'zezim@zezim',
      phone: '11977440233',
      responsible: 'zezim father',
      responsible_email: 'pai@pai.com',
      responsible_phone: '11977440233',
      turmas: 'Zezim v1, Zezim v2',
    },
    {
      name: 'Zuleide',
      birthDate: '12/12/2012',
      email: 'zezim@zezim',
      phone: '11977440233',
      responsible: 'Creusa',
      responsible_email: 'pai@pai.com',
      responsible_phone: '11977440233',
      turmas: 'Zuleide v1, Zuleide v2',
    },
    {
      name: 'Judith',
      birthDate: '12/12/2012',
      email: 'zezim@zezim',
      phone: '11977440233',
      responsible: 'Jerucreusa',
      responsible_email: 'pai@pai.com',
      responsible_phone: '11977440233',
      turmas: 'Judith v1, Judith v2',
    },
  ]);

  return (
    <Container>
      <NamedSection name="Alunos" icon={FaUser}>
        <Actions>Adicionar/importar</Actions>
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
