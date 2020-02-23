import api from '../../services/api';
import { notifySuccess, notifyError } from '../../store/modules/notify/actions';

export function handleInsert(newData, setTableData, dispatch) {
  return new Promise((resolve, reject) => {
    console.log('inside handler');
    api
      .post('professores', {
        name: newData.name,
      })
      .then(({ data }) => {
        setTableData(prevState => [...prevState, data]);
        dispatch(notifySuccess('Professor cadastrado com sucesso!'));
        resolve();
      })
      .catch(data => {
        dispatch(notifyError('Falha ao cadastrar professor!'));
        reject(data);
      });
  });
}

export function handleUpdate(newData, oldData, setTableData) {
  return new Promise((resolve, reject) => {
    api
      .put(`professores/${oldData.id}`, {
        name: newData.name,
      })
      .then(resolve())
      .catch(reject());

    if (oldData) {
      console.log('update', {
        newData,
        oldData,
      });
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
export function handleDeleteAll(evt, dataToDelete, setTableData) {
  // @TODO: implementar deleteAll
  setTableData(prevState => {
    const data = [...prevState];
    dataToDelete.forEach(professor =>
      api
        .delete(`professores/${professor.id}`)
        .then(data.splice(data.indexOf(professor), 1))
    );
    return data;
  });
}
