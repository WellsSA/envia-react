import React from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../components/EnviaDataTable';

export default function AlunosTable({
  tableData,
  setTableData,
  editableOptions,
  actions,
}) {
  const columns = [{ title: 'Professor', field: 'name' }];

  return (
    <EnviaDataTable
      title="Envia - Professores"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'professor(a)',
        plural: 'professores(as)',
      }}
      editableOptions={editableOptions}
      isSelectable
      actions={actions}
    />
  );
}

AlunosTable.propTypes = {
  editableOptions: PropTypes.objectOf(PropTypes.func),
  actions: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func.isRequired,
};

AlunosTable.defaultProps = {
  editableOptions: {},
  actions: [],
};
