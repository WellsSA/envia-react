import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TurmasTable from '~/pages/Turmas/TurmasTable/index.jsx';
import api from '~/services/api';

export default function ProfessoresDataTable({ actions }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await api.get('turmas');
      if (status !== 200) return;

      setTableData(data);
    })();
  }, []);

  return <TurmasTable tableData={tableData} actions={actions} />;
}

ProfessoresDataTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
