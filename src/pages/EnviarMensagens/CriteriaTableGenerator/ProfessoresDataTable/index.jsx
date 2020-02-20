import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../../components/EnviaDataTable';

// import { Container } from './styles';

export default function ProfessoresDataTable({ actions }) {
  const columns = [{ title: 'Professor', field: 'name' }];

  const [tableData, setTableData] = useState([
    { name: 'Zezim' },
    { name: 'Maria' },
    { name: 'Zuleide' },
  ]);

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
      isSelectable
      actions={actions}
    />
  );
}

ProfessoresDataTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
