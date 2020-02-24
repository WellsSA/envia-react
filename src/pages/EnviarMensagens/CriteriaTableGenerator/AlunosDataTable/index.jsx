import React from 'react';
import PropTypes from 'prop-types';
import AlunosTable from '../../../Alunos/AlunosTable';
// import { Container } from './styles';

export default function AlunosDataTable({ tableData }) {
  return (
    <AlunosTable
      tableData={tableData}
      actions={[
        {
          tooltip: 'Selecionar estes alunos(as)',
          icon: 'check',
          onClick: (evt, data) => {
            console.log(evt, data);
            return null;
          },
        },
      ]}
    />
  );
}

AlunosDataTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
