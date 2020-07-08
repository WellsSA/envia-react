import api from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/notifyHelper';

export function handleInsert(
  { name, days, hours, course, teacher },
  setTableData,
  dispatch
) {
  return new Promise((resolve, reject) => {
    api
      .post('turmas', {
        name,
        days,
        hours,
        course: {
          id: +course,
        },
        teacher: {
          id: +teacher,
        },
      })
      .then(({ data }) => {
        setTableData(prevState => [...prevState, data]);
        notifySuccess('Turma cadastrada com sucesso!', dispatch);
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao cadastrar turma!', dispatch);
        reject(data);
      });
  });
}

export function handleUpdate(
  { id, name, days, hours, course, teacher },
  setTableData,
  tableDataId,
  dispatch
) {
  return new Promise((resolve, reject) => {
    api
      .put(`turmas/${+id}`, {
        name,
        days,
        hours,
        course: {
          id: +course,
        },
        teacher: {
          id: +teacher,
        },
      })
      .then(({ data: newData }) => {
        setTableData(prevState => {
          const data = [...prevState];
          data[tableDataId] = newData;
          return data;
        });
        notifySuccess('Turma editada com sucesso!', dispatch);
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao editar turma!', dispatch);
        reject(data);
      });
  }, 600);
}

export function handleDelete(id, tableDataId, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .delete(`turmas/${+id}`)
      .then(() => {
        setTableData(prevState => {
          const data = [...prevState];
          data.splice(tableDataId, 1);
          return data;
        });
        notifySuccess('Turma apagada com sucesso!');
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao apagadar turma!');
        reject(data);
      });
  });
}
