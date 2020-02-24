import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AlunosTable from '../../../Alunos/AlunosTable';
import { setupAlunos } from '../../../../store/modules/message/actions';

export default function AlunosDataTable({ tableData }) {
  const dispath = useDispatch();
  return (
    <AlunosTable
      tableData={tableData}
      actions={[
        {
          tooltip: 'Selecionar estes alunos(as)',
          icon: 'check',
          onClick: (evt, data) => {
            if (data) {
              dispath(setupAlunos({ data }));
            }
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
