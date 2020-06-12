import React from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../components/EnviaDataTable';

export default function AlunosTable({
  tableData,
  setTableData,
  editableOptions,
  actions,
  isSelectable,
}) {
  const columns = [
    { title: 'Nome', field: 'name' },
    { title: 'Data de Nascimento', field: 'birthDate', type: 'date' },
    { title: 'E-mail', field: 'email' },
    { title: 'Celular', field: 'phone', type: 'numeric' },
    { title: 'Responsável', field: 'responsible' },
    { title: 'E-mail Responsável ', field: 'responsible_email' },
    { title: 'Celular Responsável', field: 'responsible_phone' },
    // { title: 'Turma', field: 'turmas' },
  ];

  return (
    <EnviaDataTable
      title="Envia - Alunos"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'aluno(a)',
        plural: 'alunos(as)',
      }}
      editableOptions={editableOptions}
      isSelectable={isSelectable}
      actions={actions}
    />
  );
}

AlunosTable.propTypes = {
  editableOptions: PropTypes.objectOf(PropTypes.func),
  actions: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool,
};

AlunosTable.defaultProps = {
  editableOptions: {},
  actions: [],
  isSelectable: true,
};
