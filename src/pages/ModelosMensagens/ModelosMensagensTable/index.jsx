import React from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../components/EnviaDataTable';

export default function CursosTable({
  tableData,
  setTableData,
  editableOptions,
  actions,
  isSelectable,
}) {
  const columns = [
    { title: 'Titulo', field: 'title' },
    { title: 'Saudação', field: 'greeting' },
    { title: 'Conteúdo', field: 'content' },
  ];

  return (
    <EnviaDataTable
      title="Envia - Modelos de Mensagens"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'modelo',
        plural: 'modelos',
      }}
      editableOptions={editableOptions}
      isSelectable={isSelectable}
      actions={actions}
    />
  );
}

CursosTable.propTypes = {
  editableOptions: PropTypes.objectOf(PropTypes.func),
  actions: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool,
};

CursosTable.defaultProps = {
  editableOptions: {},
  actions: [],
  isSelectable: true,
};
