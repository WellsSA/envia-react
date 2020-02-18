import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import MaterialTable from 'material-table';

import NamedSection from '../../components/NamedSection';
import { Container } from './styles';

export default function Professores() {
  const [state, setState] = useState({
    columns: [{ title: 'Professor', field: 'name' }],
    data: [{ name: 'Zezim' }, { name: 'Maria' }, { name: 'Zuleide' }],
  });

  return (
    <Container>
      <NamedSection name="Professores" icon={FaGraduationCap}>
        <MaterialTable
          title="Envia - Professores"
          columns={state.columns}
          data={state.data}
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} de {count}',
              labelRowsSelect: 'linhas',
              labelRowsPerPage: 'Linhas por página:',
              firstAriaLabel: 'Primeira página',
              firstTooltip: 'Primeira página',
              previousAriaLabel: 'Página anterior',
              previousTooltip: 'Página anterior',
              nextAriaLabel: 'Próxima página',
              nextTooltip: 'Próxima Página',
              lastAriaLabel: 'Última Página',
              lastTooltip: 'Última Página',
            },
            toolbar: {
              nRowsSelected: '{0} linha(s) selecionadas',
              searchTooltip: 'Buscar',
              searchPlaceholder: 'Buscar',
            },
            header: {
              actions: 'Ações',
            },
            body: {
              emptyDataSourceMessage: 'Sem dados para mostrar.',
              filterRow: {
                filterTooltip: 'Filtro',
              },
              addTooltip: 'Adicionar',
              editTooltip: 'Editar',
              editRow: {
                deleteText: 'Tem certeza que deseja apagar esta linha?',
                cancelTooltip: 'Cancelar',
                saveTooltip: 'Salvar',
              },
              deleteTooltip: 'Apagar',
            },
          }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
          // onSearchChange={data => alert(data)}
          // onRowSelected={row => alert(row)}
          options={{
            selection: true,
          }}
          actions={[
            {
              tooltip: 'Apagar todos os Professores',
              icon: 'delete',
              onClick: (evt, data) => alert(`Olha só, ${data.length} a menos`),
            },
          ]}
        />
      </NamedSection>
    </Container>
  );
}
