import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CursosTable from '~/pages/Cursos/CursosTable/index.jsx';
import api from '~/services/api';

export default function CursosDataTable({ actions }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await api.get('cursos');
      if (status !== 200) return;

      setTableData(data);
    })();
  }, []);

  return <CursosTable tableData={tableData} actions={actions} />;
}

CursosDataTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
