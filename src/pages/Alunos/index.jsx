import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import NamedSection from '../../components/NamedSection';
import EnviaDataTable from '../../components/EnviaDataTable';
import { Container, Actions } from './styles';
import {
  handleInsert,
  handleUpdate,
  handleDelete,
  handleDeleteAll,
} from './handlers.data';

export default function Professores() {
  const columns = [
    { title: 'Nome', field: 'name' },
    { title: 'Data de Nascimento', field: 'birthDate', type: 'date' },
    { title: 'E-mail', field: 'email' },
    { title: 'Celular', field: 'phone', type: 'numeric' },
    { title: 'Responsável', field: 'responsible' },
    { title: 'E-mail Responsável ', field: 'responsible_email' },
    {
      title: 'Celular Responsável',
      field: 'responsible_phone',
      type: 'numeric',
    },
    { title: 'Turma', field: 'turmas' },
  ];

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
        <EnviaDataTable
          title="Envia - Alunos"
          columns={columns}
          tableData={tableData}
          setTableData={setTableData}
          dataVisualization={{
            singular: 'aluno(a)',
            plural: 'alunos(as)',
          }}
          editableOptions={{
            onRowAdd: newData => handleInsert(newData, setTableData),
            onRowUpdate: (newData, oldData) =>
              handleUpdate(newData, oldData, setTableData),
            onRowDelete: oldData => handleDelete(oldData, setTableData),
          }}
          isSelectable
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
