import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import { EnviaDataTable } from '~/components';

export default function ResponsaveisDataTable({ actions }) {
  const columns = [
    { title: 'Nome', field: 'name' },
    { title: 'E-mail', field: 'email' },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await api.get('responsaveis');
      if (status !== 200) return;

      setTableData(data);
    })();
  }, []);

  return (
    <EnviaDataTable
      title="Envia - Responsáveis"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'responsável',
        plural: 'responsáveis',
      }}
      isSelectable
      actions={actions}
    />
  );
}

ResponsaveisDataTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
