import React from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../components/EnviaDataTable';

export default function ProfessoresTable({
  tableData,
  setTableData,
  editableOptions,
  actions,
  isSelectable,
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
      isSelectable={isSelectable}
      actions={actions}
    />
  );
}

ProfessoresTable.propTypes = {
  editableOptions: PropTypes.objectOf(PropTypes.func),
  actions: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func,
  isSelectable: PropTypes.bool,
};

ProfessoresTable.defaultProps = {
  setTableData: () => {},
  editableOptions: {},
  actions: [],
  isSelectable: true,
};
