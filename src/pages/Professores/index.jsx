import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

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
  const columns = [{ title: 'Professor', field: 'name' }];

  const [tableData, setTableData] = useState([
    { name: 'Zezim' },
    { name: 'Maria' },
    { name: 'Zuleide' },
  ]);

  return (
    <Container>
      <NamedSection name="Professores" icon={FaGraduationCap}>
        <Actions>Adicionar/importar</Actions>
        <EnviaDataTable
          title="Envia - Professores"
          columns={columns}
          tableData={tableData}
          setTableData={setTableData}
          dataVisualization={{
            singular: 'professor(a)',
            plural: 'professores(as)',
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
              tooltip: 'Apagar os professores(as) selecionados',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
