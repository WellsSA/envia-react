import api from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/notifyHelper';

export function handleInsert(
  { name, days, hours, course, teacher },
  setTableData,
  dispatch
) {
  return new Promise((resolve, reject) => {
    console.log('inside handler');
    api
      .post('turmas', {
        name,
        days,
        hours,
        course: {
          id: +course,
          name: 'TODO: Not related yet',
        },
        teacher: {
          id: +teacher,
          name: 'TODO: Not related yet',
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
          name: 'TODO: Not related yet',
        },
        teacher: {
          id: +teacher,
          name: 'TODO: Not related yet',
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

    // if (oldData) {
    //   console.log('update', {
    //     newData,
    //     oldData,
    //   });
    //   setTableData(prevState => {
    //     const data = [...prevState];
    //     data[data.indexOf(oldData)] = newData;
    //     return data;
    //   });
    // }
  }, 600);
}

export function handleDelete(oldData, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .delete(`professores/${oldData.id}`)
      .then(() => {
        setTableData(prevState => {
          const data = [...prevState];
          data.splice(data.indexOf(oldData), 1);
          return data;
        });
        resolve();
      })
      .catch(reject());
  });
}
