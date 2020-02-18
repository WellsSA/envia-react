import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import NamedSection from '../../components/NamedSection';
import EnviaDataTable from '../../components/EnviaDataTable';
import { Container } from './styles';

export default function Professores() {
  const columns = [{ title: 'Professor', field: 'name' }];

  const [tableData, setTableData] = useState([
    { name: 'Zezim' },
    { name: 'Maria' },
    { name: 'Zuleide' },
  ]);

  function handleInsert(newData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setTableData(prevState => {
          const data = [...prevState];
          data.push(newData);
          return data;
        });
      }, 600);
    });
  }

  function handleUpdate(newData, oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          setTableData(prevState => {
            const data = [...prevState];
            data[data.indexOf(oldData)] = newData;
            return data;
          });
        }
      }, 600);
    });
  }

  function handleDelete(oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setTableData(prevState => {
          const data = [...prevState];
          data.splice(data.indexOf(oldData), 1);
          return data;
        });
      }, 600);
    });
  }

  function handleDeleteAll(evt, data) {
    alert(`Olha só, ${data.length} a menos`);
  }

  return (
    <Container>
      <NamedSection name="Professores" icon={FaGraduationCap}>
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
            onRowAdd: newData => handleInsert(newData),
            onRowUpdate: (newData, oldData) => handleUpdate(newData, oldData),
            onRowDelete: oldData => handleDelete(oldData),
          }}
          isSelectable
          actions={[
            {
              tooltip: 'Apagar todos os Professores',
              icon: 'delete',
              onClick: (evt, data) => handleDeleteAll(evt, data),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
