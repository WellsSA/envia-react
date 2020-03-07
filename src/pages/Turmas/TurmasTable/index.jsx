import React from 'react';
import PropTypes from 'prop-types';
import EnviaDataTable from '../../../components/EnviaDataTable';

export default function CursosTable({
  tableData,
  setTableData,
  editableOptions,
  actions,
  isSelectable,
}) {
  const columns = [
    { title: 'Nome da Turma', field: 'name' },
    { title: 'Dias de Aula', field: 'days' },
    { title: 'Horários', field: 'hours' },
    { title: 'Curso', field: 'course.name' },
    { title: 'Professor', field: 'teacher.name' },
  ];

  return (
    <EnviaDataTable
      title="Envia - Turmas"
      columns={columns}
      tableData={tableData}
      setTableData={setTableData}
      dataVisualization={{
        singular: 'turma',
        plural: 'turmas',
      }}
      editableOptions={editableOptions}
      isSelectable={isSelectable}
      actions={actions}
    />
  );
}

CursosTable.propTypes = {
  editableOptions: PropTypes.objectOf(PropTypes.func),
  actions: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool,
};

CursosTable.defaultProps = {
  editableOptions: {},
  actions: [],
  isSelectable: true,
};
