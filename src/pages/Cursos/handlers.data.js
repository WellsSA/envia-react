import api from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/notifyHelper';

export function handleInsert(newData, setTableData, dispatch) {
  return new Promise((resolve, reject) => {
    api
      .post('cursos', {
        name: newData.name,
      })
      .then(({ data }) => {
        setTableData(prevState => [...prevState, data]);
        notifySuccess('Curso cadastrado com sucesso!', dispatch);
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao cadastrar curso!', dispatch);
        reject(data);
      });
  });
}

export function handleUpdate(newData, oldData, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .put(`cursos/${oldData.id}`, {
        name: newData.name,
      })
      .then(resolve())
      .catch(reject());

    if (oldData) {
      setTableData(prevState => {
        const data = [...prevState];
        data[data.indexOf(oldData)] = newData;
        return data;
      });
    }
  }, 600);
}

export function handleDelete(oldData, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .delete(`cursos/${oldData.id}`)
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
export function handleDeleteAll(evt, dataToDelete, setTableData) {
  setTableData(prevState => {
    const data = [...prevState];
    dataToDelete.forEach(professor =>
      api
        .delete(`cursos/${professor.id}`)
        .then(data.splice(data.indexOf(professor), 1))
    );
    return data;
  });
}
