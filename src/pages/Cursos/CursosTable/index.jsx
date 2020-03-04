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
  const columns = [{ title: 'Curso', field: 'name' }];

  return (
    <EnviaDataTable
      title="Envia - Cursos"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'curso',
        plural: 'cursos',
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
