import React from 'react';
import PropTypes from 'prop-types';
import AlunosTable from '../../../Alunos/AlunosTable';
// import { Container } from './styles';

export default function AlunosDataTable({ tableData, actions }) {
  return <AlunosTable tableData={tableData} actions={actions} />;
}

AlunosDataTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
