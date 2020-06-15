import React from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProfessoresTable from '~/pages/Professores/ProfessoresTable/index.jsx';
// import api from '~/services/api';

export default function ProfessoresDataTable({ actions }) {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data, status } = await api.get('professores');
  //     if (status !== 200) return;

  //     setTableData(data);
  //   })();
  // }, []);

  // return <ProfessoresTable tableData={tableData} actions={actions} />;
  console.log(actions);
  return <>Not implemented yet</>;
}

ProfessoresDataTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
