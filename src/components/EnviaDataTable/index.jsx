import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function EnviaDataTable({
  title,
  columns,
  tableData,
  dataVisualization,
  editableOptions,
  isSelectable,
  actions,
}) {
  const { singular, plural } = dataVisualization;
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={tableData}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'linhas',
          labelRowsPerPage: `${capitalize(plural)} por página:`,
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
          nRowsSelected: `{0} ${plural} selecionados`,
          searchTooltip: `Buscar ${singular}`,
          searchPlaceholder: `Buscar ${singular}`,
        },
        header: {
          actions: 'Ações',
        },
        body: {
          emptyDataSourceMessage: 'Sem dados para mostrar.',
          filterRow: {
            filterTooltip: 'Filtro',
          },
          addTooltip: `Adicionar ${singular}`,
          editTooltip: `Editar ${singular}`,
          editRow: {
            deleteText: `Tem certeza que deseja apagar este ${singular}?`,
            cancelTooltip: 'Cancelar',
            saveTooltip: `Salvar ${singular}`,
          },
          deleteTooltip: `Apagar ${singular}`,
        },
      }}
      editable={editableOptions}
      // onSearchChange={data => alert(data)}
      // onRowSelected={row => alert(row)}
      options={{
        selection: isSelectable,
      }}
      actions={actions}
    />
  );
}

EnviaDataTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setTableData: PropTypes.func.isRequired,
  dataVisualization: PropTypes.objectOf(PropTypes.string),
  editableOptions: PropTypes.objectOf(PropTypes.func),
  isSelectable: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.object),
};

EnviaDataTable.defaultProps = {
  dataVisualization: { singular: 'linha', plural: 'linhas' },
  editableOptions: {},
  isSelectable: false,
  actions: [],
};
