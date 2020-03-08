import api from '../../services/api';
import { notifySuccess, notifyError } from '../../utils/notifyHelper';

export function handleInsert(
  { title, greeting, content },
  setTableData,
  dispatch
) {
  return new Promise((resolve, reject) => {
    console.log('inside handler');
    api
      .post('modelosMensagens', { title, greeting, content })
      .then(({ data }) => {
        setTableData(prevState => [...prevState, data]);
        notifySuccess('Modelo cadastrado com sucesso!', dispatch);
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao cadastrar modelo!', dispatch);
        reject(data);
      });
  });
}

export function handleUpdate(
  { id, title, greeting, content },
  setTableData,
  tableDataId,
  dispatch
) {
  return new Promise((resolve, reject) => {
    api
      .put(`modelosMensagens/${+id}`, { id: +id, title, greeting, content })
      .then(({ data: newData }) => {
        setTableData(prevState => {
          const data = [...prevState];
          data[tableDataId] = newData;
          return data;
        });
        notifySuccess('Modelo editado com sucesso!', dispatch);
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao editar Modelo!', dispatch);
        reject(data);
      });
  }, 600);
}

export function handleDelete({ id, tableDataId }, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .delete(`modelosMensagens/${+id}`)
      .then(() => {
        setTableData(prevState => {
          const data = [...prevState];
          data.splice(tableDataId, 1);
          return data;
        });
        notifySuccess('Modelo apagado com sucesso!');
        resolve();
      })
      .catch(data => {
        notifyError('Falha ao apagadar Modelo!');
        reject(data);
      });
  });
}
